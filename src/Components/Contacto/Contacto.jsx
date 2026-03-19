import style from "./Contacto.module.css";

const Contacto = () => {
  return (
    <div className={style.container} id="Contacto">
      <header className={style.header}>
        <h2 className={style.titulo}>Contacto <span className={style.destacado}>Directo</span></h2>
        <p className={style.subtitulo}>¿Tenés un proyecto en mente? ¡Hablemos!</p>
      </header>

      <main className={style.content}>
        <form action="https://formsubmit.co/nahue.santini@gmail.com" method="POST" className={style.form}>
          <div className={style.field}>
            <label htmlFor="name" className={style.label}>Nombre</label>
            <input type="text" name="name" required autoComplete="off" className={style.input} placeholder="Tu nombre" />
          </div>

          <div className={style.field}>
            <label htmlFor="email" className={style.label}>Email</label>
            <input type="email" name="email" required autoComplete="off" className={style.input} placeholder="tu@email.com" />
          </div>

          <div className={style.field}>
            <label htmlFor="comments" className={style.label}>Mensaje</label>
            <textarea name="comments" required autoComplete="off" className={style.textarea} placeholder="¿Cómo puedo ayudarte?" />
          </div>

          <input type="hidden" name="_next" value="https://nahuelsantini.vercel.app/" />
          <input type="hidden" name="_captcha" value="false" />

          <button type="submit" className={style.submitButton}>
            Enviar Mensaje <i className="fa-solid fa-paper-plane" />
          </button>
        </form>

        <aside className={style.info}>
          <div className={style.infoItem}>
            <h4 className={style.infoLabel}>Email</h4>
            <p className={style.infoValue}>nahue.santini@gmail.com</p>
          </div>
          <div className={style.infoItem}>
            <h4 className={style.infoLabel}>Ubicación</h4>
            <p className={style.infoValue}>Rosario, Argentina</p>
          </div>
        </aside>
      </main>

      <footer className={style.footer}>
        <p>© {new Date().getFullYear()} — Diseñado y desarrollado por Nahue Santini</p>
      </footer>
    </div>
  );
};

export default Contacto;