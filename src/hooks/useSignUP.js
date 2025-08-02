import { useMutation } from "@tanstack/react-query";
import supabase from "../services/supabase";

export function useSignUp() {
  return useMutation({
    mutationFn: async ({ email, password, ...profile }) => {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw new Error(error.message);

      const user = data.user;

      if (!user) throw new Error("User creation failed");

      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: user.id,
          email,
          balance: 20,
          currency: "USD",
          ...profile,
        },
      ]);

      if (profileError) throw new Error(profileError.message);

      return user;
    },
  });
}
