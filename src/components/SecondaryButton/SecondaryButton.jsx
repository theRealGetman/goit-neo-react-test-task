import css from "./SecondaryButton.module.css";

function SecondaryButton({ onClick, width, children }) {
  return (
    <button className={css.button} style={{ width }} onClick={onClick}>
      {children}
    </button>
  );
}

export default SecondaryButton;
