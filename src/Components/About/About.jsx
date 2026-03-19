import style from "./About.module.css";
import datos from "../../utils/datos.json";

const About = () => {
  const skills = datos.Skills;

  return (
    <div className={style.container} id="About">
      <div className={style.content}>
        <header className={style.header}>
          <h1 className={style.nombre}>Nahuel <span className={style.apellido}>Santini</span></h1>
          <div className={style.roles}>
            <span className={style.role}>FullStack Developer</span>
            <span className={style.separator}>•</span>
            <span className={style.role}>Data Scientist</span>
          </div>
        </header>

        <main className={style.main}>
          <article className={style.bio}>
            <p>
              ¡Hola! Soy Nahuel, un desarrollador apasionado por crear soluciones
              digitales elegantes y funcionales.
            </p>
            <p>
              Mi background combina Diseño Gráfico, Economía y Tecnología, 
              lo que me permite aportar una visión integral a cada proyecto.
            </p>
          </article>

          <section className={style.skillsSection}>
            <h3 className={style.skillsTitle}>Tech Stack</h3>
            <div className={style.skillsGrid}>
              {skills.map((skill, index) => (
                <div key={index} className={style.skillCard}>
                  <img className={style.skillIcon} src={skill} alt="Skill icon" />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;