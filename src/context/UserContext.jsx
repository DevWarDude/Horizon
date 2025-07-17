// context/UserContext.js
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";
import supabase from "../services/supabase";

const UserContext = createContext();

// 👤 Fetch the authenticated user's profile
const fetchUserProfile = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("profiles")
    .select(
      "id, fName, lName, currency,country,city, balance, loan, LoanPurpose, img"
    ) // added LoanPurpose for completeness
    .eq("id", user.id)
    .single();

  if (error) throw new Error("Failed to fetch user profile");

  return { userId: user.id, ...data };
};

export const UserProvider = ({ children }) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["current-user"],
    queryFn: fetchUserProfile,
    staleTime: 1000 * 60 * 60, // 1 hour
    cacheTime: 1000 * 60 * 60, // 1 hour
  });

  return (
    <UserContext.Provider
      value={{
        profile: data,
        isLoading,
        isError,
        refetch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for using user context
export const useUser = () => useContext(UserContext);

// Prop type validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
