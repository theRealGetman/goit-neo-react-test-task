import { useDispatch, useSelector } from "react-redux";
import { selectEquipmentFilter } from "../../redux/filters/selectors";
import { toggleEquipment } from "../../redux/filters/slice";
import FilterGrid from "../FilterGrid/FilterGrid";

const availableEquipment = [
  {
    key: "AC",
    label: "AC",
    icon: "wind.svg",
  },
  {
    key: "automatic",
    label: "Automatic",
    icon: "diagram.svg",
  },
  {
    key: "kitchen",
    label: "Kitchen",
    icon: "cup-hot.svg",
  },
  {
    key: "TV",
    label: "TV",
    icon: "tv.svg",
  },
  {
    key: "bathroom",
    label: "Bathroom",
    icon: "ph_shower.svg",
  },
];

function EquipmentFilter() {
  const dispatch = useDispatch();
  const selectedEquipment = useSelector(selectEquipmentFilter);

  const handleSelect = (equipment) => {
    dispatch(toggleEquipment(equipment.key));
  };

  return (
    <FilterGrid
      title="Vehicle equipment"
      items={availableEquipment}
      selectedItemsKeys={selectedEquipment}
      onSelect={handleSelect}
    />
  );
}

export default EquipmentFilter;
