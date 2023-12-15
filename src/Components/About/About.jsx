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
            // src="https://res.cloudinary.com/nahuesantini/image/upload/v1698707253/Portfolio/IMG_20220813_110728364_PORTRAIT_wesmz0.png"
            src="https://res.cloudinary.com/nahuesantini/image/upload/v1702605340/brand/nahue_fndepj.png"
            alt=""
          />
          <img
            className={style.foto}
            // src="https://res.cloudinary.com/nahuesantini/image/upload/v1698707247/Portfolio/NahueParque_kitgwp.jpg"
            src="https://res.cloudinary.com/nahuesantini/image/upload/v1702605341/brand/NahueParque_uc1iee.jpg"
            alt=""
          />
        </section>
      </div>

      <div className={style.column2}>
      <div className={style.presentacion}>
        <p>
          Mi búsqueda constante de crecimiento personal y profesional me ha
          llevado a enfrentar desafíos en el emocionante mundo de la tecnología.
        </p>
        <p>
          Tanto el desarrollo de aplicaciones y sitios web, como la exploración
          de datos, me han inspirado y me han permitido combinar mis habilidades
          y pasiones.
        </p>
        <p>
          Me he formado en campos tan diversos como
          Economía y Diseño Gráfico. Estoy emocionado por seguir desarrollándome
          profesionalmente y abierto a nuevas oportunidades que me permitan
          aplicar mis conocimientos y habilidades.
        </p>
      </div>
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

        {/* <img
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
        /> */}
        
      </div>

    </section>
  );
};
export default About;
