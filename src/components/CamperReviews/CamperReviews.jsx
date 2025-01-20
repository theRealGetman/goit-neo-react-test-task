import { useSelector } from "react-redux";
import css from "./CamperReviews.module.css";
import { selectReviews } from "../../redux/details/selectors";
import SvgIcon from "../SvgIcon/SvgIcon";

const CamperReviews = () => {
  const reviews = useSelector(selectReviews);

  return (
    <div className={css.reviewsContainer}>
      {reviews.map((review, index) => (
        <div key={index} className={css.reviewCard}>
          <div className={css.content}>
            <div className={css.avatar}>
              <span>{review.reviewer_name.charAt(0)}</span>
            </div>
            <div className={css.header}>
              <span className={css.name}>{review.reviewer_name}</span>
              <span className={css.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <SvgIcon
                    src={
                      i < review.reviewer_rating
                        ? "star-filled.svg"
                        : "star-empty.svg"
                    }
                    width="16px"
                    height="16px"
                    key={i}
                  />
                ))}
              </span>
            </div>
          </div>
          <p className={css.reviewText}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default CamperReviews;
