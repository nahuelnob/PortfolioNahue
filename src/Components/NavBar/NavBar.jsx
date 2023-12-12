import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
const NavBar = () => {
  const [desplegado, SetDesplegado] = useState(false);
  const handlerDesplegar = () => {
    desplegado ? SetDesplegado(false) : SetDesplegado(true);
  };

  return (
    <nav className={desplegado ? style.containerDesplegado : style.container}>
      <button className={style.desplegar} onClick={handlerDesplegar}>
        <span class="material-symbols-outlined">add_circle</span>
      </button>
      {desplegado ? (
        <div className={style.links}>Sobre Mi</div>
      ) : (
        <div class="material-symbols-outlined">person</div>
      )}
      <div className={style.separador}>|</div>
      {desplegado ? (
        <div className={style.links}>Proyectos</div>
      ) : (
        <div class="material-symbols-outlined">terminal</div>
      )}

      <div className={style.separador}>|</div>
      {desplegado ? (
        <div className={style.links}>Contacto</div>
      ) : (
        <div class="material-symbols-outlined">contacts</div>
      )}
      <div className={style.separador}>|</div>
      {desplegado ? (
        <div className={style.links}>Modo</div>
      ) : (
        <div class="material-symbols-outlined">contacts</div>
      )}

      {/* <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702163789/brand/isologoBlanco_r3uhb5.png"
        alt=""
        className={style.logo}
      />

      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702161475/brand/logoBlaco_sqtghg.png"
        alt=""
        className={style.logo}
      />
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702161474/brand/isologo_q5fmwz.png"
        alt=""
        className={style.logo}
      />
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702418333/brand/isologoBlanco2_kalaaz.png"
        alt=""
        className={style.logo}
      /> */}

    </nav>
  );
};

export default NavBar;
