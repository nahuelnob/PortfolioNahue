import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container} id="About">
      <header className={style.header}>
        <h1 className={style.nombre}>Nahuel</h1>
        <h1 className={style.apellido}>Santini</h1>
      </header>
      <main className={style.main}>
        {/* <article className={style.puesto}> */}
        <section className={style.fullstack}>
          <h1 className={style.fs}>FullStack</h1>
          <h1 className={style.dev}>developer</h1>
        </section>
        <section className={style.data}>
          <h1 className={style.ds}>Data SCience</h1>
          <h1 className={style.jr}>Analyst jr.</h1>
        </section>

        {/* </article> */}
      </main>

      <section className={style.nahue}>
        {/* <div className={style.degrade}></div> */}
      </section>
      <img
        className={style.persona}
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702605340/brand/nahue_fndepj.png"
        alt="nahue"
      />
    </div>
  );
};
export default About;

/* return (
  <section className={style.container} id="About">

    <main className={style.main}>
      <section className={style.column1}>
        <img
          className={style.persona}

          src="https://res.cloudinary.com/nahuesantini/image/upload/v1702605340/brand/nahue_fndepj.png"

          alt=""
        />
        <div className={style.degrade}></div>
      </section>
      <section className={style.column2}>
        <h1 className={style.nombre}>NAHUEL</h1>
        <h1 className={style.apellido}>SANTINI</h1>
        <article className={style.puesto}>
          <h1 className={style.fs}>FullStack</h1>
          <h1 className={style.dev}>developer</h1>
          <h1 className={style.ds}>Data SCience</h1>
          <h1 className={style.jr}>Analyst jr.</h1>
        </article>


        <article className={style.article}>
          <p>
            ¡Hola! Soy Nahuel Santini, desarrollador fullstack y analista de
            data science jr.
            <p>

              Mi experiencia abarca desde ventas,
              diseño gráfico hasta economía. Con habilidades versátiles y un
              enfoque integral, disfruto creando soluciones impactantes.
            </p>
            <p>
              {" "}
              Desde el frontend hasta el análisis de datos, estoy listo para
              contribuir al éxito de tu equipo. ¡A continuación te muestro algunos de mis
              proyectos!
            </p>
          </p>
        </article>
        <section className={style.skills}>
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
        </section>
        <div className={style.hrVert} />
      </section>
    </main>

  </section>
);
};
export default About;
 */