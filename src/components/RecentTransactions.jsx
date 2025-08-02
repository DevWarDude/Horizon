import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useExchangeRate } from "../hooks/useExchangeRate";
import { formatCurrency } from "../utils/currency";
import { formatDate } from "../utils/formatDate";

const RecentTransactions = ({ transactions, isLoading, error, currency }) => {
  const { user: routeFName } = useParams();
  const { data: exchangeRate = 1, isLoading: isRateLoading } = useExchangeRate(
    currency || "USD"
  );

  return (
    <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg shadow-md w-full md:flex-1 min-w-0 border dark:border-slate-700 ">
      {isLoading && (
        <div className="flex justify-center items-center ">
          <p className="text-gray-500 dark:text-gray-400">
            Loading transactions...
          </p>
        </div>
      )}

      {error && (
        <div className="flex justify-center items-center ">
          <p className="text-red-500">Error: {error.message}</p>
        </div>
      )}
      {/*
      {!transactions?.length && (
        <div className="flex justify-center items-center ">
          <p className="text-gray-500 dark:text-gray-400">
            No transactions yet.
          </p>
        </div>
      )} */}

      {!isLoading && !error && (
        <>
          <h3 className="text-xl font-medium mb-4 text-slate-700 dark:text-gray-200">
            Your Recent Transactions
          </h3>
          <ul className="divide-y divide-gray-300 dark:divide-slate-600">
            {transactions.slice(0, 3).map((tx) => {
              const convertedAmount = tx.amount * exchangeRate;
              return (
                <li
                  key={tx.id}
                  className="py-3 flex justify-between items-center text-sm md:text-base"
                >
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white capitalize">
                      {tx.type}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs">
                      {formatDate(tx.created_at)}
                    </p>
                  </div>
                  <div
                    className={`font-semibold ${
                      tx.type === "deposit" || tx.type === "bonus"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {isRateLoading ? (
                      <span className="ml-1 text-sm text-gray-400">
                        <ClipLoader size={10} color="#3B82F6" />
                      </span>
                    ) : (
                      <>
                        {tx.type === "deposit" || tx.type === "bonus"
                          ? "+"
                          : "-"}
                        {formatCurrency(convertedAmount, currency)}
                      </>
                    )}
                  </div>
                </li>
              );
            })}

            {transactions.length > 3 && (
              <li className="pt-3 text-right">
                <Link
                  to={`/${routeFName}/transaction-history`}
                  className="text-blue-600 hover:underline text-sm md:text-base"
                >
                  See more →
                </Link>
              </li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

RecentTransactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.oneOf([
        "deposit",
        "withdrawal",
        "transfer",
        "payment",
        "bonus",
      ]),
      amount: PropTypes.number.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ),
  isLoading: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
  currency: PropTypes.string,
};

export default RecentTransactions;
