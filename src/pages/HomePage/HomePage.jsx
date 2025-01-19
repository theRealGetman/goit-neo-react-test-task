import { NavLink } from "react-router-dom";
import DocumentTitle from "../../components/DocumentTitle";
import css from "./HomePage.module.css";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>TravelTrucks</DocumentTitle>

      <div className={css.heroSection}>
        <div className={css.heroContent}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <h2 className={css.subtitle}>
            You can find everything you want in our catalog
          </h2>
          <PrimaryButton>
            <NavLink to="/catalog">View Now</NavLink>
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
