import style from "./Contacto.module.css";
import { NavLink } from 'react-router-dom'
const Contacto = () => {

    return (
        <div className={style.container} id="Contacto">
            <div className={style.separador}></div>
            <header className={style.header}>
                <h1 className={style.titulo}><span className={style.barra}>|</span>Contacto</h1>
            </header>

            <main className={style.containerMain}>
                <form action="https://formsubmit.co/nahue.santini@gmail.com" method="POST" className={style.form}>
                    <label htmlFor="name" className={style.label}>Nombre</label>
                    <input type="text" name="name" autoComplete="off" className={style.input} />
                    <label htmlFor="email" className={style.label}>Email</label>
                    <input type="text" name="email" autoComplete="off" className={style.input} />
                    <label htmlFor="comments" className={style.label}>Comentario</label>
                    <textarea type="text" name="comments" autoComplete="off" className={style.textarea} />
                    <input type="hidden" name="_next" value="https://nahuelsantini.vercel.app/" />
                    <input type="hidden" name="_captcha" value="false" />
                    <button type="submit" className={style.boton}>Enviar</button>
                </form>
                <aside className={style.aside}>
                    <h1 className={style.subtitulo}>Contactame</h1>
                </aside>
                {/* <aside className={style.asideR}>
                    <section className={style.links}>

                        <NavLink to="https://github.com/nahuelnob" target="_blank" className={style.navLink}>
                            <i class="fa-brands fa-github" />
                        </NavLink>
                        <NavLink to="https://www.linkedin.com/in/nahuesantini/" target="_blank" className={style.navLink}>
                            <i class="fa-brands fa-linkedin" />
                        </NavLink>
                        <NavLink to="https://api.whatsapp.com/send?phone=5493413935457" target="_blank" className={style.navLink}>
                            <i class="fa-brands fa-whatsapp" />
                        </NavLink>
                        <NavLink to="mailto:nahue.santini@gmail.com" target="_blank" className={style.navLink}>
                            <i class="fa-solid fa-envelope" />
                        </NavLink>
                    </section>
                    <h1 className={style.subtitulo}>Tambien me podes contactar</h1>
                </aside> */}
            </main>
            <footer className={style.footer}> © 2024 Copyright: Nahuel Santini</footer>
        </div>
    );
};

export default Contacto;