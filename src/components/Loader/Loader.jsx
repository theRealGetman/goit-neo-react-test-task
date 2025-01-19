import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.loader}>
      <Oval height={60} width={60} color="#e44848" secondaryColor="#f7f7f7" />
    </div>
  );
}

export default Loader;
