import { useState } from "react";
import style from "./Proyectos.module.css";

const Proyectos = () => {

  ////////////////////////////////////////////////////
  const [galeria, setGaleria] = useState(0)

  const handlerChange = (value) => {
    let newGaleria = galeria + value;

    if (newGaleria > 4) {
      setGaleria(0);
    } else if (newGaleria < 0) {
      setGaleria(4);
    } else {
      setGaleria(newGaleria);
    }
  }
  console.log(galeria);
  ////////////////////////////////////////////////////
  const [youTube, setYoutube] = useState(false)

  const handler = () => {
    setYoutube(!youTube)
  }

  // Coloca aquí la URL del video de YouTube que deseas mostrar
  const videoUrl = 'https://www.youtube.com/watch?v=C7ZdBGwuOuQ';

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
        <section className={style.countries}>
          <div className={style.imgCountries}></div>
          <aside className={style.texto} style={{ display: "flex", flexDirection: "column" }}>
            <h1 className={style.subtitulo}>Countries App</h1>
            <div className={style.separadorTexto}></div>
            <p>App que tenía como objetivo buscar, filtrar, ordenar y mostrar países, y además crear actividades
              relacionadas con ellos,que también cumplan con el mismo requisito de buscar, filtrar y ordenar.
              Los datos se obtenían desde una Api y se alojaban en la DB, a su vez esta era conectada tanto con el
              back como con el front</p>
            <footer className={style.footer}>
              <i class="fa-solid fa-images" style={{ fontSize: "3.5vh", color: "#707070", cursor: "pointer" }}></i>

              <i onClick={() => handler()} class="fa-brands fa-youtube" style={{ fontSize: "4vh", color: "#707070", cursor: "pointer", marginLeft: "3vh" }}></i>
            </footer>
          </aside>
          <iframe
            style={{ display: `${youTube ? "flex" : "none"}` }}
            className={style.youtube}
            src={`https://www.youtube.com/embed/${videoCode}`}
            title="YouTube Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <section className={style.galeria}>
            <button onClick={() => { handlerChange(-1) }}><i class="fa-solid fa-caret-left"></i></button>
            {(galeria === 0 || galeria === 5) && <img src="https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/WhatsApp_Image_2023-11-03_at_18.18.44_tvokuo.jpg" alt="login" width={750} />}
            {(galeria === 1) && <img src="https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/Registro_xt9ybe.jpg" alt="registro" width={750} />}
            {(galeria === 2) && <img src="https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/home_ibpowk.jpg" alt="home" width={750} />}
            {(galeria === 3) && <img src="https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/Subir_Actividad_mlwsbp.jpg" alt="postActividad" width={750} />}
            {(galeria === 4 || galeria === -1) && <img src="https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/Ver_actividades_xdjnfa.jpg" alt="actividades" width={750} />}
            <button onClick={() => handlerChange(1)}><i class="fa-solid fa-caret-right"></i></button>
          </section>
          <button style={{ display: `${youTube ? "flex" : "none"}` }} className={style.close} onClick={() => handler()}>x</button>
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
