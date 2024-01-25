import style from './YouTube.module.css'

const YouTube = ({ videoUrl }) => {
    const videoCode = videoUrl.split('v=')[1];
    return (
        <div className={style.container}>
            <iframe
                src={`https://www.youtube.com/embed/${videoCode}`}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
                className={style.reproductor}
            ></iframe>
        </div>
    )
}

export default YouTube