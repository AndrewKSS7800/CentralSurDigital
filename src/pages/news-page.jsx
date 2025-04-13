import Img1 from "../assets/imgs/Economia.png"
import Img2 from "../assets/imgs/escritor.jpg"
import Img3 from "../assets/imgs/csd-g03.jpg"
import { Link } from 'react-router-dom';
const texto = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Voluptate accusantium fugit expedita? Sequi earum quam sint repellendus nulla atque, et est? Incidunt magni qui accusantium vero, iure facere nam debitis alias rem error repellendus iusto modi excepturi omnis? Nulla, modi sapiente exercitationem, omnis repellendus consequuntur minima hic velit tempora odit vel voluptas aliquid sequi autem rem quas quidem, mollitia iste? Assumenda quibusdam modi dolores, sint minima, laborum vel quisquam sit non asperiores dolor nihil cum ratione enim nulla consequatur. 
                Aspernatur accusamus voluptatum quisquam numquam corrupti optio ad distinctio suscipit rerum facilis veniam, exercitationem iste ipsum consectetur labore corporis, dolore autem beatae recusandae fugiat quibusdam odio provident? Earum expedita iure similique modi rem inventore error ipsam, ullam facere delectus accusantium consequuntur, possimus, sapiente cum! In numquam ea recusandae consectetur voluptates nisi eaque cum dolore, enim perferendis esse facilis praesentium, aspernatur, accusamus est quae voluptatem dicta? Unde, fugit fugiat incidunt, commodi inventore laudantium sit molestias sed et provident nisi expedita voluptates esse dolore reiciendis consequatur nam ducimus mollitia, quidem voluptas deleniti odit. Natus reiciendis provident beatae explicabo adipisci enim repellat, dolorum illo culpa quos voluptatem sapiente, fugit labore aliquam voluptas, ab eum non. Ipsam unde recusandae, illum, saepe dolorum itaque error impedit id sequi molestiae incidunt tempora, accusamus assumenda. Qui eligendi debitis corporis corrupti, rem reiciendis incidunt omnis eveniet perspiciatis id accusantium ipsam eum natus aliquid magni. 
                Ut neque doloribus corporis culpa repudiandae ipsam esse error quia facilis dolorem cupiditate laudantium eos labore voluptatum, ab voluptas quod. Labore accusamus repudiandae rem dolor, obcaecati iure sit quae laboriosam porro, fugit nihil velit inventore minima sapiente eius cupiditate, repellendus harum. Ipsam consequuntur sunt amet ducimus quia voluptate minus sed corporis iste, ab saepe porro ea possimus nostrum odio dolores aliquam, officia, eius quas rerum maxime voluptatum? Ad quasi quisquam, facilis nihil officia veniam ut!`;
const Newspage = () =>{
    return (
        <section className="news-page">
            <div className="npback">
                <Link to="/noticias"><svg xmlns="http://www.w3.org/2000/svg" className="npico" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></Link> <span></span> <span>Economía</span> <span>/</span> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptates, totam deserunt reprehenderit adipisci ipsam repellendus cum laborum ipsa! Ipsum earum vero neque. Ex, nemo?</span>
            </div>
            <div className="nptitle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus incidunt harum consequatur! Quos, laborum minus.
            </div>
            <div className="npimg">
                <img src={Img1} alt="" />
            </div>
            <div className="npescritor">
                <div className="npesimg">
                    <img src={Img2} alt=""  width="30px"/>
                </div>
                <div className="npescon">
                    <span>Por Autor Autor</span>
                    <span>19 de marzo del 2024 17:56</span>
                </div>
            </div>
            <div className="npcontent">
                {texto}
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
        </section>

    );
};
export default Newspage;