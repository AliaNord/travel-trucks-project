import Navigation from "../../common/Navigation/Navigation";
import LogoComponent from "../LogoComponent/LogoComponent";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <LogoComponent />
      <Navigation />
      <div className={s.invisible}></div>
    </header>
  );
};

export default Header;
