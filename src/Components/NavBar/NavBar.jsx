import style from "./Navbar.module.css";
const NavBar = () => {
  return (
    <nav className={style.container}>
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420610/brand/isologoBlanco_lrs5ma.png"
        alt=""
        className={style.logo}
      />

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
        <div>{/* <button>modo</button> */}</div>
      </div>

      <div className={style.linksDesp}>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-briefcase"></i>
        <i class="fa-solid fa-address-card" />
      </div>
    </nav>
  );
};

export default NavBar;
