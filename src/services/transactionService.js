// services/transactionService.js
import supabase from "./supabase";

// Helper to update user balance
const updateUserBalance = async (user_id, amount, type) => {
  // Get current balance
  const { data: profile, error: fetchError } = await supabase
    .from("profiles")
    .select("balance")
    .eq("id", user_id)
    .single();

  if (fetchError) throw fetchError;

  const currentBalance = profile?.balance || 0;

  const newBalance =
    type === "deposit" ? currentBalance + amount : currentBalance - amount;

  const { error: updateError } = await supabase
    .from("profiles")
    .update({ balance: newBalance })
    .eq("id", user_id);

  if (updateError) throw updateError;
};

export const addTransaction = async ({
  user_id,
  type,
  amount,
  description,
}) => {
  const { data, error } = await supabase.from("transactions").insert([
    {
      user_id,
      type,
      amount,
      description,
    },
  ]);

  if (error) throw error;

  // 🪄 Update balance after successful transaction insert
  await updateUserBalance(user_id, amount, type);

  return data;
};

// services/transactionService.js
export const getTransactions = async (userId) => {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};
