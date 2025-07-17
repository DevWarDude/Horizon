import PropTypes from "prop-types";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const WithdrawForm = ({ amount, setAmount, handleWithdrawal }) => (
  <motion.form
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="form-section"
  >
    <h3 className="form-title">
      <FaArrowUp /> Withdraw Funds
    </h3>
    <div className="form-flex">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
        placeholder="Enter amount"
        className="input-style"
      />
      <button
        onClick={handleWithdrawal}
        disabled={!amount}
        className="action-btn bg-red-700"
      >
        Withdraw
      </button>
    </div>
  </motion.form>
);

WithdrawForm.propTypes = {
  amount: PropTypes.string.isRequired,
  setAmount: PropTypes.func.isRequired,
  handleWithdrawal: PropTypes.func.isRequired,
};

export default WithdrawForm;
