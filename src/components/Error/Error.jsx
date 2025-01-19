import css from "./Error.module.css";

function Error({ message }) {
  return (
    <div>
      <h1 className={css.title}>Oops</h1>
      <p className={css.message}>{message || "Something went wrong"}</p>
    </div>
  );
}

export default Error;
