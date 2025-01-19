import Divider from "../Divider/Divider";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./FilterGrid.module.css";
import clsx from "clsx";

function FilterGrid({ title, items, selectedItemsKeys, onSelect }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <Divider />
      <div className={css.filterGrid}>
        {items.map((item) => (
          <div
            key={item.key}
            className={clsx(css.item, {
              [css.selected]: selectedItemsKeys.some((key) => key === item.key),
            })}
            onClick={() => onSelect(item)}
          >
            <SvgIcon
              className={css.icon}
              src={item.icon}
              width="32px"
              height="32px"
            />
            <p className={css.label}>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterGrid;
