import PropTypes from "prop-types";
import { FaHandHoldingUsd } from "react-icons/fa";
import { motion } from "framer-motion";
import { InfoTooltip } from "../InfoTooltips";

const LoanForm = ({
  amount,
  purpose,
  setAmount,
  setPurpose,
  handleRequestLoan,
  isLoading,
}) => (
  <motion.form
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="form-section"
  >
    <h3 className="form-title">
      <FaHandHoldingUsd /> Request a Loan
      <InfoTooltip message="Loan operates in USD" />
    </h3>
    <div className="form-flex">
      <input
        type="number"
        value={amount > 0 && amount}
        onChange={(e) => setAmount(+e.target.value)}
        placeholder="Loan amount"
        disabled={isLoading}
        className="input-style"
      />
      <input
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Loan purpose"
        className="input-style"
        disabled={isLoading}
      />
      <button
        onClick={handleRequestLoan}
        disabled={!amount || !purpose || isLoading}
        className="action-btn bg-green-700 text-nowrap"
      >
        {isLoading ? "Requesting..." : "Request Loan"}
      </button>
    </div>
  </motion.form>
);

LoanForm.propTypes = {
  amount: PropTypes.number.isRequired,
  purpose: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  setPurpose: PropTypes.func.isRequired,
  handleRequestLoan: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoanForm;
