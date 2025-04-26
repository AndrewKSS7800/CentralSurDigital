import { useState } from "react";
import NoticiasJson from '../../data/data.json'; // Ajusta esta ruta si es diferente
import { useParams } from "react-router-dom";
import Img1 from "../../assets/imgs/Economia.png"; // ajusta la ruta
import { Link } from 'react-router-dom';
import Banner from "../../assets/imgs/banner-economia.png"
const Economy = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Simulación de datos (mock)
    const mockNoticias = Array.from({ length: 45 }, (_, i) => ({
        id: i + 1,
        titulo: "Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.",
        contenido: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate architecto libero in, laudantium iste perspiciatis consectetur. Libero quia nesciunt, eum inventore necessitatibus quis praesentium natus minima quasi illum blanditiis itaque assumenda laboriosam cupiditate numquam facilis recusandae quisquam totam, reiciendis aliquam quas asperiores soluta veniam. Officiis fugiat, alias culpa id animi quam nulla quidem fuga perferendis quod cumque delectus cupiditate aliquam ipsa nihil. Temporibus illum ullam ex, non sunt ratione voluptate omnis reiciendis rerum tempore esse exercitationem aliquid laudantium aut quod adipisci officia odit incidunt quaerat officiis possimus dignissimos iusto sint distinctio. Quaerat repellendus earum rem architecto esse aperiam cum molestiae!",
        genero: `Noticia ${i + 1}`,
        reportero: "Redacción Central Sur",
        img: Img1,
        fecha: "20/12/2024 17:29"
    }));

    const totalPages = Math.ceil(mockNoticias.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const noticiasPagina = mockNoticias.slice(startIndex, startIndex + itemsPerPage);

    const changePage = (num) => setCurrentPage(num);

    return (
        <section>
            <div className="newscbanner">
                <div className="nwbimg">
                    <img src={Banner} alt="" />
                </div>
            </div>
            <div className="newstitle">Economía</div>
            <div className="newsb">
                <div className="newsbody">
                    <div className="newscontent">
                        {noticiasPagina.map((n) => (
                            <Link to="/noticia/noticia-pagina" className="newscard" key={n.id}>
                                <div className="newsimg">
                                    <img src={n.img} alt="" width="100%" />
                                </div>
                                <div className="newstext">
                                    <span className="newscategory">{n.genero}</span>
                                    <h3>{n.titulo}</h3>
                                    <p>{n.contenido}</p>
                                    <span className="newsdate">{n.fecha}</span>
                                    <span className="newsreporter">{n.reportero}</span>
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

export default Economy;