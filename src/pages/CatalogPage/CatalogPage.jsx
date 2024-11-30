import CamperList from "../../components/common/CamperList/CamperList";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  return (
    <main className={s.main}>
      <Sidebar />
      <CamperList />
    </main>
  );
};

export default CatalogPage;
