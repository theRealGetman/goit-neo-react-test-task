import { useDispatch, useSelector } from "react-redux";
import css from "./CatalogList.module.css";
import {
  selectCatalogError,
  selectCatalogHasMore,
  selectCatalogLoading,
  selectCatalogPage,
  selectFavoredCatalog,
} from "../../redux/catalog/selectors";
import CatalogItem from "../CatalogItem/CatalogItem";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import SecondaryButton from "../SecondaryButton/SecondaryButton";
import { fetchMoreCampers } from "../../redux/catalog/operations";
import { selectFilter } from "../../redux/filters/selectors";

export default function CatalogList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const loading = useSelector(selectCatalogLoading);
  const error = useSelector(selectCatalogError);
  const favoredCampers = useSelector(selectFavoredCatalog);
  const page = useSelector(selectCatalogPage);
  const hasMore = useSelector(selectCatalogHasMore);

  const handleLoadMore = () => {
    dispatch(fetchMoreCampers({ ...filter, page: page }));
  };

  return (
    <div>
      {error && !loading && <Error message={error} />}
      {!error && (
        <div className={css.catalogList}>
          {!loading && favoredCampers.length === 0 ? (
            <h2 className={css.empty}>There are no campers to show</h2>
          ) : (
            favoredCampers.map((camper) => (
              <CatalogItem key={camper.id} camper={camper} />
            ))
          )}
        </div>
      )}
      <div className={css.buttonWrapper}>
        {loading && <Loader />}
        {!loading && !error && hasMore && (
          <SecondaryButton onClick={handleLoadMore}>Load more</SecondaryButton>
        )}
      </div>
    </div>
  );
}
