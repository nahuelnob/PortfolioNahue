import { useState, useEffect } from "react";
import style from "./Navbar.module.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${style.nav} ${scrolled ? style.scrolled : ""}`}>
      <div className={style.container}>
        <div className={style.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <span className={style.logoText}>NS</span>
        </div>
        
        <div className={style.links}>
          <button onClick={() => scrollToSection("About")} className={style.link}>Sobre mí</button>
          <button onClick={() => scrollToSection("Proyectos")} className={style.link}>Proyectos</button>
          <button onClick={() => scrollToSection("Certificados")} className={style.link}>Certificados</button>
          <button onClick={() => scrollToSection("Contacto")} className={style.link}>Contacto</button>
        </div>

        <div className={style.socials}>
          <a href="https://github.com/nahuesantini" target="_blank" rel="noreferrer" className={style.socialIcon}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nahuel-santini/" target="_blank" rel="noreferrer" className={style.socialIcon}>
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
