import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperDetails } from "../../redux/details/operations";
import { Outlet, useParams } from "react-router-dom";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import {
  selectDetails,
  selectDetailsError,
  selectDetailsLoading,
} from "../../redux/details/selectors";
import css from "./DetailsPage.module.css";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Container from "../../components/Container/Container";
import DocumentTitle from "../../components/DocumentTitle";
import DetailsTabBar from "../../components/DetailsTabBar/DetailsTabBar";
import ContactForm from "../../components/ContactForm/ContactForm";

const tabs = [
  { route: "features", label: "Features" },
  { route: "reviews", label: "Reviews" },
];

function DetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCamperDetails(id));
  }, [id, dispatch]);

  const loading = useSelector(selectDetailsLoading);
  const error = useSelector(selectDetailsError);
  const camper = useSelector(selectDetails);

  const handleTabChange = (tab) => {
    console.log("Selected Tab:", tab);
    // Add logic to render content for the selected tab
  };

  return (
    <Container>
      <DocumentTitle>{camper?.name || "Details"}</DocumentTitle>
      {loading && <Loader />}
      {error && !loading && <Error message={error} />}
      {!loading && !error && camper && (
        <div>
          <div className={css.header}>
            <DetailsHeader camper={camper} />
          </div>
          <div className={css.tabBar}>
            <DetailsTabBar tabs={tabs} onTabChange={handleTabChange} />
          </div>
          <div className={css.additionalSection}>
            <div className={css.outlet}>
              <Outlet />
            </div>
            <div className={css.contactForm}>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

export default DetailsPage;
