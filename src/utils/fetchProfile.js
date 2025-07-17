import supabase from "../services/supabase";

export const fetchProfile = async (userId) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("fName, lName, currency")
    .eq("id", userId)
    .single();

  if (error || !data) throw new Error("Failed to fetch profile");
  return { userId, ...data };
};
