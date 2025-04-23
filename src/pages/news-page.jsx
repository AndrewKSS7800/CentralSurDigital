import Img1 from "../assets/imgs/Economia.png";
import Img2 from "../assets/imgs/escritor.jpg";
import Img3 from "../assets/imgs/csd-g03.jpg";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import  noticias  from "../data/data.json";

import { Link } from 'react-router-dom';
const Newspage = () =>{
    const navigate = useNavigate();

    const { id } = useParams();
    const noticia = noticias.find(n => n.id == parseInt(id));
    console.log("ID de la URL:", id);
    console.log("Noticia encontrada:", noticia);
    if (!noticia) {
    return <div>Noticia no encontrada</div>;
    }
    return (
        <section className="news-page">
            <div className="npback">
                <div onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" className="npico" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div> <span></span> <span> {noticia.category}</span> <span>/</span> <span> {noticia.title}</span>
            </div>
            <div className="nptitle">
                {noticia.title}
            </div>
            <div className="npcontent01">
                <div className="npimg">
                    <img src={`/imgs/${noticia.img}.png`} alt="" width="100%" />
                </div>
                <a href={noticia["url-reporter"]} className="npescritor" target="_blank">
                    <div className="npesimg">
                        <img src={Img2} alt=""  width="30px"/>
                    </div>
                    <div className="npescon">
                        <span>Por {noticia.reporter}</span>
                        <span>{noticia.date}</span>
                    </div>
                </a>
                <div className="npcontent">
                    <p dangerouslySetInnerHTML={{ __html: noticia.content.substring(0, 10000) }} />
                </div>
                <div className="nprelevante">
                    <h3>Lo más relevante</h3>
                    <div className="nprcontent">
                        <div className="nprcontents">
                            <div className="nprcontentcard">
                                <span>
                                    Economia
                                </span>
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, maiores ullam soluta doloribus provident accusantium ab beatae laborum vero a!
                                </span>
                            </div>
                            <div className="nprimg">
                                <img src={Img1} alt="" width="20px"/>
                            </div>
                        </div>
                        <div className="nprcontents">
                            <div className="nprcontentcard">
                                <span>
                                    Economia
                                </span>
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, maiores ullam soluta doloribus provident accusantium ab beatae laborum vero a!
                                </span>
                            </div>
                            <div className="nprimg">
                                <img src={Img1} alt="" width="20px"/>
                            </div>
                        </div>
                        <div className="nprcontents">
                            <div className="nprcontentcard">
                                <span>
                                    Economia
                                </span>
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, maiores ullam soluta doloribus provident accusantium ab beatae laborum vero a!
                                </span>
                            </div>
                            <div className="nprimg">
                                <img src={Img1} alt="" width="20px"/>
                            </div>
                        </div>
                        <div className="nprcontents">
                            <div className="nprcontentcard">
                                <span>
                                    Economia
                                </span>
                                <span>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, maiores ullam soluta doloribus provident accusantium ab beatae laborum vero a!
                                </span>
                            </div>
                            <div className="nprimg">
                                <img src={Img1} alt="" width="20px"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="npcontent02">
                <div className="npadd-1">
                    Anuncio
                </div>
                <div className="npadd-2">
                    Anuncio
                </div>
                <div className="npultcat">
                    <h3>Lo último en economía</h3>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta, incidunt sunt quo nam sint, rem laudantium explicabo temporibus officia quae numquam maxime, cupiditate eum.</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta, incidunt sunt quo nam sint, rem laudantium explicabo temporibus officia quae numquam maxime, cupiditate eum.</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta, incidunt sunt quo nam sint, rem laudantium explicabo temporibus officia quae numquam maxime, cupiditate eum.</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta, incidunt sunt quo nam sint, rem laudantium explicabo temporibus officia quae numquam maxime, cupiditate eum.</span>
                    </div>
                    <div>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dicta, incidunt sunt quo nam sint, rem laudantium explicabo temporibus officia quae numquam maxime, cupiditate eum.</span>
                    </div>
                </div>
                <div className="npultgen">
                    <h3>
                        Última Hora
                    </h3>
                    <div className="npugcontent">
                        
                        <div className="npugcard">
                            <div className="npugcardcont">
                                <span>Economía</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore mollitia corrupti modi error repudiandae, aliquam voluptatibus velit quisquam perferendis.</span>
                            </div>
                            <div className="npugcardimg">
                                <img src={Img1} alt="" width="20px" />
                            </div>
                        </div>
                        <div className="npugcard">
                            <div className="npugcardcont">
                                <span>Economía</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore mollitia corrupti modi error repudiandae, aliquam voluptatibus velit quisquam perferendis.</span>
                            </div>
                            <div className="npugcardimg">
                                <img src={Img1} alt="" width="20px" />
                            </div>
                        </div>
                        <div className="npugcard">
                            <div className="npugcardcont">
                                <span>Economía</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore mollitia corrupti modi error repudiandae, aliquam voluptatibus velit quisquam perferendis.</span>
                            </div>
                            <div className="npugcardimg">
                                <img src={Img1} alt="" width="20px" />
                            </div>
                        </div>
                        <div className="npugcard">
                            <div className="npugcardcont">
                                <span>Economía</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore mollitia corrupti modi error repudiandae, aliquam voluptatibus velit quisquam perferendis.</span>
                            </div>
                            <div className="npugcardimg">
                                <img src={Img1} alt="" width="20px" />
                            </div>
                        </div>
                        <div className="npugcard">
                            <div className="npugcardcont">
                                <span>Economía</span>
                                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolore mollitia corrupti modi error repudiandae, aliquam voluptatibus velit quisquam perferendis.</span>
                            </div>
                            <div className="npugcardimg">
                                <img src={Img1} alt="" width="20px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </section>

    );
};
export default Newspage;