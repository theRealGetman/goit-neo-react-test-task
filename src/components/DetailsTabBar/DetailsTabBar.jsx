import css from "./DetailsTabBar.module.css";
import { Link } from "react-router-dom";
import clsx from "clsx";

const DetailsTabBar = ({ tabs }) => {
  const routeParts = window.location.pathname.split("/");
  const currentRoute = routeParts[routeParts.length - 1];

  return (
    <div className={css.tabBar}>
      {tabs.map((tab) => (
        <Link
          key={tab.route}
          className={clsx(css.tab, {
            [css.activeTab]: tab.route === currentRoute,
          })}
          to={tab.route}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default DetailsTabBar;
