import { useState } from "react";
import style from './Galeria.module.css'
const Galeria = ({ imagenes }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlerChange = (value) => {
        const newIndex = (currentIndex + value + imagenes.length) % imagenes.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={style.container}>
            <button className={style.botonIzq} onClick={() => handlerChange(-1)}>
                <i class="fa-solid fa-chevron-left" />
            </button>
            <img className={style.img} src={imagenes[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
            <button className={style.botonDer} onClick={() => handlerChange(1)}>
                <i class="fa-solid fa-chevron-right" />
            </button>
        </div>
    );
};

export default Galeria