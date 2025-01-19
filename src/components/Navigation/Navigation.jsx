import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export const Navigation = () => {
  const location = useLocation();
  const activeTab = location.pathname;

  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li>
          <NavLink
            className={clsx(css.navItem, { [css.active]: activeTab === "/" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={clsx(css.navItem, {
              [css.active]: activeTab === "/catalog",
            })}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
