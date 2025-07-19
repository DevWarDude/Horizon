import { useAuth } from "../context/AuthContext";

export const useLoanData = () => {
  const { profile, refetchProfile, profileLoading: isUserLoading } = useAuth();
  const userCurrency = profile?.currency || "USD";
  const balance = Number(profile?.balance || 0);
  const loan = Number(profile?.loan || 0);
  const loanPurpose = profile?.LoanPurpose || "";

  return {
    profile,
    isUserLoading,
    refetchProfile,
    userCurrency,
    balance,
    loan,
    loanPurpose,
  };
};
