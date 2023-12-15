import style from "./About.module.css";
const About = () => {
  return (
    <section className={style.container}>
      <div className={style.column1}>
        <section>
          <h1 className={style.nombre}>NAHUEL</h1>
          <h1 className={style.apellido}>SANTINI</h1>
          <h2 className={style.puesto}>
            FullStack Developer | Data Science Jr. Analyst
          </h2>
        </section>
        <section>
          <img
            className={style.persona}
            src="https://res.cloudinary.com/nahuesantini/image/upload/v1698707253/Portfolio/IMG_20220813_110728364_PORTRAIT_wesmz0.png"
            alt=""
          />
          <img
            className={style.foto}
            src="https://res.cloudinary.com/nahuesantini/image/upload/v1698707247/Portfolio/NahueParque_kitgwp.jpg"
            alt=""
          />
        </section>
      </div>

      <div className={style.column2}>
        <img
          src="https://res.cloudinary.com/nahuesantini/image/upload/v1698707283/Portfolio/CoderHouse_zmnyhd.png"
          alt=""
          width={"40px"}
        />
        <img
          src="https://res.cloudinary.com/nahuesantini/image/upload/v1698708352/Portfolio/572ceff3-3da7-4086-9ac0-5028ad78c930_d7vcby.jpg"
          alt=""
          width={"40px"}
        />
        <img
          src="https://res.cloudinary.com/nahuesantini/image/upload/v1698708342/Portfolio/a5b3af8c-3457-4d41-9380-1d33824f8711_jhjphs.jpg"
          alt=""
          width={"40px"}
        />
        <img
          src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420270/Portfolio/argentina_programa_tramo3_qp7i9k.jpg"
          alt=""
          width={"40px"}
        />
        <img
          src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420093/Portfolio/HenryCertificado_ln4qib.jpg"
          alt=""
          width={"40px"}
        />
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-python"></i>
        <i class="fa-brands fa-react"></i>
        <i class="fa-brands fa-css3-alt"></i>
        <i class="fa-brands fa-html5"></i>
      </div>
      <div className={style.presentacion}>
          <p>
            Soy Nahuel, desarrollador Full Stack Jr y Analista Data Science jr.
            Mi búsqueda constante de crecimiento personal y profesional me ha
            llevado a enfrentar desafíos en el emocionante mundo de la
            tecnología. Tanto el desarrollo de aplicaciones y sitios web, como
            la exploración de datos, me han inspirado y me han permitido
            combinar mis habilidades y pasiones. A lo largo de mi trayecto, he
            estudiado campos tan diversos como Economía y Diseño Gráfico. Estoy
            emocionado por seguir desarrollándome profesionalmente y abierto a
            nuevas oportunidades que me permitan aplicar mis conocimientos y
            habilidades.
          </p>
        </div>
    </section>
  );
};
export default About;
