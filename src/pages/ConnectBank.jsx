import { useEffect } from "react";
import { motion } from "framer-motion";

function ConnectBank() {
  useEffect(() => {
    document.title = "Connect Bank | Horizon";
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center h-[80vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        type="button"
        className="px-6 py-4 text-lg font-medium rounded-lg bg-blue-600 text-white dark:bg-blue-950 dark:text-slate-50 transition-colors"
      >
        Connect Bank
      </button>
    </motion.div>
  );
}

export default ConnectBank;
