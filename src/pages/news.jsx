import { useEffect, useState } from "react";
import data from "../data/data.json"
const News = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        setNoticias(data.noticias); // Acceder al array dentro del objeto
    }, []);

    return (
        <section className="news">
            <h1>Últimas Noticias</h1>
            <div className="news-list">
                {noticias.map((item) => (
                <div key={item.id} className="news-item">
                    <h2>{item.titulo}</h2>
                    <p><strong>Género:</strong> {item.genero}</p>
                    <p><strong>Reportero:</strong> {item.reportero}</p>
                    <p>{item.contenido}</p>
                </div>
                ))}
            </div>
        </section>
    );
};
export default News;