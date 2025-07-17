// hooks/useLoanData.js
import { useAuth } from "../context/AuthContext";
import { useExchangeRate } from "./useExchangeRate";

export const useLoanData = () => {
  const {
    profile,
    refetch: refetchProfile,
    profileLoading: isUserLoading,
  } = useAuth();
  const userCurrency = profile?.currency || "USD";
  const balance = Number(profile?.balance || 0);
  const loan = Number(profile?.loan || 0);
  const loanPurpose = profile?.LoanPurpose || "";

  const { data: rate = 1, isLoading: isRateLoading } =
    useExchangeRate(userCurrency);

  const convertedBalanceValue = balance * rate;
  const convertedLoanValue = loan * rate;

  return {
    profile,
    isUserLoading,
    isRateLoading,
    refetchProfile,
    userCurrency,
    refetchProfile,
    balance,
    loan,
    loanPurpose,
    rate,
    convertedBalanceValue,
    convertedLoanValue,
  };
};
