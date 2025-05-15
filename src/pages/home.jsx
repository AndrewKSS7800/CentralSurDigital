import { Link } from 'react-router-dom';
import NoticiasJson from '../data/data.json';
import WordSearch from '../components/wordsearch';
import Economia from "../assets/imgs/Economia.png";
import Deporte from "../assets/imgs/deporte-img.jpg";
import Politica from "../assets/imgs/politica.jpg";
import Cultura from "../assets/imgs/cultura peruana.jpg"
import Tecnologia from "../assets/imgs/tecnologia.png";
import Ambiente from "../assets/imgs/ambiente.png";
import Educacion from "../assets/imgs/educacion1.jpg";
import Sociedad from "../assets/imgs/sociedad.jpg";
import BannerX from "../assets/imgs/Banner-x.png";
import BannerYoutube from "../assets/imgs/Banner-youtube.png";
import BannerFacebook from "../assets/imgs/Banner-facebook.png";
import BannerTiktok from "../assets/imgs/Banner-tiktok.png";
import BannerInstagram from "../assets/imgs/Banner-instagram.png";
import { Helmet } from "react-helmet";


const Home = () => {
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
    const todasLasPalabras = [
        "PERU", "NADINE", "NOTICIA", "POLITICA", "REPORTE", "REGION", "SUR", "ANDES",
        "ECONOMIA", "LIMA", "CULTURA", "HISTORIA", "AMAZONAS", "INCA", "CONGRESO",
        "SALUD", "EDUCACION", "MINERIA", "PUNO", "CUSCO", "EXPORTACION", "AGRICULTURA",
        "VIAJE", "GASTRONOMIA", "PUEBLO", "URBANISMO", "SEGURIDAD", "CIUDAD", "TURISMO",
        "TRADICION", "HEROE", "SOL", "MAR", "CORDILLERA", "NEVADO", "FIESTA", "FOLCLORE",
        "MUSEO", "ARTESANIA", "ARTISTA", "MONEDA", "BANCO", "VALLE", "CIELO", "QUIPU",
        "ORO", "PLATA", "FERIA", "HUACA", "TEMPLO"
    ];
    function obtenerPalabrasAleatorias(lista, cantidad) {
        const copia = [...lista];
        const seleccionadas = [];
      
        while (seleccionadas.length < cantidad && copia.length > 0) {
          const idx = Math.floor(Math.random() * copia.length);
          seleccionadas.push(copia.splice(idx, 1)[0]);
        }
      
        return seleccionadas;
      }

      
    const palabras = obtenerPalabrasAleatorias(todasLasPalabras, 8);


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

    
    const noticiasTendencia = NoticiasJson
    .filter((n) => n.tendency === "yes")
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 3);

    const noticiasActuales = NoticiasJson
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 7);

    const noticiasSalud = NoticiasJson
    .filter((n) => n.category === "salud")
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 4);
    
    return (
        <section className="home">
            <Helmet>
                <link rel="shortcut icon" href="../../public/Logo-ico.ico" type="image/x-icon"></link>
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Central Sur Digital | Noticias del sur de Lima" />
                <meta property="og:description" content="Información actualizada sobre política, sociedad, cultura y más. Conoce las decisiones que impactan tu región." />
                <meta property="og:url" content="https://centralsurdigital.netlify.app/" />
                <meta property="og:image" content="/banner.png" />

                
                <link
                    rel="canonical"
                    href={`https://centralsurdigital.netlify.app/`}
                />
                
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Central Sur Digital | Noticias del sur de Lima" />
                <meta name="twitter:description" content="Información actualizada sobre política, sociedad, cultura y más. Conoce las decisiones que impactan tu región."/>
                <meta name="twitter:image" content={"/banner.png"} />

            </Helmet>
            <div className="slider">
                <input type="radio" name="toggle" id="btn-1" checked/>
                <input type="radio" name="toggle" id="btn-2" checked />
                <input type="radio" name="toggle" id="btn-3" checked/>
                <input type="radio" name="toggle" id="btn-4" checked/>
                <input type="radio" name="toggle" id="btn-5" checked />
                <input type="radio" name="toggle" id="btn-6" checked/>
                <input type="radio" name="toggle" id="btn-7" checked/>
                <input type="radio" name="toggle" id="btn-8" checked/>
                
                

                <div className="slider-controls">
                    <label for="btn-1"></label>
                    <label for="btn-2"></label>
                    <label for="btn-3"></label>
                    <label for="btn-4"></label>
                    <label for="btn-5"></label>
                    <label for="btn-6"></label>
                    <label for="btn-7"></label>
                    <label for="btn-8"></label>
                </div>

                <ul className="slides">
                    
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Deporte} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Deporte</h2>
                            <p className="slide-text">Entérate de los triunfos, retos y pasión de los deportistas peruanos. Fútbol, vóley, atletismo y más disciplinas que nos unen.</p>
                            <Link to="/noticias/deporte" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Economia} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Economía</h2>
                            <p className="slide-text">Explora el pulso económico del país con noticias clave sobre el empleo, inflación, negocios, precios y decisiones que impactan tu bolsillo y el crecimiento del Perú.</p>
                            <Link to="/noticias/economia" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Cultura} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Cultura</h2>
                            <p className="slide-text">Sumérgete en las expresiones artísticas, festividades, cine, literatura y todo lo que enriquece la identidad cultural del Perú.</p>
                            <Link to="/noticias/cultura" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Tecnologia} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Tecnología</h2>
                            <p className="slide-text">Descubre cómo la innovación y el avance digital están transformando la vida diaria en Lima y el mundo. Lo último en apps, IA, ciencia y más.</p>
                            <Link to="/noticias/tecnologia" className="slide-link">Leer más</Link>
                            
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Ambiente} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Ambiente</h2>
                            <p className="slide-text">Reportes sobre el cambio climático, conservación, gestión de residuos y los desafíos ecológicos que enfrenta el país.</p>
                            <Link to="/noticias/ambiente" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Educacion} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Educación</h2>
                            <p className="slide-text">Noticias sobre el sistema educativo, innovaciones en el aprendizaje, universidades y temas que impactan el futuro de los jóvenes.</p>
                            <Link to="/noticias/educacion" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Sociedad} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Sociedad</h2>
                            <p className="slide-text">Historias que reflejan los desafíos, logros y cambios de la vida social peruana. Desde realidades urbanas hasta voces de la periferia.</p>
                            <Link to="/noticias/sociedad" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Politica} loading="lazy" alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Política</h2>
                            <p className="slide-text">Análisis y cobertura de las decisiones del Congreso, el Ejecutivo y los protagonistas del panorama político nacional.</p>
                            <Link to="/noticias/politica" className="slide-link">Leer más</Link>
                            
                        </div>
                        
                    </li>
                </ul>
            </div>
            <div className="news-h">
                <div className="add-h">
                <span className='add-span'>Publicidad</span>
                
                </div>
                <div className="n-container">
                    <div className="cobesp">
                        <div className="csptitle">Cobertura Especial</div>
                        <div className="cspsubtitle">Apec Perú 2024</div>
                        <p>Central Sur Digital estuvo presente en uno de los eventos económicos más importantes del mundo. Nuestra cobertura destacó por su enfoque regional y periodismo directo desde el lugar de los hechos.</p>
                        <div className="cspiframes">
                            <div className="csconifr">
                                <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/SXdax0gGmW4?si=WQF0FX3NhzzxtkPc"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/-oJnM2LNs9I?si=tmEjKqPp5GjFW5fx"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                                ></iframe>

                            </div>
                            <div className="csconifr">
                                <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/eon0Gkaxk_U?si=WkIcyEw4kzlGozeH"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/lg8CRqa3uPI?si=OABr0G47vorkzDqV"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/IS2ybbhi9Z4?si=RrzxkrHiuI2hy4aH"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                width="auto"
                                height="auto"
                                src="https://www.youtube.com/embed/3UrDYAk40Co?si=E7LpJ_3o0GjkO4Ru"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                loading="lazy"
                                ></iframe>
                            </div>
                    
                        </div>
                    </div>

                    <div className="t-colum">
                            <span>Noticias</span>
                            <Link to="/noticias">Leer más</Link>
                    </div>
                    {noticiasActuales.slice(0, 7).map((noticia, index) => (
                        <Link to={`/noticias/${noticia.id}-${slugify(noticia.title)}`} className="n-card" id={`ncard${String(index + 1).padStart(2, '0')}`} key={index}>
                            <div>
                                <span className="cat">
                                    | {noticia.category.charAt(0).toUpperCase() + noticia.category.slice(1)}
                                </span>
                                <span className="tit">
                                    {noticia.title}
                                </span>
                                <span className="dat">
                                    {noticia.date}
                                </span>
                                <p className="par" dangerouslySetInnerHTML={{ __html: noticia.content.substring(0, 4000) + "..." }} />
                            </div>
                            <img src={`/imgs/${noticia.img}.png`} loading="lazy" alt="" width="40px" />
                        </Link>
                    ))}
                
                    
                    <div className="n-tend" id='ntend'>
                        <span>En tendencia</span>
                    </div>
                    {noticiasTendencia.slice(0, 3).map((noticia, index) => (
                        <Link to={`/noticias/${noticia.id}-${slugify(noticia.title)}`}  className="n-card" id={`ncard${String(index + 8).padStart(2, '0')}`} key={index}>
                            <div>
                                <span className="cat">
                                    | {noticia.category.charAt(0).toUpperCase() + noticia.category.slice(1)}
                                </span>
                                <span className="tit">
                                    {noticia.title}
                                </span>
                            </div>
                            <img src={`/imgs/${noticia.img}.png`} loading="lazy" alt="" width="40px" />
                        </Link>
                    ))}



                    <div className="col">
                        <div className="sp-colum"></div>
                        <div className="t-colum">
                            <span>Salud</span>
                            <Link to="/noticias/salud">Leer más</Link>
                        </div>
                        <div className="colum-n">
                        {noticiasSalud.map((n) => (
                            <Link to={`/noticias/${n.id}-${slugify(n.title)}`} key={n.id} className="colum-n-g">
                                <div>
                                    <span className='c-t'>
                                        {n.title}
                                    </span>
                                    <span className="c-a">
                                        Por {n.reporter} 
                                    </span>
                                    <p dangerouslySetInnerHTML={{ __html: n.content.substring(0, 4000) + "..." }} />
                                </div>
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="100%" />
                            </Link>
                        ))}
                        </div>
                        <div className="sp-colum"></div>
                    </div>

                    <div className='wsch'>
                        
                        <h2>Amenidades - Pupiletras 🧩</h2>
                        <WordSearch wordList={palabras} />
                    </div>

                    <div className="banner-r">
                        <a href="https://x.com/centralsur_d" target='_blank' className='b-img' id='bnx'>
                            <img loading="lazy" src={BannerX} alt="" />
                        </a>
                        <a href="https://www.youtube.com/@CentralSurDigital/videos" target='_blank' className='b-img' id='bny'> 
                            <img loading="lazy" src={BannerYoutube} alt="" />
                        </a>
                        
                        <a href="https://www.instagram.com/centralsurdigital/" target='_blank' className='b-img' id='bni'>
                            <img loading="lazy" src={BannerInstagram} alt="" />
                        </a>
                        <a href="https://www.tiktok.com/@centralsurdigital"  target='_blank' className='b-img' id='bnt'>
                            <img loading="lazy" src={BannerTiktok} alt="" />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61575278335998" target='_blank' className='b-img' id='bnf'>
                            <img loading="lazy" src={BannerFacebook} alt="" />
                        </a>
                    </div>
                </div>
                
            </div>
            
            

        </section>
    );
};
export default Home;