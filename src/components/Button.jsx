import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[type]} text-lg font-semibold bg-[#4893ff] text-stone-100 tracking-wide py-1 px-2  font-jost`}
    >
      {children}
    </button>
  );
}

export default Button;
