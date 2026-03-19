import style from "./Certificados.module.css";
import datos from "../../utils/datos.json";

const Certificados = () => {
  const certificados = datos.Certificados;

  return (
    <div className={style.container} id="Certificados">
      <header className={style.header}>
        <h2 className={style.titulo}>Certificaciones <span className={style.destacado}>Academicas</span></h2>
        <p className={style.subtitulo}>Mi formación continua y reconocimientos en el área IT.</p>
      </header>

      <main className={style.grid}>
        {certificados.map((cert, index) => (
          <div key={index} className={style.card}>
            <div className={style.cardIcon}>
              <i className="fa-solid fa-certificate"></i>
            </div>
            <div className={style.cardContent}>
              <h3 className={style.certTitle}>{cert.nombre || "Certificado"}</h3>
              {/* Note: In a real scenario we'd use cert.institucion if available in JSON */}
              <span className={style.certTag}>Verificación disponible</span>
            </div>
            <div className={style.cardAction}>
              <a href={cert.imagenes[0]} target="_blank" rel="noreferrer" className={style.viewLink}>
                Ver Certificado <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Certificados;
