import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCamperByIdThunk } from "../../redux/campers/operations";
import { useParams } from "react-router-dom";
import { selectCamperById } from "../../redux/campers/selectors";
import CamperHead from "../../components/common/camper/CamperHead/CamperHead";

const DetailsPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectCamperById);
  console.log(camper);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCamperByIdThunk(id));
  }, [dispatch, id]);

  return (
    <main>
      <CamperHead item={camper} />
    </main>
  );
};

export default DetailsPage;
