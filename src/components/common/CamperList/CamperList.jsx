import { useDispatch, useSelector } from "react-redux";
import {
  selectCampers,
  selectIsLoading,
} from "../../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampersThunk } from "../../../redux/campers/operations";
import CamperCard from "../CamperCard/CamperCard";
import s from "./CamperList.module.css";
import Loader from "../../Loader/Loader";

const CamperList = () => {
  const data = useSelector(selectCampers);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchCampersThunk());
    }
  }, [dispatch, data.length]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={s.ul}>
          {data.map((item) => (
            <CamperCard key={item.id} id={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};

export default CamperList;
