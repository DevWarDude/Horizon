export const symbolMap = {
  USD: "$",
  EUR: "€",
  NGN: "₦",
  GBP: "£",
  JPY: "¥",
};

export const getCurrencySymbol = (currency) => symbolMap[currency] || "";

export const formatAmount = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const formatCurrency = (amount, userCurrency) => {
  const symbol = symbolMap[userCurrency] || userCurrency;
  const formatted = amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${symbol}${formatted}`;
};
