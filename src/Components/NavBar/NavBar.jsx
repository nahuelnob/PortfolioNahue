import Toggle from "../Toggle/Toggle";
import style from "./Navbar.module.css";
import { NavLink } from 'react-router-dom'
const NavBar = () => {

  const handleClick = (value, e) => {
    e.preventDefault()
    const proyectosSection = document.getElementById(value);
    proyectosSection.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <nav className={style.container}>
      <header className={style.header}>
        <section className={style.logotipo}>
          <h1 className={style.N}>N</h1>
          <h1 className={style.S}>S</h1>
        </section>
        {/* <img
          src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420610/brand/isologoBlanco_lrs5ma.png"
          alt=""
          className={style.logo}
        /> */}
        <div className={style.separador} />
      </header>

      <main className={style.mainList}>
        <a className={style.link} href="#About" onClick={(e) => handleClick('About', e)}>
          <i class="fa-solid fa-user"></i>
        </a>
        <a className={style.link} href="#Proyectos" onClick={(e) => handleClick('Proyectos', e)}>
          <i class="fa-solid fa-briefcase"></i>
        </a>
        <a className={style.link}>
          <i class="fa-solid fa-address-card" />
        </a>
        <div className={style.separador} />
      </main>
      <footer className={style.footerList}>
        <NavLink to="https://github.com/nahuelnob" target="_blank" className={style.navLink}>
          <i class="fa-brands fa-github" />
        </NavLink>
        <NavLink to="https://www.linkedin.com/in/nahuesantini/" target="_blank" className={style.navLink}>
          <i class="fa-brands fa-linkedin" />
        </NavLink>
      </footer>
    </nav>
  );
};

export default NavBar;

{
  /* <nav className={style.container}>
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
  <div className={style.toggle}><Toggle/></div>
  </div>
  
  <div className={style.linksDesp}>
  <i class="fa-solid fa-user"></i>
  <i class="fa-solid fa-briefcase"></i>
  <i class="fa-solid fa-address-card" />
</div> 
</nav>*/
}
