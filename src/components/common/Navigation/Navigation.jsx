import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};
const Navigation = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
