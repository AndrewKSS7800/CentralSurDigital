import Img1 from "../assets/imgs/Economia.png";
import Img2 from "../assets/imgs/escritor.jpg";
import Img3 from "../assets/imgs/csd-g03.jpg";
import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import  noticias  from "../data/data.json";
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom';
const Newspage = () =>{
    
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

    const Tendencia = noticias
    .filter((n) => n.tendency === "yes")
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

    const Actuales = noticias
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));


    const Economía = noticias
        .filter((n) => n.category === "economía")
        .sort((a, b) => parseDate(b.date) - parseDate(a.date));
    const navigate = useNavigate();
    const currentUrl = window.location.href;

    const { id } = useParams();

    // Extraer solo el ID numérico de la parte que viene en la URL
    const idSolo = parseInt(id.split('-')[0]);

    const noticia = noticias.find(n => n.id === idSolo);

    console.log("ID de la URL:", idSolo);
    console.log("Noticia encontrada:", noticia);
    if (!noticia) {
    return <div>Noticia no encontrada</div>;
    }
    return (
        

        <section className="news-page">
            <Helmet>
                <link rel="shortcut icon" href="../../public/Logo-ico.ico" type="image/x-icon"></link>
                <meta name="description" content={noticia.content.substring(0, 150)} />
                <meta property="og:title" content={noticia.title} />
                <meta property="og:description" content={noticia.content.substring(0, 150)} />
                <meta property="og:image" content={`https://centralsurdigital.netlify.app/imgs/${noticia.img}.png`} />
                <meta property="og:url" content={`https://centralsurdigital.netlify.app/noticias/${noticia.id}-${slugify(noticia.title)}`}/>
                <link
                    rel="canonical"
                    href={`https://centralsurdigital.netlify.app/noticias/${noticia.id}`}
                />
                <meta property="og:type" content="article" />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={noticia.title} />
                <meta name="twitter:description" content={noticia.content.substring(0, 150)} />
                <meta name="twitter:image" content={`https://centralsurdigital.netlify.app/imgs/${noticia.img}.png`} />

            </Helmet>
            <div className="npback">
                <div onClick={() => navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" className="npico" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m480-320 56-56-64-64h168v-80H472l64-64-56-56-160 160 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></div> <span></span> <span> {noticia.category}</span> <span>/</span> <span> {noticia.title}</span>
            </div>
            <div className="nptitle">
                {noticia.title}
            </div>
            <div className="npcontent01">
                <div className="npimg">
                    <img src={`/imgs/${noticia.img}.png`} loading="lazy" alt="" width="100%" />
                </div>
                <a href={noticia["url-reporter"]} className="npescritor" target="_blank">
                    <div className="npesimg">
                        <img src={Img2} alt="" loading="lazy" width="30px"/>
                    </div>
                    <div className="npescon">
                        <span>Por {noticia.reporter}</span>
                        <span>{noticia.date}</span>
                    </div>
                </a>
                <div className="npcontent">
                    <p dangerouslySetInnerHTML={{ __html: noticia.content.substring(0, 10000) }} />
                    <div className="npshare">
                        <br />
                        <h4>Compartir esta noticia:</h4>
                        
                        <div className="npshare-buttons">
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn facebook"
                            >
                                Facebook
                            </a>
                            <a
                                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(noticia.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn twitter"
                            >
                                X (Twitter)
                            </a>
                            <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(noticia.title + ' ' + currentUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn whatsapp"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                <div className="nprelevante">
                    <h3>Lo más relevante</h3>
                    <div className="nprcontent">
                    {Tendencia.slice(0, 4).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`}  key={n.id} className="nprcontents">
                            <div className="nprcontentcard">
                                <span>
                                {n.category}
                                </span>
                                <span>{n.title}</span>
                            </div>
                            <div className="nprimg">
                                <img src={`/imgs/${n.img}.png`}  loading="lazy" alt="" width="20px"/>
                            </div>
                        </Link>
                    ))}
                        
                        
                    </div>
                </div>
            </div>
            <div className="npcontent02">
                <div className="npadd-1">
                <span className='add-span'>Publicidad</span>
                </div>
                <div className="npadd-2">
                <span className='add-span'>Publicidad</span>
                </div>
                <div className="npultcat">
                    <h3>Lo último en economía</h3>
                    
                    {Economía.slice(0, 5).map((n) => (
                    <Link to={`/noticias/${n.id}-${slugify(n.title)}`}  key={n.id}>
                        <span>{n.title}</span>
                    </Link>
                    ))}
                </div>
                <div className="npultgen">
                    <h3>
                        Última Hora
                    </h3>
                    <div className="npugcontent">
                        {Actuales.slice(0, 5).map((n) => (
                        <Link to={`/noticias/${n.id}-${slugify(n.title)}`}  key={n.id} className="npugcard">
                            <div className="npugcardcont">
                                <span>{n.category}</span>
                                <span>{n.title}</span>                            
                            </div>
                            <div className="npugcardimg">
                                <img src={`/imgs/${n.img}.png`} loading="lazy" alt="" width="20px" />
                            </div>
                        </Link>
                        ))}
                    </div>
                </div>
            </div>
            
            
        </section>

    );
};
export default Newspage;