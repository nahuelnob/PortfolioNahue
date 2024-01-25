import { useState } from "react";
import style from "./Proyectos.module.css";
import Galeria from "../Galeria/Galeria";
import YouTube from "../YouTube/YouTube";
import datos from "../../../utils/datos.json"

const Proyectos = () => {
  const [youTube, setYoutube] = useState(false)

  const handler = () => {
    setYoutube(!youTube)
  }
  ////////////////////////////////////////////////////
  return (
    <div className={style.container} id="Proyectos">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}>Proyectos</h1>
      </header>


      <main className={style.main}>
        <section className={style.containerMain}>
          <div className={style.imgs}>
            <section style={{ display: `${youTube ? "flex" : "none"}`}} className={style.youtube} >
              <YouTube videoUrl={datos.Countries.video} />
            </section>
            <section className={style.galeria}>
              <Galeria imagenes={datos.Countries.imagenes} />
            </section>
          </div>
          <aside className={style.aside} >
            <p className={style.parrafo}>{datos.Countries.descripcion}</p>
            {/* <div className={style.separadorTexto}></div> */}
            <h1 className={style.subtitulo}>Countries App</h1>
            <footer className={style.footer}>
              <i onClick={() => handler()} class="fa-brands fa-youtube" style={{ fontSize: "4vh", color: "#707070", cursor: "pointer" }}></i>
            </footer>
          </aside>
          {/* <button style={{ display: `${youTube ? "flex" : "none"}` }} className={style.close} onClick={() => handler()}><i class="fa-solid fa-rectangle-xmark" /></button> */}
        </section>

      </main>
    </div>
  );
};

export default Proyectos;
