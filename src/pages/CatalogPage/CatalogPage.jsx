import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/catalog/operations";
import css from "./CatalogPage.module.css";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import Filter from "../../components/Filter/Filter";
import CatalogList from "../../components/CatalogList/CatalogList";

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <Container>
      <DocumentTitle>Catalog</DocumentTitle>
      <div className={css.container}>
        <div className={css.filter}>
          <Filter />
        </div>
        <div className={css.catalogList}>
          <CatalogList />
        </div>
      </div>
    </Container>
  );
}

export default CatalogPage;
