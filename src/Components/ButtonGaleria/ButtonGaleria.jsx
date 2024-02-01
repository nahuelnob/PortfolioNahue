import style from './ButtonGaleria.module.css'
import datos from "../../utils/datos.json"
import { useState } from 'react'

const ButtonGaleria = () => {
    const certificados = datos.Certificados
    const [activo, setActivo] = useState("https://res.cloudinary.com/nahuesantini/image/upload/v1702420093/Portfolio/HenryCertificado_ln4qib.jpg")

    const handlerClick = (certificado) => {
        setActivo(certificado)
    }
    return (
        <div className={style.container}>
            <main className={style.main}>
                <img src={activo} alt="" className={style.img}/>
            </main>
            <aside className={style.aside}>
                {certificados.map((certi) => {
                    const { nombre, imagenes } = certi
                    return (
                        // <div className={style.botonera}>
                            <button onClick={() => handlerClick(imagenes)} className={style.boton}> <img src={imagenes[0]} alt={nombre} className={style.img} /></button>
                        // </div>
                    )
                })}
            </aside>
        </div>
    )
}

export default ButtonGaleria