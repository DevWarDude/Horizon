import PropTypes from "prop-types";

const TransactionFilters = ({
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
  setCurrentPage,
}) => (
  <div className="mb-4 space-y-3">
    <input
      type="text"
      placeholder="Search descriptions..."
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
      }}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 bg-white dark:bg-slate-800 text-stone-800 dark:text-stone-50 placeholder:text-slate-500 dark:placeholder:text-stone-100"
    />

    <select
      value={filterType}
      onChange={(e) => {
        setFilterType(e.target.value);
        setCurrentPage(1);
      }}
      className="w-full px-4 py-2 border rounded-md bg-white dark:bg-slate-800 text-stone-800 dark:text-stone-50"
    >
      <option value="all">All Transactions</option>
      <option value="deposit">Deposits</option>
      <option value="withdrawal">Withdrawals</option>
      <option value="transfer">Transfers</option>
    </select>
  </div>
);

TransactionFilters.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  setFilterType: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default TransactionFilters;
