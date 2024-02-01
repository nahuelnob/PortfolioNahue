import { useState } from "react";
import style from "./Certificados.module.css";
import ButtonGaleria from "../ButtonGaleria/ButtonGaleria";
import datos from "../../utils/datos.json"

const Certificados = () => {
  const [activo, setActivo] = useState({
    primero: true,
    segundo: false,
    tercero: false,
    cuarto: false,
    quinto: false,
  });

  const certificado = datos.Certificados

  const handlerActivar = (e) => {
    const botonPresionado = e.target.value;

    if (!activo[botonPresionado]) {
      setActivo((prevActivo) => ({
        [botonPresionado]: !prevActivo[botonPresionado],
      }));
    }
  };

  return (
    <div className={style.container} id="Certificados">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}><span className={style.barra}>|</span>Certificados</h1>
      </header>

      <main className={style.containerMain}>
        {/* <ButtonGaleria certificado={certificado}/> */}
        <ButtonGaleria/>
        {/* {certificados.map((datos) => {
          const { imagenes, nombre } = datos
          return (
            <div className={style.imgs}>
              <section className={style.galeria}>
                <button><img src={imagenes[0]} alt="" /></button>
              </section>
            </div>
          )
        })} */}
      </main>
      {/* {activo.primero ? (
          <div className={style.henry}></div>
        ) : (
          <div className={style.henryD}></div>
        )}
        {activo.segundo ? (
          <div className={style.tramo1}></div>
        ) : (
          <div className={style.tramo1D}></div>
        )}
        {activo.tercero ? (
          <div className={style.tramo2}></div>
        ) : (
          <div className={style.tramo2D}></div>
        )}
        {activo.cuarto ? (
          <div className={style.tramo3}></div>
        ) : (
          <div className={style.tramo3D}></div>
        )}
        {activo.quinto ? (
          <div className={style.coder}></div>
        ) : (
          <div className={style.coderD}></div>
        )} */}
      {/* <section className={style.botonera}>
        <button
          onClick={handlerActivar}
          value="primero"
          className={style.boton}
        ></button>
        <button
          onClick={handlerActivar}
          value="segundo"
          className={style.boton}
        ></button>
        <button
          onClick={handlerActivar}
          value="tercero"
          className={style.boton}
        ></button>
        <button
          onClick={handlerActivar}
          value="cuarto"
          className={style.boton}
        ></button>
        <button
          onClick={handlerActivar}
          value="quinto"
          className={style.boton}
        ></button>
      </section> */}
    </div>
  );
};

export default Certificados;
