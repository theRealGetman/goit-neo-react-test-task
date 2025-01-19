import { NavLink } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./CatalogItem.module.css";
import Features from "../Features/Features";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/favorites/slice";

function CatalogItem({ camper }) {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(toggleFavorite(camper));
  };

  return (
    <div className={css.catalogItem}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.image}
      />
      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{camper.price}</p>
            <SvgIcon
              cssClass={css.heart}
              src={camper.favored ? "heart-filled.svg" : "heart.svg"}
              width="26px"
              height="24px"
              onClick={handleFavorite}
            />
          </div>
        </div>
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
        <p className={css.description}>{camper.description}</p>
        <Features camper={camper} />
        <div>
          <PrimaryButton>
            <NavLink to={`/catalog/${camper.id}`}>Show more</NavLink>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default CatalogItem;
