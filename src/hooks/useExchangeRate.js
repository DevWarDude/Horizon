import { useQuery } from "@tanstack/react-query";

const fetchExchangeRate = async (currency) => {
  if (currency === "USD") return 1;

  const res = await fetch(
    `https://api.exchangerate.host/latest?base=USD&symbols=${currency}`
  );
  const data = await res.json();

  if (!data?.rates?.[currency]) {
    throw new Error("Exchange rate not found");
  }

  return data.rates[currency];
};

export const useExchangeRate = (currency) =>
  useQuery({
    queryKey: ["exchange-rate", currency],
    queryFn: () => fetchExchangeRate(currency),
    enabled: !!currency,
    staleTime: 1000 * 60 * 30,
  });
