import { useState } from "react";
import style from "./Proyectos.module.css";
import Galeria from "../Galeria/Galeria";
import YouTube from "../YouTube/YouTube";
import datos from "../../utils/datos.json"

const Proyectos = () => {
  const [youTube, setYoutube] = useState(false)

  const handler = () => {
    setYoutube(!youTube)
  }

  const proyectos = datos.Proyectos
  ////////////////////////////////////////////////////
  return (
    <div className={style.container} id="Proyectos">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}>Proyectos</h1>
      </header>


      <main className={style.main}>
        {proyectos.map((datos) => {
          const { side, nombre, imagenes, video, descripcion } = datos
          return (
            <section className={style.containerMain}>
              <div className={side === "left" ? style.imgs : style.imgsRigth}>
                <section style={{ display: `${youTube ? "flex" : "none"}` }} className={style.youtube} >
                  <YouTube videoUrl={video} />
                </section>
                <section className={style.galeria}>
                  <Galeria imagenes={imagenes} />
                </section>
              </div>
              <aside className={side === "left" ? style.aside : style.asideRigth}>
                <p className={style.parrafo}>{descripcion}</p>
                {/* <div className={style.separadorTexto}></div> */}
                <h1 className={style.subtitulo}>{nombre}</h1>
                <footer className={style.footer}>
                  <i onClick={() => handler()} class="fa-brands fa-youtube" style={{ fontSize: "4vh", color: "#707070", cursor: "pointer" }}></i>
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
