import PropTypes from "prop-types";
import { memo } from "react";
import {
  BanknotesIcon,
  ArrowDownTrayIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/solid";
import { ClipLoader } from "react-spinners";
import { formatCurrency } from "../../utils/currency";

const typeIcon = (type) => {
  switch (type) {
    case "bonus":
      return <BanknotesIcon className="h-5 w-5 text-green-500" />;
    case "deposit":
      return <BanknotesIcon className="h-5 w-5 text-green-500" />;
    case "withdrawal":
      return <ArrowDownTrayIcon className="h-5 w-5 text-red-500" />;
    case "transfer":
      return <ArrowsRightLeftIcon className="h-5 w-5 text-blue-500" />;
    default:
      return null;
  }
};

const TransactionItem = ({ tx, exchangeRate, isRateLoading, userCurrency }) => {
  const convertedAmount = tx.amount * exchangeRate;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-200 dark:border-slate-700">
      <div className="flex items-start sm:items-center gap-3">
        {typeIcon(tx.type)}
        <div>
          <p className="font-medium text-stone-800 dark:text-slate-100">
            {tx.description}
          </p>
          <p className="text-sm text-gray-500 dark:text-stone-300">
            {new Date(tx.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div
        className={`font-semibold text-right sm:text-left ${
          tx.type === "deposit" || tx.type === "bonus"
            ? "text-green-500"
            : tx.type === "withdrawal"
              ? "text-red-500"
              : "text-blue-500"
        }`}
      >
        {isRateLoading ? (
          <span className="ml-1 text-sm text-gray-400">
            <ClipLoader size={10} color="#3B82F6" />
          </span>
        ) : (
          <>
            {tx.type === "deposit" || tx.type === "bonus" ? "+" : "-"}
            {formatCurrency(convertedAmount, userCurrency)}
          </>
        )}
      </div>
    </div>
  );
};

TransactionItem.propTypes = {
  tx: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["deposit", "withdrawal", "transfer", "bonus"])
      .isRequired,
    description: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  exchangeRate: PropTypes.number.isRequired,
  isRateLoading: PropTypes.bool.isRequired,
  userCurrency: PropTypes.string.isRequired,
};

export default memo(TransactionItem);
