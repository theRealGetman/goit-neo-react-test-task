import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./Features.module.css";

function Features({ camper }) {
  const features = [];

  if (camper.AC) {
    features.push({ label: "AC", icon: "wind.svg" });
  }
  if (camper.bathroom) {
    features.push({ label: "Bathroom", icon: "ph_shower.svg" });
  }
  if (camper.kitchen) {
    features.push({ label: "Kitchen", icon: "cup-hot.svg" });
  }
  if (camper.TV) {
    features.push({ label: "TV", icon: "tv.svg" });
  }
  if (camper.radio) {
    features.push({ label: "Radio", icon: "ui-radios.svg" });
  }
  if (camper.refrigerator) {
    features.push({ label: "Refrigerator", icon: "solar_fridge-outline.svg" });
  }
  if (camper.microwave) {
    features.push({ label: "Microwave", icon: "lucide_microwave.svg" });
  }
  if (camper.gas) {
    features.push({ label: "Gas", icon: "hugeicons_gas-stove.svg" });
  }
  if (camper.water) {
    features.push({ label: "Water", icon: "ion_water-outline.svg" });
  }

  return (
    <div className={css.features}>
      {features.map((feature, index) => (
        <div key={index} className={css.feature}>
          <SvgIcon src={feature.icon} width="16px" height="16px" />
          <p className={css.label}>{feature.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
