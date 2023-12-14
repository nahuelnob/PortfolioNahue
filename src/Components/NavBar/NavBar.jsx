import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
const NavBar = () => {
  // El segundo argumento vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <nav
      className={
        style.container
      } /* className={desplegado ? style.containerDesplegado : style.container} */
    >
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420610/brand/isologoBlanco_lrs5ma.png"
        alt=""
        className={style.logo}
      />
      {/* <button className={style.botonDesplegar} onClick={handlerDesplegar}>
        <span class="material-symbols-outlined">add_circle</span>
      </button> */}
      <div className={style.links}>
        <div className={style.link}>
          <p>Sobre Mi</p>
        </div>
        <div className={style.link}>
          <p>Proyectos</p>
        </div>
        <div className={style.link}>
          <p>Contacto</p>
        </div>
        <div></div>
      </div>

      <div className={style.linksDesp}>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-briefcase"></i>
        <i class="fa-solid fa-address-card" />
      </div>
      {/* <div>
        {desplegado || windowWidth >= 768 ? (
          <div className={style.links}>Sobre Mi</div>
        ) : (
          <div class="material-symbols-outlined">person</div>
        )}
      </div>
      <div>
        {desplegado || windowWidth >= 768 ? (
          <div className={style.links}>Proyectos</div>
        ) : (
          <div class="material-symbols-outlined">terminal</div>
        )}
      </div>

      <div>
        {desplegado || windowWidth >= 768 ? (
          <div className={style.links}>Contacto</div>
        ) : (
          <div class="material-symbols-outlined">contacts</div>
        )}
      </div>
      <div>
        {desplegado || windowWidth >= 768 ? (
          <div className={style.links}>Modo</div>
        ) : (
          <div class="material-symbols-outlined">contacts</div>
        )}
      </div> */}
    </nav>
  );
};

export default NavBar;
