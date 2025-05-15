import { Link} from "react-router-dom";
import NoticiasJson from '../data/data.json'; 
import IMG1 from "../assets/imgs/Economia.png";
import { Helmet } from "react-helmet";
import IMG2 from "../assets/imgs/politica.jpg"
const News = () => {
    function slugify(text) {
    return text
        .toString()
        .normalize("NFD")                   // Descompone acentos
        .replace(/[\u0300-\u036f]/g, "")    // Elimina los acentos
        .replace(/[^\w\s-]/g, "")           // Elimina caracteres especiales excepto guiones
        .trim()                             // Elimina espacios al inicio y final
        .replace(/\s+/g, '-')               // Reemplaza espacios por guiones
        .toLowerCase();                     // Convierte a minúsculas
    }
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

    
    const Politica = NoticiasJson
        .filter((n) => n.category === "política")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Sociedad = NoticiasJson
        .filter((n) => n.category === "sociedad")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));
    
    const Deporte = NoticiasJson
        .filter((n) => n.category === "deporte")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Salud = NoticiasJson
        .filter((n) => n.category === "salud")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Ambiente = NoticiasJson
        .filter((n) => n.category === "ambiente")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Tecnología = NoticiasJson
        .filter((n) => n.category === "tecnología")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));
    
    const Educación = NoticiasJson
        .filter((n) => n.category === "educación")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));
    
    const Transporte = NoticiasJson
        .filter((n) => n.category === "transporte")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Economía = NoticiasJson
        .filter((n) => n.category === "economía")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Cultura = NoticiasJson
        .filter((n) => n.category === "cultura")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    return (
        <section className="news">
            <Helmet>
                            <link rel="shortcut icon" href="../../public/Logo-ico.ico" type="image/x-icon"></link>
                            <meta property="og:type" content="website" />
                            <meta property="og:title" content="Central Sur Digital | Noticias del sur de Lima" />
                            <meta property="og:description" content="Información actualizada sobre política, sociedad, cultura y más. Conoce las decisiones que impactan tu región." />
                            <meta property="og:url" content="https://centralsurdigital.netlify.app/noticias" />
                            <meta property="og:image" content="/banner.png" />
            
                            
                            <link
                                rel="canonical"
                                href={`https://centralsurdigital.netlify.app/noticias`}
                            />
                            
                            
                            {/* Twitter Card */}
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content="Central Sur Digital | Noticias del sur de Lima" />
                            <meta name="twitter:description" content="Información actualizada sobre política, sociedad, cultura y más. Conoce las decisiones que impactan tu región."/>
                            <meta name="twitter:image" content={"/banner.png"} />
            
                        </Helmet>
            <div className="news-list">
                <div className="nlist-h">
                    <span>Lo último en Política</span>
                    <Link to="/noticias/politica">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Politica.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>

                <div className="nlist-h">
                    <span>Lo último en Economía</span>
                    <Link to="/noticias/economia">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Economía.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>


                <div className="nlist-h">
                    <span>Lo último en Salud</span>
                    <Link to="/noticias/salud">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Salud.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>

                <div className="nlist-h">
                    <span>Lo último en Sociedad</span>
                    <Link to="/noticias/sociedad">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Sociedad.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>


                <div className="nlist-h">
                    <span>Lo último en Deporte</span>
                    <Link to="/noticias/deporte">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Deporte.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>

                <div className="nlist-h">
                    <span>Lo último en Transporte</span>
                    <Link to="/noticias/transporte">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Transporte.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>

                <div className="nlist-h">
                    <span>Lo último en Tecnología</span>
                    <Link to="/noticias/tecnologia">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Tecnología.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>


                <div className="nlist-h">
                    <span>Lo último en Educación</span>
                    <Link to="/noticias/educacion">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Educación.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>


                <div className="nlist-h">
                    <span>Lo último en Cultura</span>
                    <Link to="/noticias/cultura">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Cultura.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>

                <div className="nlist-h">
                    <span>Lo último en Ambiente</span>
                    <Link to="/noticias/ambiente">Leer más</Link>
                </div>
                <div className="nlist-b">
                    {Ambiente.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`} className="nlbc" key={n.id}>
                            <div className="nlbc-img">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="40px"/>
                            </div>
                            <div className="nlbc-content">
                                <span>{n.category}</span>
                                <span>{n.title}</span>
                                <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />                                
                                <span className="nlbc-at">Por <b> {n.reporter} </b> - {n.date}</span>
                            </div>
                        </Link>
                    ))}
                    
                </div>


                
            </div>
            <div className="news-add">
            <span className='add-span'>Publicidad</span>
            </div>
        </section>
    );
};
export default News;