import { useState } from "react";
import {NavLink} from 'react-router-dom'
import style from "./Proyectos.module.css";
import Galeria from "../Galeria/Galeria";
import YouTube from "../YouTube/YouTube";
import datos from "../../utils/datos.json"

const Proyectos = () => {
  const [youTube, setYoutube] = useState({
    "Rick & Morty": false,
    "Countries": false,
    "Codecrafted Templates": false,
    "Padi": false,
  })

  const handler = (nombre) => {
    setYoutube({ [nombre]: true })
  }

  const proyectos = datos.Proyectos
  ////////////////////////////////////////////////////
  return (
    <div className={style.container} id="Proyectos">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}><span className={style.barra}>|</span>Proyectos</h1>
      </header>


      <main className={style.main}>
        {proyectos.map((datos) => {
          const { github, nombre, imagenes, video, descripcion } = datos
          return (
            <section className={style.containerMain}>
              <div className={style.imgs}>
                <section style={{ display: `${youTube[`${nombre}`] ? "flex" : "none"}` }} className={style.youtube} >
                  <YouTube videoUrl={video} />
                  <button style={{ display: `${youTube[`${nombre}`] ? "flex" : "none"}` }} className={style.close} onClick={() => handler()}><i class="fa-solid fa-rectangle-xmark" /></button>
                </section>
                <section className={style.galeria}>
                  <Galeria imagenes={imagenes} />
                </section>
              </div>
              <aside className={style.aside}>
                <p className={style.parrafo}>{descripcion}</p>
                <h1 className={style.subtitulo}>{nombre}</h1>
                <footer className={style.footer}>
                  <NavLink to={github} target="_blank" className={style.github}>
                  <i class="fa-brands fa-github" style={{ cursor: "pointer", marginBottom: "1svh" }} />
                  </NavLink>
                  <i onClick={() => handler(nombre)} class="fa-brands fa-youtube" style={{ cursor: "pointer" }} />
                </footer>
              </aside>
            </section>
          )
        })}
      </main>
    </div>
  );
};

export default Proyectos;
