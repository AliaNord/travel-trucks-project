import { useSelector } from "react-redux";
import { selectCamperById } from "../../../../redux/campers/selectors";
import ReviewCard from "./ReviewCard/ReviewCard";
import s from "./CamperReviews.module.css";

const CamperReviews = () => {
  const camper = useSelector(selectCamperById);
  const reviews = camper.reviews;
  return (
    <ul className={s.ul}>
      {reviews.map((item) => (
        <ReviewCard key={item.reviewer_rating} item={item} />
      ))}
    </ul>
  );
};

export default CamperReviews;
