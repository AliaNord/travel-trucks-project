import { useSelector } from "react-redux";
import CamperOptions from "../../camper/CamperOptions/CamperOptions";
import s from "./CamperFeatures.module.css";
import { selectCamperById } from "../../../../redux/campers/selectors";
import CamperVehicleList from "./CamperVehicle/CamperVehicleList";

const CamperFeatures = () => {
  const camper = useSelector(selectCamperById);

  return (
    <div className={s.featuresContainer}>
      <CamperOptions item={camper} />
      <h3 className={s.h3}>Vehicle details</h3>
      <CamperVehicleList item={camper} />
    </div>
  );
};

export default CamperFeatures;
