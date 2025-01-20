import css from "./PrimaryButton.module.css";

function PrimaryButton({ onClick, width, type, children }) {
  return (
    <button
      className={css.button}
      style={{ width }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
