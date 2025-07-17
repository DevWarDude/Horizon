// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import supabase from "../services/supabase";

const AuthContext = createContext();

const fetchUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw new Error("Failed to fetch user profile");
  return data;
};

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const queryClient = useQueryClient();

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setUser(data.session?.user || null);
      setAuthLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user || null);
        if (!session?.user) {
          // Clear all query cache when user logs out
          queryClient.clear();
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [queryClient]);

  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
    refetch: refetchProfile,
  } = useQuery({
    queryKey: ["user-profile", user?.id],
    queryFn: () => fetchUserProfile(user.id),
    enabled: !!user,
    staleTime: 0,
    cacheTime: 0,
  });

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        authLoading,
        profile,
        profileLoading,
        profileError,
        refetchProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
