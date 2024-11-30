import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={s.main}>
      <section className={s.section}>
        <h1 className={s.h1}>Campers of your dreams</h1>
        <p className={s.p}>You can find everything you want in our catalog</p>
        <Link to="/catalog" className={s.btn}>
          View Now
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
