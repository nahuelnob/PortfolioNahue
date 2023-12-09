import style from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={style.container}>
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702163789/brand/isologoBlanco_r3uhb5.png"
        alt=""
        className={style.logo}
      />
      <h1 className={style.nombre}>Nahue Santini</h1>
    </section>
  );
};

export default Banner;
