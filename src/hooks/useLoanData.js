// hooks/useLoanData.js
import { useUser } from "../context/UserContext";
import { useExchangeRate } from "./useExchangeRate";

export const useLoanData = () => {
  const { profile, refetch, isLoading: isUserLoading } = useUser();
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
    refetch,
    userCurrency,
    balance,
    loan,
    loanPurpose,
    rate,
    convertedBalanceValue,
    convertedLoanValue,
  };
};
