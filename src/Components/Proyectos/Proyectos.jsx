import { useState } from "react";
import { NavLink } from 'react-router-dom';
import style from "./Proyectos.module.css";
import Galeria from "../Galeria/Galeria";
import YouTube from "../YouTube/YouTube";
import datos from "../../utils/datos.json";

const Proyectos = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleOpenVideo = (nombre) => {
    setActiveVideo(nombre);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const proyectos = datos.Proyectos;

  return (
    <div className={style.container} id="Proyectos">
      <header className={style.header}>
        <h2 className={style.titulo}>Proyectos <span className={style.destacado}>Seleccionados</span></h2>
        <p className={style.subtitulo}>Una muestra de mi trabajo reciente en desarrollo y análisis.</p>
      </header>

      <main className={style.grid}>
        {proyectos.map((proyecto) => {
          const { github, nombre, imagenes, video, descripcion } = proyecto;
          const isVideoOpen = activeVideo === nombre;

          return (
            <article key={nombre} className={style.card}>
              <div className={style.imageWrapper}>
                {isVideoOpen ? (
                  <div className={style.videoOverlay}>
                    <YouTube videoUrl={video} />
                    <button className={style.closeButton} onClick={handleCloseVideo}>
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </div>
                ) : (
                  <Galeria imagenes={imagenes} />
                )}
              </div>
              
              <div className={style.info}>
                <h3 className={style.projectTitle}>{nombre}</h3>
                <p className={style.projectDesc}>{descripcion}</p>
                
                <footer className={style.cardFooter}>
                  <NavLink to={github} target="_blank" className={style.githubLink}>
                    <i className="fa-brands fa-github" /> Código
                  </NavLink>
                  {video && (
                    <button onClick={() => handleOpenVideo(nombre)} className={style.videoLink}>
                      <i className="fa-brands fa-youtube" /> Demo
                    </button>
                  )}
                </footer>
              </div>
            </article>
          );
        })}
      </main>
    </div>
  );
};

export default Proyectos;
