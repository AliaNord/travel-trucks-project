import s from "./ReviewCard.module.css";
import Star from "./Star";

const ReviewCard = ({ item }) => {
  const stars = Array(5).fill(null);
  return (
    <li className={s.listItem}>
      <div className={s.reviewHeader}>
        <div className={s.avatar}>{item.reviewer_name.slice(0, 1)}</div>
        <div className={s.nameAndRating}>
          <p className={s.name}>{item.reviewer_name}</p>
          <div className={s.starsContainer}>
            {stars.map((_, index) => (
              <Star key={index} filled={index < item.reviewer_rating} />
            ))}
          </div>
        </div>
      </div>
      <p className={s.comment}>{item.comment}</p>
    </li>
  );
};

export default ReviewCard;
