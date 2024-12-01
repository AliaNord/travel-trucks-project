import CamperList from "../../components/common/CamperList/CamperList";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
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
