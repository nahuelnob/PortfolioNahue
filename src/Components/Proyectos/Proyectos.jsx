import { useState } from "react";
import style from "./Proyectos.module.css";
import Galeria from "../Galeria/Galeria";

const Proyectos = () => {

  ////////////////////////////////////////////////////
  const imagenesCountries = ["https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/WhatsApp_Image_2023-11-03_at_18.18.44_tvokuo.jpg", "https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/Registro_xt9ybe.jpg", "https://res.cloudinary.com/nahuesantini/image/upload/v1703102270/Proyectos/home_ibpowk.jpg"]
  ////////////////////////////////////////////////////
  const [youTube, setYoutube] = useState(false)
  const [galeria, setGaleria] = useState(false)

  const handler = () => {
    setYoutube(!youTube)
  }

  const handlerGale = () => {
    setGaleria(!galeria)
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
          <div className={style.imgCountries}><section className={style.galeria}>
            <Galeria imagenes={imagenesCountries} />
            <iframe
              style={{ display: `${youTube ? "flex" : "none"}` }}
              className={style.youtube}
              src={`https://www.youtube.com/embed/${videoCode}`}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </section></div>
          <aside className={style.aside} >
            <h1 className={style.subtitulo}>Countries App</h1>
            <div className={style.separadorTexto}></div>
            <p className={style.parrafo}>App que tenía como objetivo buscar, filtrar, ordenar y mostrar países, y además crear actividades
              relacionadas con ellos,que también cumplan con el mismo requisito de buscar, filtrar y ordenar.
              Los datos se obtenían desde una Api y se alojaban en la DB, a su vez esta era conectada tanto con el
              back como con el front</p>
            <footer className={style.footer}>
              <i onClick={() => handler()} class="fa-brands fa-youtube" style={{ fontSize: "4vh", color: "#707070", cursor: "pointer" }}></i>
            </footer>
          </aside>
          <button style={{ display: `${youTube ? "flex" : "none"}` }} className={style.close} onClick={() => handler()}><i class="fa-solid fa-rectangle-xmark" /></button>
        </section>
        <section className={style.codecraft}>
          <aside className={style.aside}>
            <p className={style.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgCodecraft}></div>
        </section>
        <section className={style.rym}>
          <div className={style.imgrym}></div>
          <aside className={style.aside}>
            <p className={style.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
        <section className={style.aboutPf}>
          <aside className={style.aside}>
            <p className={style.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgAboutPf}></div>
        </section>
        <section className={style.homePf}>
          <div className={style.imgHomePf}></div>
          <aside className={style.aside}>
            <p className={style.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
        <section className={style.aurisPf}>
          <aside className={style.aside}>
            <p className={style.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgAurisPf}></div>
        </section>
        <section className={style.padi}>
          <div className={style.imgPadi}></div>
          <aside className={style.aside}>
            <p className={style.parrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
      </main>
    </div>
  );
};

export default Proyectos;
