import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase";
import { toast } from "react-toastify";
import { useState } from "react";

export function useLogout() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    try {
      setIsLoading(true); // Start loading
      const { error } = await supabase.auth.signOut();

      if (error) throw error;

      toast.success("Logged out successfully");

      navigate("/sign-in");
    } catch (err) {
      console.error("Logout error:", err.message);
      toast.error("Logout failed. Please check your connection.");
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return { logout, isLoading };
}
