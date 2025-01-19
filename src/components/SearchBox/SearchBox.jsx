import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);
  const onChange = (e) => dispatch(changeFilter(e.target.value));

  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        placeholder="Search"
        id={searchId}
        value={query}
        onChange={onChange}
      />
    </div>
  );
}
