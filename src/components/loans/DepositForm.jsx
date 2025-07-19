import PropTypes from "prop-types";
import { FaMoneyBillWave, FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const DepositForm = ({
  amount,
  setAmount,
  currency,
  setCurrency,
  handleDeposit,
}) => (
  <motion.form
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="form-section"
  >
    <h3 className="form-title">
      <FaMoneyBillWave /> Deposit Funds
    </h3>
    <div className="form-flex">
      <input
        type="number"
        value={amount > 0 && amount}
        onChange={(e) => setAmount(+e.target.value)}
        placeholder="Enter amount"
        className="input-style"
      />
      <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
        className="input-style"
      >
        <option value="USD">US Dollar</option>
        <option value="EUR">Euro</option>
        <option value="GBP">British Pound</option>
      </select>
      <button
        onClick={handleDeposit}
        disabled={!amount}
        className="action-btn bg-blue-700"
      >
        <FaArrowDown /> Deposit
      </button>
    </div>
  </motion.form>
);

DepositForm.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
  handleDeposit: PropTypes.func.isRequired,
};

export default DepositForm;
