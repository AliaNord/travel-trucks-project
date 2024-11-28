import { Outlet } from "react-router-dom";
import Header from "./layout/Header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
