import { useQuery } from "@tanstack/react-query";
import supabase from "../services/supabase";

export function useTransactions(userId) {
  return useQuery({
    queryKey: ["transactions", userId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!userId,
  });
}
