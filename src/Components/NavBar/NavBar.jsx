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
        <div className={style.links}>Skills</div>
      ) : (
        <div class="material-symbols-outlined">code</div>
      )}
      <div className={style.separador}>|</div>
      {desplegado ? (
        <div className={style.links}>Educacion</div>
      ) : (
        <div class="material-symbols-outlined">school</div>
      )}
      <div className={style.separador}>|</div>
      {desplegado ? (
        <div className={style.links}>Certificados</div>
      ) : (
        <div class="material-symbols-outlined">check_box</div>
      )}
      <div className={style.separador}>|</div>
      {desplegado ? (
        <div className={style.links}>Contacto</div>
      ) : (
        <div class="material-symbols-outlined">contacts</div>
      )}

      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702163789/brand/isologoBlanco_r3uhb5.png"
        alt="" className={style.logo}
      />
    </nav>
  );
};

export default NavBar;
