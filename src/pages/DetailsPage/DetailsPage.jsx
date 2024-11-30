import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperByIdThunk } from "../../redux/campers/operations";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { selectCamperById } from "../../redux/campers/selectors";
import CamperHead from "../../components/common/camper/CamperHead/CamperHead";
import CamperPrice from "../../components/common/camper/CamperPrice/CamperPrice";
import CamperGallery from "../../components/common/camper/CamperGallery/CamperGallery";
import s from "./DetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import BookForm from "../../components/common/CamperDetails/BookForm/BookForm";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const DetailsPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperByIdThunk(id));
  }, [dispatch, id]);
  const camper = useSelector(selectCamperById);
  if (!camper) {
    return <Loader />;
  }
  return (
    <main className={s.main}>
      <CamperHead item={camper} />
      <CamperPrice item={camper} />
      <CamperGallery gallery={camper.gallery} />
      <p className={s.descr}>{camper.description}</p>
      <div className={s.navDetails}>
        <NavLink to="features" className={buildLinkClass}>
          Features
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <div className={s.container}>
        <Outlet />
        <BookForm />
      </div>
      <Toaster />
    </main>
  );
};

export default DetailsPage;
