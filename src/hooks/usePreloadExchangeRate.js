// hooks/usePreloadExchangeRate.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export const usePreloadExchangeRate = () => {
  const { profile } = useAuth();
  const currency = profile?.currency || "USD";

  return useQuery({
    queryKey: ["exchange-rate", currency],
    queryFn: async () => {
      if (currency === "USD") return 1;
      const res = await axios.get(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      return res.data.rates[currency];
    },
    enabled: !!currency,
    staleTime: 1000 * 60 * 10,
  });
};
