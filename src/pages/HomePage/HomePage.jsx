import s from "./HomePage.module.css";
import Button from "../../components/common/button/Button";

const HomePage = () => {
  return (
    <main className={s.main}>
      <section className={s.section}>
        <h1 className={s.h1}>Campers of your dreams</h1>
        <p className={s.p}>You can find everything you want in our catalog</p>
        <Button item={"/catalog"}>View Now</Button>
      </section>
    </main>
  );
};

export default HomePage;
