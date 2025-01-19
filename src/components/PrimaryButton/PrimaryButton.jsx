import css from "./PrimaryButton.module.css";

function PrimaryButton({ onClick, width, children }) {
  return (
    <button className={css.button} style={{ width }} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;
