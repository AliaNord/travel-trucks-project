import { SyncLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderWrapper}>
      <SyncLoader color="#E44848" />
    </div>
  );
};

export default Loader;
