import { useDispatch, useSelector } from "react-redux";
import { selectTypeFilter } from "../../redux/filters/selectors";
import FilterGrid from "../FilterGrid/FilterGrid";
import { toggleType } from "../../redux/filters/slice";

const availableTypes = [
  {
    key: "panelTruck",
    label: "Van",
    icon: "bi_grid-1x2.svg",
  },
  {
    key: "fullyIntegrated",
    label: "Fully Integrated",
    icon: "bi_grid.svg",
  },
  {
    key: "alcove",
    label: "Alcove",
    icon: "bi_grid-3x3-gap.svg",
  },
];

function TypeFilter() {
  const dispatch = useDispatch();
  const selectedTypes = useSelector(selectTypeFilter);

  const handleSelect = (type) => {
    dispatch(toggleType(type.key));
  };

  return (
    <FilterGrid
      title="Vehicle type"
      items={availableTypes}
      selectedItemsKeys={[selectedTypes]}
      onSelect={handleSelect}
    />
  );
}

export default TypeFilter;
