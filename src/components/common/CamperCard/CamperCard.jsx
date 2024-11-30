import Button from "../button/Button";
import CamperHead from "../camper/CamperHead/CamperHead";
import CamperOptions from "../camper/CamperOptions/CamperOptions";
import CamperPrice from "../camper/CamperPrice/CamperPrice";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./CamperCard.module.css";

const CamperCard = ({ item }) => {
  return (
    <li className={s.card}>
      <div className={s.imageContainer}>
        <img src={item.gallery[0].thumb} alt="Truck Photo" className={s.img} />
      </div>
      <div className={s.cardContainer}>
        <div className={s.cardInfo}>
          <div className={s.head}>
            <CamperHead item={item} />
            <CamperPrice item={item} />
          </div>
          <p className={s.description}>{item.description}</p>
          <CamperOptions item={item} />
          <Button id={item.id}>Show more</Button>
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
