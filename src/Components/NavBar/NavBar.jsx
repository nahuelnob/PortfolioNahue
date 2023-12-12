import { useEffect, useState } from "react";
import style from "./Navbar.module.css";
const NavBar = () => {
  const [desplegado, SetDesplegado] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handlerDesplegar = () => {
    desplegado ? SetDesplegado(false) : SetDesplegado(true);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El segundo argumento vacío asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <nav className={desplegado ? style.containerDesplegado : style.container}>
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420610/brand/isologoBlanco_lrs5ma.png"
        alt=""
        className={style.logo}
      />
      <button className={style.botonDesplegar} onClick={handlerDesplegar}>
        <span class="material-symbols-outlined">add_circle</span>
      </button>
      <div className={style.espacio}></div>
      <div className={style.espacio}></div>
      <div className={style.espacio}></div>
      <div className={style.espacio}></div>
      <div className={style.espacio}></div>
      <div className={style.espacio}></div>
      <div className={style.espacio}></div>
      <div>
        {desplegado || windowWidth > 768 ? (
          <div className={style.links}>Sobre Mi</div>
        ) : (
          <div class="material-symbols-outlined">person</div>
        )}
      </div>
      {/* <div className={style.separador}>|</div> */}
      <div>
        {desplegado || windowWidth > 768 ? (
          <div className={style.links}>Proyectos</div>
        ) : (
          <div class="material-symbols-outlined">terminal</div>
        )}
      </div>

      {/* <div className={style.separador}>|</div> */}
      <div>
        {desplegado || windowWidth > 768 ? (
          <div className={style.links}>Contacto</div>
        ) : (
          <div class="material-symbols-outlined">contacts</div>
        )}
      </div>
      <div>
        {desplegado || windowWidth > 768 ? (
          <div className={style.links}>Modo</div>
        ) : (
          <div class="material-symbols-outlined">contacts</div>
        )}
        {/* <div className={style.separador}>|</div> */}
      </div>
    </nav>
  );
};

export default NavBar;
