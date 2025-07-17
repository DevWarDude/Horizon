// src/hooks/useUserProfile.js
import { useQuery } from "@tanstack/react-query";
import supabase from "../services/supabase";

export const useUserProfile = (userId) =>
  useQuery({
    queryKey: ["user-profile", userId],
    enabled: !!userId,
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("fName, lName, currency, balance, country, city, dob")
        .eq("id", userId)
        .single();

      if (error || !data) throw new Error("Failed to fetch profile");

      return { userId, ...data, error };
    },
  });
