import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} text-lg font-semibold bg-[#4893ff] text-stone-100 tracking-wide py-1 px-2  font-jost`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
};

export default Button;
