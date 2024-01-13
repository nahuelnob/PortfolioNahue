import style from "./About.module.css";
const About = () => {
  return (
    <section className={style.container}>

      <main className={style.main}>
        <section className={style.column1}>
          <img
            className={style.persona}
            // src="https://res.cloudinary.com/nahuesantini/image/upload/v1698707253/Portfolio/IMG_20220813_110728364_PORTRAIT_wesmz0.png"
            src="https://res.cloudinary.com/nahuesantini/image/upload/v1702605340/brand/nahue_fndepj.png"
            // src="https://res.cloudinary.com/nahuesantini/image/upload/v1702669918/brand/euhan_uygofm.png"
            alt=""
          />
        </section>
        <section className={style.column2}>
          <h1 className={style.nombre}>NAHUEL</h1>
          <h1 className={style.apellido}>SANTINI</h1>
          <hr className={style.hr} />
          <h1 className={style.fs}>FullStack<span className={style.dev}>developer</span></h1>

          {/* <h1 className={style.ds}>Data Science</h1> */}
          {/* <h1 className={style.jr}>Analyst jr.</h1> */}
          {/* <h1 className={style.puesto}>
          FullStack Developer <span className={style.anpersand}>&&</span> Data
          Science Analyst Jr.
        </h1> */}
          {/* <article className={style.article}>
            <p>
              ¡Hola! Soy Nahuel Santini, desarrollador full stack y analista de
              data science jr. Mi experiencia abarca desde ventas, pasa por
              diseño gráfico hasta economía. Con habilidades versátiles y un
              enfoque integral, disfruto creando soluciones impactantes. */}
          {/* <p>
              {" "}
              Desde el frontend hasta el análisis de datos, estoy listo para
              contribuir al éxito de tu equipo. ¡Aca te muestro algunos de mis
              proyectos!
            </p> */}
          {/* </p>
          </article> */}
          {/* <section className={style.skills}>
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/javascript--v1.png"
              alt="javascript--v1"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/css3.png"
              alt="css3"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/html-5--v1.png"
              alt="html-5--v1"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/python--v1.png"
              alt="python--v1"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/react-native.png"
              alt="react-native"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/redux.png"
              alt="redux"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/nodejs.png"
              alt="nodejs"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/tailwind_css.png"
              alt="tailwind_css"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo.png"
              alt="external-postgre-sql-a-free-and-open-source-relational-database-management-system-logo-color-tal-revivo"
            />
            <img
              className={style.skill}
              src="https://res.cloudinary.com/nahuesantini/image/upload/v1702607522/Portfolio/sequelize_c60cud.png"
              alt="tailwind_css"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/color/240/git.png"
              alt="git"
            />
            <img
              className={style.skill}
              src="https://img.icons8.com/fluency/240/github.png"
              alt="github"
            />
          </section> */}
          {/* <hr className={style.hr} /> */}
        </section>
      </main>

      {/* </div> */}
    </section>
  );
};
export default About;
