import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-6 flex justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
          className={`h-8 w-8 flex items-center justify-center rounded-md font-medium transition hover:scale-105 ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 dark:bg-slate-600 dark:text-slate-100"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
