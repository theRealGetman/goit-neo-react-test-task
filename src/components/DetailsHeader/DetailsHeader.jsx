import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./DetailsHeader.module.css";

function DetailsHeader({ camper }) {
  return (
    <div className={css.content}>
      <div className={css.header}>
        <h2 className={css.title}>{camper.name}</h2>
        <div className={css.priceWrapper}>
          <div className={css.meta}>
            <span className={css.rating}>
              <SvgIcon src="star-filled.svg" width="16px" height="16px" />
              {camper.rating.toFixed(1)} ({camper.reviews.length} Reviews)
            </span>

            <span className={css.location}>
              <SvgIcon src="map.svg" width="16px" height="16px" />
              {camper.location}
            </span>
          </div>
          <p className={css.price}>€{camper.price.toFixed(2)}</p>
        </div>
      </div>
      <div className={css.gallery}>
        {camper.gallery.map((image, index) => (
          <img
            key={index}
            src={image.thumb}
            alt={camper.name}
            className={css.image}
          />
        ))}
      </div>
      <p className={css.description}>{camper.description}</p>
    </div>
  );
}

export default DetailsHeader;
