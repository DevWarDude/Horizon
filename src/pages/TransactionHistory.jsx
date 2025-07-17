import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getTransactions } from "../services/transactionService";
import { useUser } from "../context/UserContext";
import { useExchangeRate } from "../hooks/useExchangeRate";
import { motion } from "framer-motion";

import TransactionFilters from "../components/transactions/TransactionFilters";
import TransactionItem from "../components/transactions/TransactionItem";
import Pagination from "../components/transactions/Pagination";

const TransactionHistory = () => {
  const { profile, refetch: refetchUser } = useUser();

  useEffect(() => {
    refetchUser();
  }, [refetchUser]);

  const userId = profile?.id;
  const userCurrency = profile?.currency || "USD";

  const { data: allTransactions = [], isLoading } = useQuery({
    queryKey: ["transactions", userId],
    queryFn: () => getTransactions(userId),
    enabled: !!userId,
  });

  useEffect(() => {
    document.title = `${profile.fName}'s Transactions | Horizon`;
  }, [profile.fName]);

  const { data: exchangeRate = 1, isLoading: isRateLoading } =
    useExchangeRate(userCurrency);

  const [currentPage, setCurrentPage] = useState(1);
  const [filterType, setFilterType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const transactionsPerPage = 4;

  const filteredTransactions = allTransactions.filter((tx) => {
    const matchesType = filterType === "all" || tx.type === filterType;
    const matchesSearch = tx.description
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const indexOfLastTx = currentPage * transactionsPerPage;
  const indexOfFirstTx = indexOfLastTx - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstTx,
    indexOfLastTx
  );
  const totalPages = Math.ceil(
    filteredTransactions.length / transactionsPerPage
  );

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-xl p-6 mx-auto bg-white dark:bg-slate-900 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-stone-800 dark:text-stone-50">
        Transaction History
      </h2>

      <TransactionFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterType={filterType}
        setFilterType={setFilterType}
        setCurrentPage={setCurrentPage}
      />

      {/* Transaction List */}
      <div className="space-y-5">
        {isLoading ? (
          <p className="text-center text-gray-500 dark:text-stone-400">
            Loading transactions...
          </p>
        ) : currentTransactions.length > 0 ? (
          currentTransactions.map((tx) => (
            <TransactionItem
              key={tx.id}
              tx={tx}
              exchangeRate={exchangeRate}
              isRateLoading={isRateLoading}
              userCurrency={userCurrency}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-stone-400">
            No transactions found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </motion.div>
  );
};

export default TransactionHistory;
