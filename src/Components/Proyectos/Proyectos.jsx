import style from "./Proyectos.module.css";

const Proyectos = () => {
  ////////////////////////////////////////////////////


  // Coloca aquí la URL del video de YouTube que deseas mostrar
  const videoUrl = 'https://www.youtube.com/watch?v=vE5zUr5URqY';

  // Extraer el código del video desde la URL
  const videoCode = videoUrl.split('v=')[1];
  ////////////////////////////////////////////////////
  return (
    <div className={style.container} id="Proyectos">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}>Proyectos</h1>
      </header>

      <main className={style.main}>
        {/* <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoCode}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div> */}
        <section className={style.countries}>
          <div className={style.imgCountries}></div>
          <aside className={style.texto} style={{display:"flex", flexDirection:"column"}}>
            <h1>Countries App</h1>
            <p>App que tenía como objetivo buscar, filtrar, ordenar y mostrar países, y además crear actividades
              relacionadas con ellos,que también cumplan con el mismo requisito de buscar, filtrar y ordenar.
              Los datos se obtenían desde una Api y se alojaban en la DB, a su vez esta era conectada tanto con el
              back como con el front</p>
          </aside>
        </section>
        <section className={style.codecraft}>
          <aside className={style.texto}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgCodecraft}></div>
        </section>
        <section className={style.rym}>
          <div className={style.imgrym}></div>
          <aside className={style.texto}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
        <section className={style.aboutPf}>
          <aside className={style.texto}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgAboutPf}></div>
        </section>
        <section className={style.homePf}>
          <div className={style.imgHomePf}></div>
          <aside className={style.texto}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
        <section className={style.aurisPf}>
          <aside className={style.texto}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgAurisPf}></div>
        </section>
        <section className={style.padi}>
          <div className={style.imgPadi}></div>
          <aside className={style.texto}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Proyectos;
