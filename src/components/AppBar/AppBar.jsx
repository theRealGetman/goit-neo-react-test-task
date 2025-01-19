import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import SvgIcon from "../SvgIcon/SvgIcon";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.header}>
      <NavLink className={css.logo} to="/">
        <SvgIcon src="logo.svg" width={136} height={16} />
      </NavLink>
      <Navigation />
    </header>
  );
};
