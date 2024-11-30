import s from "./CamperVehicleList.module.css";

const CamperVehicleList = ({ item }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <p className={s.text}>Form</p>
        <p className={s.text}>{item.form}</p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Length</p>
        <p className={s.text}>
          {item.length.slice(0, -1) + " " + item.length.slice(-1)}
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Width</p>
        <p className={s.text}>
          {item.width.slice(0, -1) + " " + item.width.slice(-1)}
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Height</p>
        <p className={s.text}>
          {item.height.slice(0, -1) + " " + item.height.slice(-1)}
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Tank</p>
        <p className={s.text}>
          {item.tank.slice(0, -1) + " " + item.tank.slice(-1)}
        </p>
      </li>
      <li className={s.item}>
        <p className={s.text}>Consumption</p>
        <p className={s.text}>{item.consumption}</p>
      </li>
    </ul>
  );
};

export default CamperVehicleList;
