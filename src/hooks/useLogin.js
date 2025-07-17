// hooks/useLogin.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import supabase from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchProfile } from "../utils/fetchProfile";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw new Error(error.message);
      return data;
    },

    onSuccess: async ({ user }) => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("fName")
        .eq("id", user.id)
        .single();

      const fName = profile?.fName?.toLowerCase() || "user";
      queryClient.prefetchQuery({
        queryKey: ["user-profile", user.id],
        queryFn: () => fetchProfile(user.id),
        staleTime: 1000 * 60 * 60 * 24,
      });
      toast.success("Login successful!");

      navigate(`/${fName || "User"}/dashboard`);
    },

    onError: (err) => {
      if (err.message === "Failed to fetch") {
        toast.error("Network error. Please check your connection");
      } else {
        toast.error(err.message);
      }
    },
  });
}
