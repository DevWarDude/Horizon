import { supabase } from "../services/supabase";

export async function signUpUser({ email, password, ...profile }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  const { user } = data;

  const { error: profileError } = await supabase
    .from("profiles")
    .insert([{ id: user.id, email, ...profile }]);

  if (profileError) throw new Error(profileError.message);

  return user;
}
