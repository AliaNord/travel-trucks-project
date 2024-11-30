import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../../redux/campers/selectors";
import { useEffect } from "react";
import { fetchCampersThunk } from "../../../redux/campers/operations";
import CamperCard from "../CamperCard/CamperCard";
import s from "./CamperList.module.css";

const CamperList = () => {
  const data = useSelector(selectCampers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampersThunk());
  }, [dispatch]);

  return (
    <ul className={s.ul}>
      {data.map((item) => (
        <CamperCard key={item.id} id={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CamperList;
