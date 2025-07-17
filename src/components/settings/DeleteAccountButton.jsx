import { useNavigate } from "react-router-dom";
import supabase from "../../services/supabase";
import { toast } from "react-toastify";

const DeleteAccountButton = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) return toast.error("Error deleting account");
    toast.success("Account deleted!");
    navigate("/sign-in");
  };

  return (
    <div className="pt-4 border-t border-gray-200 dark:border-slate-700 text-right">
      <button
        type="button"
        onClick={handleDeleteAccount}
        className="text-red-600 font-medium hover:underline"
      >
        Delete Account
      </button>
    </div>
  );
};

export default DeleteAccountButton;
