import { useState } from "react";
import style from "./Certificados.module.css";
const Certificados = () => {
  const [activo, setActivo] = useState({
    primero: true,
    segundo: false,
    tercero: false,
    cuarto: false,
    quinto: false,
  });

  const handlerActivar = (e) => {
    const botonPresionado = e.target.value;

    if (!activo[botonPresionado]) {
      setActivo((prevActivo) => ({
        [botonPresionado]: !prevActivo[botonPresionado],
      }));
    }
  };

  return (
    <div className={style.container}>
      <main className={style.carousel}>
        {activo.primero ? (
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
        )}
      </main>
      <section className={style.botonera}>
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
      </section>
    </div>
  );
};

export default Certificados;
