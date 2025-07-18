import { useAuth } from "../context/AuthContext";
import { useExchangeRate } from "./useExchangeRate";

export const useLoanData = () => {
  const { profile, refetchProfile, profileLoading: isUserLoading } = useAuth();
  const userCurrency = profile?.currency || "USD";
  const balance = Number(profile?.balance || 0);
  const loan = Number(profile?.loan || 0);
  const loanPurpose = profile?.LoanPurpose || "";

  const { data: rate = 1, isLoading: isRateLoading } =
    useExchangeRate(userCurrency);

  const { data: testRate, isLoading: isTestRateLoading } = useExchangeRate(
    "USD",
    userCurrency
  );

  const convertedBalanceValue = balance * rate;
  const convertedLoanValue = loan * rate;

  return {
    profile,
    isUserLoading,
    isRateLoading,
    refetchProfile,
    userCurrency,
    balance,
    loan,
    testRate,
    loanPurpose,
    rate,
    convertedBalanceValue,
    convertedLoanValue,
  };
};
