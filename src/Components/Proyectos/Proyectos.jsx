import style from "./Proyectos.module.css";
const Proyectos = () => {
  return (
    <div className={style.container}>
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}>Proyectos</h1>
      </header>

      <main className={style.main}>
        <section className={style.countries}>
          <div className={style.imgCountries}></div>
          <aside>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
        </section>
        <section className={style.codecraft}>
          <aside>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>
          <div className={style.imgCodecraft}></div>

        </section>
        <div className={style.padi}>
          <section className={style.imgPadi}></section>
          <aside>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, corrupti! Veritatis, beatae? Corrupti voluptatum quia porro beatae sit, non eos saepe temporibus quasi ab rem voluptates voluptate reprehenderit assumenda doloremque!</p>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default Proyectos;
