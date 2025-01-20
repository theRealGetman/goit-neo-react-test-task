import { useSelector } from "react-redux";
import Features from "../Features/Features";
import css from "./CamperFeatures.module.css";
import { selectDetails } from "../../redux/details/selectors";

const forms = {
  panelTruck: "Panel Truck",
  fullyIntegrated: "Fully Integrated",
  alcove: "Alcove",
};

const CamperFeatures = () => {
  const camper = useSelector(selectDetails);

  const form = forms[camper.form];
  const length = camper.length;
  const width = camper.width;
  const height = camper.height;
  const tank = camper.tank;
  const consumption = camper.consumption;

  return (
    <div className={css.container}>
      <div className={css.features}>
        <Features camper={camper} />
      </div>
      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.divider}></div>
      <div className={css.vehicleDetails}>
        <div className={css.detailRow}>
          <span>Form</span>
          <span>{form}</span>
        </div>
        <div className={css.detailRow}>
          <span>Length</span>
          <span>{length}</span>
        </div>
        <div className={css.detailRow}>
          <span>Width</span>
          <span>{width}</span>
        </div>
        <div className={css.detailRow}>
          <span>Height</span>
          <span>{height}</span>
        </div>
        <div className={css.detailRow}>
          <span>Tank</span>
          <span>{tank}</span>
        </div>
        <div className={css.detailRow}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </div>
      </div>
    </div>
  );
};

export default CamperFeatures;
