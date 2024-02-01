import style from "./Certificados.module.css";
import ButtonGaleria from "../ButtonGaleria/ButtonGaleria";


const Certificados = () => {

  return (
    <div className={style.container} id="Certificados">
      <div className={style.separador}></div>
      <header className={style.header}>
        <h1 className={style.titulo}><span className={style.barra}>|</span>Certificados</h1>
      </header>

      <main className={style.containerMain}>
        <ButtonGaleria />
      </main>
    </div>
  );
};

export default Certificados;
