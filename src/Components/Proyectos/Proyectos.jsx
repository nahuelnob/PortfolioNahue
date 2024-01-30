import { useState } from "react";
import style from "./Proyectos.module.css";
import Galeria from "../Galeria/Galeria";
import YouTube from "../YouTube/YouTube";
import datos from "../../utils/datos.json"

const Proyectos = () => {
  const [youTube, setYoutube] = useState({
    "Rick & Morty" : false,
    "Countries" : false,
    "Codecrafted Templates" : false,
    "Padi" : false,
  })

  const handler = (nombre) => {
    setYoutube({[nombre] : true})
  }

  const proyectos = datos.Proyectos
  ////////////////////////////////////////////////////
  return (
    <div className={style.container} id="Proyectos">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}><span className={style.barra}>|</span>Proyectos</h1>
        <div className={style.decorar}></div>
        <div className={style.decorar2}></div>
        <div className={style.decorar3}></div>
        <div className={style.decorar4}></div>
      </header>


      <main className={style.main}>
        {proyectos.map((datos) => {
          const { side, nombre, imagenes, video, descripcion } = datos
          return (
            <section className={style.containerMain}>
              <div className={side === "left" ? style.imgs : style.imgsRigth}>
                <section style={{ display: `${youTube[`${nombre}`] ? "flex" : "none"}` }} className={style.youtube} >
                  <YouTube videoUrl={video} />
                </section>
                <section className={style.galeria}>
                  <Galeria imagenes={imagenes} />
                </section>
              </div>
              <aside className={side === "left" ? style.aside : style.asideRigth}>
                <p className={style.parrafo}>{descripcion}</p>
                <div className={side === "left" ? style.separadorTexto : style.separadorTextoR}></div>
                <h1 className={style.subtitulo}>{nombre}</h1>
                <footer className={style.footer}>
                  <i onClick={() => handler(nombre)} class="fa-brands fa-youtube" style={{ fontSize: "4vh", color: "#707070", cursor: "pointer" }}></i>
                </footer>
              </aside>
              {/* <button style={{ display: `${youTube ? "flex" : "none"}` }} className={style.close} onClick={() => handler()}><i class="fa-solid fa-rectangle-xmark" /></button> */}
            </section>
          )
        })}
      </main>
    </div>
  );
};

export default Proyectos;
