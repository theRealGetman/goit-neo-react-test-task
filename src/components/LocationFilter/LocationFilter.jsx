import { useDispatch, useSelector } from "react-redux";
import { selectLocationFilter } from "../../redux/filters/selectors";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./LocationFilter.module.css";
import clsx from "clsx";
import { changeLocation } from "../../redux/filters/slice";

function LocationFilter() {
  const dispatch = useDispatch();
  const location = useSelector(selectLocationFilter);
  const isActive = Boolean(location);

  const onChange = (e) => {
    dispatch(changeLocation(e.target.value));
  };

  return (
    <div className={css.locationFilter}>
      <label className={css.label}>Location</label>
      <div className={css.inputBox}>
        <SvgIcon
          className={css.icon}
          src={isActive ? "map.svg" : "map-inactive.svg"}
          width="20px"
          height="20px"
        />
        <input
          className={clsx(css.input, { [css.active]: isActive })}
          name="location"
          type="text"
          defaultValue={location}
          placeholder="City"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default LocationFilter;
