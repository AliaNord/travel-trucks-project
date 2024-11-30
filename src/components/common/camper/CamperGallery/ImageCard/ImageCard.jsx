import s from "./ImageCard.module.css";

const ImageCard = ({ item }) => {
  return (
    <li className={s.card}>
      <img
        src={item.thumb}
        alt="Truck Photo"
        style={{ cursor: "pointer" }}
        className={s.img}
      />
    </li>
  );
};

export default ImageCard;
