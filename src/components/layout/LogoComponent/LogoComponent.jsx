import { NavLink } from "react-router-dom";
import SvgIcon from "../../common/SvgIcon/SvgIcon";
import s from "./LogoComponent.module.css";

const LogoComponent = () => {
  return (
    <NavLink to="/" className={s.logo}>
      <SvgIcon id="icon-Logo" width="136" height="16" />
    </NavLink>
  );
};

export default LogoComponent;
