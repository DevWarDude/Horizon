import supabase from "../services/supabase";

export const updateProfile = async ({
  userId,
  fName,
  lName,
  currency,
  img,
}) => {
  const { error } = await supabase
    .from("profiles")
    .update({
      fName,
      lName,
      currency,
      img,
    })
    .eq("id", userId);

  if (error) throw new Error("Failed to update profile");
};
