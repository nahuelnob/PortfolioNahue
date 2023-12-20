import Toggle from "../Toggle/Toggle";
import style from "./Navbar.module.css";
const NavBar = () => {
  return (
    <nav className={style.container}>
      <img
        src="https://res.cloudinary.com/nahuesantini/image/upload/v1702420610/brand/isologoBlanco_lrs5ma.png"
        alt=""
        className={style.logo}
      />
      <hr
        style={{
          position: "absolute",
          width: "6vh",
          top: "12vh",
          height: "0.2vh",
          backgroundColor: "#811f1f",
          border: "#811f1f",
        }}
      />

      <div className={style.links}>
        <div className={style.link}>
          <a href="#About">
            <i class="fa-solid fa-user"></i>
          </a>
        </div>
        <div className={style.link}>
          <i class="fa-solid fa-briefcase"></i>
        </div>
        <div className={style.link}>
          <i class="fa-solid fa-address-card" />
        </div>
        <div className={style.toggle}>{/* <Toggle /> */}</div>
      </div>
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
