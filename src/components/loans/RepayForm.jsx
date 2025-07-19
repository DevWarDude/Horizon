import PropTypes from "prop-types";
import { FaPiggyBank } from "react-icons/fa";
import { motion } from "framer-motion";
import { formatAmount } from "../../utils/currency";

const RepayForm = ({
  repayAmount,
  setRepayAmount,
  handleRepayLoan,
  balance,
  isRepaying,
  loan,
}) => (
  <motion.form
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="form-section"
  >
    <h3 className="form-title">
      <FaPiggyBank /> Repay Loan
    </h3>
    <div className="form-flex">
      <input
        type="number"
        value={repayAmount > 0 && repayAmount}
        onChange={(e) => setRepayAmount(+e.target.value)}
        placeholder={`Enter amount (Loan: $${formatAmount(Number(loan))})`}
        className="input-style"
      />
      <button
        onClick={handleRepayLoan}
        disabled={!repayAmount || repayAmount > balance || isRepaying}
        className="action-btn bg-indigo-700"
      >
        {isRepaying ? "Processing..." : "Repay"}
      </button>
    </div>
  </motion.form>
);

RepayForm.propTypes = {
  repayAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,

  setRepayAmount: PropTypes.func.isRequired,
  loan: PropTypes.number.isRequired,
  handleRepayLoan: PropTypes.func.isRequired,
  formattedLoan: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
  isRepaying: PropTypes.bool.isRequired,
};

export default RepayForm;
