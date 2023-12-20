import style from "./Proyectos.module.css";
const Proyectos = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1 className={style.titulo}>Proyectos</h1>
      </header>
      <main className={style.main}>
        <div className={style.countries}>
          <section className={style.card}></section>
        </div>
        <div className={style.codecraft}></div>
      </main>
    </div>
  );
};

export default Proyectos;
