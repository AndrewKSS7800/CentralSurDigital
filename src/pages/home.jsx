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



const Home = () => {
    const palabras = ["PERU", "NADINE", "NOTICIA", "POLITICA", "REPORTE", "REGION", "SUR", "ANDES"];

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
    .filter((n) => n.category === "política")
    .sort((a, b) => parseDate(b.date) - parseDate(a.date))
    .slice(0, 7);
    
    return (
        <section className="home">
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
                            <img src={Deporte}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Deporte</h2>
                            <p className="slide-text">Entérate de los triunfos, retos y pasión de los deportistas peruanos. Fútbol, vóley, atletismo y más disciplinas que nos unen.</p>
                            <Link to="/noticias/deporte" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Economia}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Economía</h2>
                            <p className="slide-text">Explora el pulso económico del país con noticias clave sobre el empleo, inflación, negocios, precios y decisiones que impactan tu bolsillo y el crecimiento del Perú.</p>
                            <Link to="/noticias/economia" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Cultura}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Cultura</h2>
                            <p className="slide-text">Sumérgete en las expresiones artísticas, festividades, cine, literatura y todo lo que enriquece la identidad cultural del Perú.</p>
                            <Link to="/noticias/cultura" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Tecnologia}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Tecnología</h2>
                            <p className="slide-text">Descubre cómo la innovación y el avance digital están transformando la vida diaria en Lima y el mundo. Lo último en apps, IA, ciencia y más.</p>
                            <Link to="/noticias/tecnologia" className="slide-link">Leer más</Link>
                            
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Ambiente}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Ambiente</h2>
                            <p className="slide-text">Reportes sobre el cambio climático, conservación, gestión de residuos y los desafíos ecológicos que enfrenta el país.</p>
                            <Link to="/noticias/ambiente" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Educacion}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Educación</h2>
                            <p className="slide-text">Noticias sobre el sistema educativo, innovaciones en el aprendizaje, universidades y temas que impactan el futuro de los jóvenes.</p>
                            <Link to="/noticias/educacion" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Sociedad}  alt="" />
                        </div>
                        
                        <div className="slide-content">
                            <h2 className="slide-title">Sociedad</h2>
                            <p className="slide-text">Historias que reflejan los desafíos, logros y cambios de la vida social peruana. Desde realidades urbanas hasta voces de la periferia.</p>
                            <Link to="/noticias/sociedad" className="slide-link">Leer más</Link>
                        </div>
                        
                    </li>
                    <li className="slide">
                        <div className='slide-bac-img'>
                            <img src={Politica}  alt="" />
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
                    anuncio
                </div>
                <div className="n-container">
                    <div className="cobesp">
                        <div className="csptitle">Cobertura Especial</div>
                        <div className="cspsubtitle">Apec Perú 2024</div>
                        <p>Central Sur Digital estuvo presente en uno de los eventos económicos más importantes del mundo. Nuestra cobertura destacó por su enfoque regional y periodismo directo desde el lugar de los hechos.</p>
                        <div className="cspiframes">
                            <div className="csconifr">
                                <iframe
                                src="https://www.canva.com/design/DAGWZm1oJCk/msjmpuM3PTtdUUXi1kmUmw/watch?embed"
                                width="auto"
                                height="auto"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                src="https://www.canva.com/design/DAGWYkm42fg/lW0u_8aZmVWkBbXkzWlR8g/watch?embed"
                                width="auto"
                                height="auto"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                                ></iframe>

                            </div>
                            <div className="csconifr">
                                <iframe
                                src="https://www.canva.com/design/DAGWHua6weQ/JPFFyx67Gqolu_-8O5u2pQ/watch?embed"
                                width="auto"
                                height="auto"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                src="https://www.canva.com/design/DAGWZoctrhU/GDv-VJkeASj7QaIQtJ1_GQ/watch?embed"
                                width="auto"
                                height="auto"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                src="https://www.canva.com/design/DAGWkqh07B0/dNq8xSrK97947Ytu6uJLIA/watch?embed"
                                width="auto"
                                height="auto"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                                ></iframe>
                            </div>
                            <div className="csconifr">
                                <iframe
                                src="https://www.canva.com/design/DAGWw_lEpLc/Mt_mrOQAiCB93a8ZZ2WYXQ/watch?embed"
                                width="auto"
                                height="auto"
                                style={{ border: "none", overflow: "hidden" }}
                                scrolling="no"
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowFullScreen={true}
                                ></iframe>
                            </div>
                    
                        </div>
                    </div>

                    <div className="t-colum">
                            <span>Noticias</span>
                            <Link to="/noticias">Leer más</Link>
                    </div>
                    {noticiasActuales.slice(0, 7).map((noticia, index) => (
                        <Link to={`/noticias/${noticia.id}`} className="n-card" id={`ncard${String(index + 1).padStart(2, '0')}`} key={index}>
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
                            <img src={`/imgs/${noticia.img}.png`} alt="" width="40px" />
                        </Link>
                    ))}
                
                    
                    <div className="n-tend" id='ntend'>
                        <span>En tendencia</span>
                    </div>
                    {noticiasTendencia.slice(0, 3).map((noticia, index) => (
                        <Link to={`/noticias/${noticia.id}`}  className="n-card" id={`ncard${String(index + 8).padStart(2, '0')}`} key={index}>
                            <div>
                                <span className="cat">
                                    | {noticia.category.charAt(0).toUpperCase() + noticia.category.slice(1)}
                                </span>
                                <span className="tit">
                                    {noticia.title}
                                </span>
                            </div>
                            <img src={`/imgs/${noticia.img}.png`} alt="" width="40px" />
                        </Link>
                    ))}



                    <div className="col">
                        <div className="sp-colum"></div>
                        <div className="t-colum">
                            <span>Columnistas</span>
                            <Link to="/noticias/columnas">Leer más</Link>
                        </div>
                        <div className="colum-n">
                            <div className="colum-n-g">
                                <div>
                                    <span className='c-t'>
                                        El gobierno del peru en estado de emergencia ante el covid 19.
                                    </span>
                                    <span className="c-a">
                                        Por Graciela Reyes 
                                    </span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, natus sunt provident ullam dignissimos suscipit error? Magni eveniet quisquam natus. Quas, quaerat. Excepturi sint provident tempora rem, ipsum sequi? Quae, iure optio? Voluptatum minus ab dolore fugit mollitia consequatur earum libero blanditiis id, excepturi maiores ipsam iste. Dignissimos, id aliquid!</p>
                                </div>
                                <img src={Ambiente} alt="" width="30px" />
                            </div>
                            <div className="colum-n-g">
                                <div>
                                    <span className='c-t'>
                                        El gobierno del peru en estado de emergencia ante el covid 19.
                                    </span>
                                    <span className="c-a">
                                        Por Graciela Reyes 
                                    </span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, natus sunt provident ullam dignissimos suscipit error? Magni eveniet quisquam natus. Quas, quaerat. Excepturi sint provident tempora rem, ipsum sequi? Quae, iure optio? Voluptatum minus ab dolore fugit mollitia consequatur earum libero blanditiis id, excepturi maiores ipsam iste. Dignissimos, id aliquid!</p>
                                </div>
                                <img src={Ambiente} alt="" width="30px" />
                            </div>
                            <div className="colum-n-g">
                                <div>
                                    <span className='c-t'>
                                        El gobierno del peru en estado de emergencia ante el covid 19.
                                    </span>
                                    <span className="c-a">
                                        Por Graciela Reyes 
                                    </span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, natus sunt provident ullam dignissimos suscipit error? Magni eveniet quisquam natus. Quas, quaerat. Excepturi sint provident tempora rem, ipsum sequi? Quae, iure optio? Voluptatum minus ab dolore fugit mollitia consequatur earum libero blanditiis id, excepturi maiores ipsam iste. Dignissimos, id aliquid!</p>
                                </div>
                                <img src={Ambiente} alt="" width="30px" />
                            </div>
                            <div className="colum-n-g">
                                <div>
                                    <span className='c-t'>
                                        El gobierno del peru en estado de emergencia ante el covid 19.
                                    </span>
                                    <span className="c-a">
                                        Por Graciela Reyes 
                                    </span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, natus sunt provident ullam dignissimos suscipit error? Magni eveniet quisquam natus. Quas, quaerat. Excepturi sint provident tempora rem, ipsum sequi? Quae, iure optio? Voluptatum minus ab dolore fugit mollitia consequatur earum libero blanditiis id, excepturi maiores ipsam iste. Dignissimos, id aliquid!</p>
                                </div>
                                <img src={Ambiente} alt="" width="30px" />
                            </div>
                        </div>
                        <div className="sp-colum"></div>
                    </div>

                    <div className='wsch'>
                        
                        <h2>Amenidades - Pupiletras 🧩</h2>
                        <WordSearch wordList={palabras} />
                    </div>

                    <div className="banner-r">
                        <a href="https://x.com/centralsur_d" target='_blank' className='b-img' id='bnx'>
                            <img src={BannerX} alt="" />
                        </a>
                        <a href="https://www.youtube.com/@CentralSurDigital/videos" target='_blank' className='b-img' id='bny'> 
                            <img src={BannerYoutube} alt="" />
                        </a>
                        
                        <a href="https://www.instagram.com/centralsurdigital/" target='_blank' className='b-img' id='bni'>
                            <img src={BannerInstagram} alt="" />
                        </a>
                        <a href="https://www.tiktok.com/@centralsurdigital"  target='_blank' className='b-img' id='bnt'>
                            <img src={BannerTiktok} alt="" />
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=61575278335998" target='_blank' className='b-img' id='bnf'>
                            <img src={BannerFacebook} alt="" />
                        </a>
                    </div>
                </div>
                
            </div>
            
            

        </section>
    );
};
export default Home;