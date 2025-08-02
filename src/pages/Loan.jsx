import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import supabase from "../services/supabase";
import { useLoanData } from "../hooks/useLoanData";
import { addTransaction } from "../services/transactionService";
import { formatAmount } from "../utils/currency";
import DepositForm from "../components/loans/DepositForm";
import LoanForm from "../components/loans/LoanForm";
import WithdrawForm from "../components/loans/WithdrawForm";
import RepayForm from "../components/loans/RepayForm";
import { useAuth } from "../context/AuthContext";

function Loan() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [repayAmount, setRepayAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);
  const [isRepaying, setIsRepaying] = useState(false);

  const {
    profile,
    isUserLoading,
    refetchProfile,
    balance,
    loan,
    loanPurpose: existingLoanPurpose,
  } = useLoanData();

  const {
    profile: { fName },
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${fName || "User"}'s Loan | Horizon`;
    refetchProfile();
  }, [fName, refetchProfile]);

  // --- Handlers ---
  const handleDeposit = (e) => {
    e.preventDefault();
    if (!depositAmount) return;
    toast.error("Unable to deposit. Please try again.");
    navigate(`/${profile?.fName}/connect-bank`);
  };

  const handleWithdrawal = (e) => {
    e.preventDefault();
    if (!withdrawalAmount) return;
    toast.error("Unable to withdraw. Please try again.");
    navigate(`/${profile?.fName}/connect-bank`);
  };

  const handleRequestLoan = async (e) => {
    e.preventDefault();
    if (!loanAmount || !loanPurpose)
      return toast.error("Fill in all loan details.");
    if (loan > 0)
      return toast.warning(
        "Please repay current loan before requesting another."
      );

    try {
      setIsLoading(true);

      const { error } = await supabase
        .from("profiles")
        .update({
          loan: loanAmount,
          LoanPurpose: loanPurpose,
        })
        .eq("id", profile.id);

      if (error) throw error;

      await addTransaction({
        user_id: profile.id,
        type: "deposit",
        amount: loanAmount,
        description: `Loan granted for: ${loanPurpose}`,
      });

      toast.success("Loan granted successfully!");
      setLoanAmount("");
      setLoanPurpose("");
      await refetchProfile();
    } catch (err) {
      toast.error("Loan request failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRepayLoan = async (e) => {
    e.preventDefault();

    if (!repayAmount || repayAmount <= 0)
      return toast.error("Enter a valid amount");
    if (repayAmount > loan)
      return toast.error("The amount entered exceeds your loan.");

    if (repayAmount > balance) return toast.error("Insufficient balance");

    setIsRepaying(true);

    const remainingLoan = repayAmount < loan && loan - repayAmount;
    const updatedLoan = remainingLoan > 0 ? remainingLoan : null;

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          loan: updatedLoan,
          LoanPurpose: updatedLoan ? existingLoanPurpose : null,
        })
        .eq("id", profile.id);

      if (error) throw error;

      await addTransaction({
        user_id: profile.id,
        type: "withdrawal",
        amount: repayAmount,
        description: "Loan repayment",
      });

      toast.success(
        updatedLoan
          ? `Repayment successful. Remaining loan: $${formatAmount(updatedLoan)}`
          : "Loan fully repaid!"
      );

      setRepayAmount("");
      await refetchProfile();
    } catch {
      toast.error("Repayment failed.");
    } finally {
      setIsRepaying(false); // 👈 Re-enable button
    }
  };

  const formattedBalance = `$${formatAmount(balance)}`;
  const formattedLoan = `$${formatAmount(loan)}`;

  if (isUserLoading || !profile)
    return (
      <div className="text-center mt-10 text-gray-500 dark:text-gray-300">
        Loading account...
      </div>
    );

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-10 bg-white dark:bg-slate-900 shadow-lg rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-3xl font-bold text-center mb-3 text-stone-800 dark:text-white">
        Account Operations
      </h2>
      <p className="text-center text-sm text-stone-500 dark:text-gray-400 mb-6">
        Current Balance:{" "}
        <span className="font-medium text-green-600">{formattedBalance}</span>
      </p>

      <p className="text-red-600 text-sm text-center mb-4">
        Deposits and withdrawals are temporarily unavailable.
      </p>

      {loan > 0 && (
        <p className="text-orange-500 text-sm text-center mb-4">
          ⚠️ Outstanding loan: {formattedLoan}
        </p>
      )}

      <div className="space-y-8">
        <DepositForm
          amount={+depositAmount}
          setAmount={setDepositAmount}
          currency={currency}
          setCurrency={setCurrency}
          handleDeposit={handleDeposit}
        />
        <LoanForm
          amount={+loanAmount}
          purpose={loanPurpose}
          setAmount={setLoanAmount}
          setPurpose={setLoanPurpose}
          handleRequestLoan={handleRequestLoan}
          isLoading={isLoading}
        />
        <WithdrawForm
          amount={+withdrawalAmount}
          setAmount={setWithdrawalAmount}
          handleWithdrawal={handleWithdrawal}
        />
        {loan > 0 && (
          <RepayForm
            repayAmount={+repayAmount}
            setRepayAmount={setRepayAmount}
            handleRepayLoan={handleRepayLoan}
            formattedLoan={formattedLoan}
            balance={balance}
            loan={loan}
            isRepaying={isRepaying}
          />
        )}
      </div>
    </motion.div>
  );
}

export default Loan;
