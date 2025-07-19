import { toast } from "react-toastify";

const DeleteAccountButton = () => {
  const handleDeleteAccount = async () => {
    toast.warning("Unable to delete account");
    // navigate("/sign-in");
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
