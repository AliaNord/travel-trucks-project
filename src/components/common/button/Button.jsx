import { Link } from "react-router-dom";
import s from "./Button.module.css";

const Button = ({ id, children }) => {
  return (
    <Link to={id} className={s.btn}>
      {children}
    </Link>
  );
};

export default Button;
