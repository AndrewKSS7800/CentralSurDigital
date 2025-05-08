import { useState } from "react";
import NoticiasJson from '../../data/data.json'; // Ajusta esta ruta si es diferente
import { useParams } from "react-router-dom";
import Img1 from "../../assets/imgs/deporte-img.jpg"; // ajusta la ruta
import { Link } from 'react-router-dom';
import Banner from "/banners/banner-deporte.png"
const Sport = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const parseDate = (dateStr) => {
        const meses = {
            enero: 0,
            febrero: 1,
            marzo: 2,
            abril: 3,
            mayo: 4,
            junio: 5,
            julio: 6,
            agosto: 7,
            septiembre: 8,
            octubre: 9,
            noviembre: 10,
            diciembre: 11,
        };

        const match = dateStr.match(/(\d{1,2}) de (\w+) de (\d{4}), (\d{1,2}):(\d{2}) (a\.m\.|p\.m\.)/i);
        if (!match) return new Date(0); // fallback en caso de error

        let [_, day, monthName, year, hour, minutes, meridian] = match;
        day = parseInt(day);
        const month = meses[monthName.toLowerCase()];
        year = parseInt(year);
        hour = parseInt(hour);
        minutes = parseInt(minutes);

        if (meridian.toLowerCase() === "p.m." && hour !== 12) hour += 12;
        if (meridian.toLowerCase() === "a.m." && hour === 12) hour = 0;

        return new Date(year, month, day, hour, minutes);
    };

    
    const noticiasPolitica = NoticiasJson
        .filter((n) => n.category === "deporte")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date)); // Más recientes primero

    
    const totalPages = Math.ceil(noticiasPolitica.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const noticiasPagina = noticiasPolitica.slice(startIndex, startIndex + itemsPerPage);
    
    const changePage = (num) => setCurrentPage(num);

    return (
        <section>
            <div className="newscbanner">
                <div className="nwbimg">
                    <img src={Banner} alt="" />
                </div>
            </div>
            <div className="newstitle">Deporte</div>
            <div className="newsb">
                <div className="newsbody">
                    <div className="newscontent">
                        {noticiasPagina.map((n) => (
                            <Link to={`/noticias/${n.id}-${n.title.replace(/\s+/g, '-').toLowerCase()}`} className="newscard" key={n.id}>
                                <div className="newsimg">
                                    <img src={`/imgs/${n.img}.png`} alt="" width="100%" />
                                </div>
                                <div className="newstext">
                                    <span className="newscategory">{n.category}</span>
                                    <h3>{n.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />
                                    <span className="newsdate">{n.date}</span>
                                    <span className="newsreporter">{n.reporter}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Paginación numérica */}
                    <div className="pagination">
                        <button
                            onClick={() => changePage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ◀
                        </button>

                        {currentPage > 2 && (
                            <>
                                <button onClick={() => changePage(1)} className={currentPage === 1 ? "active" : ""}>1</button>
                                {currentPage > 3 && <span className="dots">...</span>}
                            </>
                        )}

                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter((page) =>
                                page === currentPage ||
                                page === currentPage - 1 ||
                                page === currentPage + 1
                            )
                            .map((page) => (
                                <button
                                    key={page}
                                    className={currentPage === page ? "active" : ""}
                                    onClick={() => changePage(page)}
                                >
                                    {page}
                                </button>
                            ))}

                        {currentPage < totalPages - 1 && (
                            <>
                                {currentPage < totalPages - 2 && <span className="dots">...</span>}
                                <button onClick={() => changePage(totalPages)} className={currentPage === totalPages ? "active" : ""}>
                                    {totalPages}
                                </button>
                            </>
                        )}

                        <button
                            onClick={() => changePage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            ▶
                        </button>
                    </div>
                </div>
                <div className="newsadd">
                <span className='add-span'>Publicidad</span>                </div>
            </div>
            
        </section>
    );
};

export default Sport;
