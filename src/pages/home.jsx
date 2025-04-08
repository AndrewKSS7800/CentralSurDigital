import { Link } from 'react-router-dom';

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
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566849996187%2Fvideos%2F1133519301441743%2F&show_text=false&width=560&t=0"
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
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566849996187%2Fvideos%2F1819454095254489%2F&show_text=false&width=560&t=0"
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
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566849996187%2Fvideos%2F1615853372650220%2F&show_text=false&width=560&t=0"
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
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566849996187%2Fvideos%2F920264586195367%2F&show_text=false&width=560&t=0"
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
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566849996187%2Fvideos%2F541695385324953%2F&show_text=false&width=560&t=0"
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
                                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F61566849996187%2Fvideos%2F934317455268344%2F&show_text=false&width=560&t=0"
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
                    <div className="n-card" id='ncard01'>
                        <span className="cat">
                            | Política
                        </span>
                        <span className="tit">
                            Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                        </span>
                        <span className="dat">
                            02/06/2024 16:42
                        </span>
                        <img src={Politica} alt="" width="40px" />
                        <p className="par">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate architecto libero in, laudantium iste perspiciatis consectetur. Libero quia nesciunt, eum inventore necessitatibus quis praesentium natus minima quasi illum blanditiis itaque assumenda laboriosam cupiditate numquam facilis recusandae quisquam totam, reiciendis aliquam quas asperiores soluta veniam. Officiis fugiat, alias culpa id animi quam nulla quidem fuga perferendis quod cumque delectus cupiditate aliquam ipsa nihil. Temporibus illum ullam ex, non sunt ratione voluptate omnis reiciendis rerum tempore esse exercitationem aliquid laudantium aut quod adipisci officia odit incidunt quaerat officiis possimus dignissimos iusto sint distinctio. Quaerat repellendus earum rem architecto esse aperiam cum molestiae!
                        </p>
                    </div>
                    <div className="n-card" id='ncard02'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                            <span className="dat">
                                02/06/2024 16:42
                            </span>
                        </div>
                        
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard03'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                            <span className="dat">
                                02/06/2024 16:42
                            </span>
                        </div>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard04'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                            <span className="dat">
                                02/06/2024 16:42
                            </span>
                        </div>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard05'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                            <span className="dat">
                                02/06/2024 16:42
                            </span>
                        </div>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard06'>
                        <span className="cat">
                            | Política
                        </span>
                        <span className="tit">
                            Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                        </span>
                        <span className="dat">
                            02/06/2024 16:42
                        </span>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard07'>
                        <span className="cat">
                            | Política
                        </span>
                        <span className="tit">
                            Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                        </span>
                        <span className="dat">
                            02/06/2024 16:42
                        </span>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-tend" id='ntend'>
                        <span>En tendencia</span>
                    </div>
                    <div className="n-card" id='ncard08'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                        </div>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard09'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                        </div>
                        <img src={Politica} alt="" width="40px" />
                    </div>
                    <div className="n-card" id='ncard10'>
                        <div>
                            <span className="cat">
                                | Política
                            </span>
                            <span className="tit">
                                Gobierno designó a Pedro Chira como presidente del Directorio de Perupetro.
                            </span>
                        </div>
                        <img src={Politica} alt="" width="40px" />
                    </div>


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
                    </div>

                    <div className="banner-r">
                        <div className='b-img' id='bnx'>
                            <img src={BannerX} alt="" />
                        </div>
                        <div className='b-img' id='bny'> 
                            <img src={BannerYoutube} alt="" />
                        </div>
                        
                        <div className='b-img' id='bni'>
                            <img src={BannerInstagram} alt="" />
                        </div>
                        <div className='b-img' id='bnt'>
                            <img src={BannerTiktok} alt="" />
                        </div>
                        <div className='b-img' id='bnf'>
                            <img src={BannerFacebook} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
            
            

        </section>
    );
};
export default Home;