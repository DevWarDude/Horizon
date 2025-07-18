import supabase from "../services/supabase";

export const updateProfile = async ({ id, fName, lName, currency, img }) => {
  const { error } = await supabase
    .from("profiles")
    .update({
      fName,
      lName,
      currency,
      img,
    })
    .eq("id", id);

  if (error) throw new Error("Failed to update profile");
};
