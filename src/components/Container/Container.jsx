import css from "./Container.module.css";

function Container({ children, alignment = "center" }) {
  const alignmentStyle =
    alignment === "center"
      ? {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }
      : {};
  return (
    <div className={css.container} style={{ ...alignmentStyle }}>
      {children}
    </div>
  );
}

export default Container;
