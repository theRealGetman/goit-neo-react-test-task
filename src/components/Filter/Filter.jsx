import { useDispatch, useSelector } from "react-redux";
import LocationFilter from "../LocationFilter/LocationFilter";
import EquipmentFilter from "../EquipmentFilter/EquipmentFilter";
import TypeFilter from "../TypeFilter/TypeFilter";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { fetchCampers } from "../../redux/catalog/operations";
import css from "./Filter.module.css";
import { selectFilter } from "../../redux/filters/selectors";

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSearch = () => {
    dispatch(fetchCampers(filter));
  };

  return (
    <div className={css.filter}>
      <LocationFilter />
      <div>
        <p className={css.label}>Filters</p>
        <EquipmentFilter />
        <TypeFilter />
      </div>
      <PrimaryButton
        className={css.button}
        onClick={handleSearch}
        width="166px"
      >
        Search
      </PrimaryButton>
    </div>
  );
}

export default Filter;
