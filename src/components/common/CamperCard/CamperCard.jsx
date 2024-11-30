import CamperHead from "../camper/CamperHead/CamperHead";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./CamperCard.module.css";
import { Link } from "react-router-dom";

const CamperCard = ({ item }) => {
  const options = Object.keys(item).filter((key) => item[key] === true);

  return (
    <li className={s.card}>
      <div className={s.imageContainer}>
        <img src={item.gallery[0].thumb} alt="Truck Photo" className={s.img} />
      </div>
      <div className={s.cardContainer}>
        <div className={s.cardInfo}>
          <CamperHead item={item} />
          <p className={s.description}>{item.description}</p>
          <ul className={s.options}>
            {options.map((item) => (
              <li key={item} className={s.option}>
                <p className={s.optionText}>
                  {item.replace(item[0], item[0].toUpperCase())}
                </p>
              </li>
            ))}
          </ul>
          <Link to={item.id} className={s.btn}>
            Show more
          </Link>
        </div>
        <label className={s.favorite}>
          <input type="checkbox" />
          <SvgIcon
            id="icon-heart"
            className={s.svgHeart}
            width="25"
            height="24"
          />
        </label>
      </div>
    </li>
  );
};

export default CamperCard;
