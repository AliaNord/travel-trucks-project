import { useDispatch } from "react-redux";
import CamperList from "../../components/common/CamperList/CamperList";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import s from "./CatalogPage.module.css";
import { useEffect } from "react";
import { clearCampers } from "../../redux/campers/slice";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearCampers());
    };
  }, [dispatch]);
  return (
    <main className={s.main}>
      <div className={s.mainContainer}>
        <Sidebar />
        <CamperList />
      </div>
    </main>
  );
};

export default CatalogPage;
