import s from "./CamperPrice.module.css";

const CamperPrice = ({ item }) => {
  return <p className={s.price}>€{item.price}.00</p>;
};

export default CamperPrice;
