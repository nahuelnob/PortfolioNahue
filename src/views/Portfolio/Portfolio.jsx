import About from '../../Components/About/About'
import Certificados from '../../Components/Certificados/Certificados'
import Contacto from '../../Components/Contacto/Contacto'
import NavBar from '../../Components/NavBar/NavBar'
import Proyectos from '../../Components/Proyectos/Proyectos'

const Portfolio = () => {
    return (
        <>
        <NavBar/>
        <About/>
        <Proyectos/>
        <Certificados/>
        <Contacto/>
        </>
    )
}

export default Portfolio