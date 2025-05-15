import Img1 from "../assets/imgs/csd-g01.jpg"
import Img2 from "../assets/imgs/csd-g02.jpg"
import Img3 from "../assets/imgs/csd-g03.jpg"
import { Helmet } from "react-helmet";
const About = () =>{
    return (
        <section className="about-us">
          <Helmet>
                            <link rel="shortcut icon" href="../../public/Logo-ico.ico" type="image/x-icon"></link>
                            <meta property="og:type" content="website" />
                            <meta property="og:title" content="Central Sur Digital | Noticias del sur de Lima" />
                            <meta property="og:description" content="Información actualizada sobre política, sociedad, cultura y más. Conoce las decisiones que impactan tu región." />
                            <meta property="og:url" content="https://centralsurdigital.netlify.app/sobre-nosotros" />
                            <meta property="og:image" content="/banner.png" />
            
                            
                            <link
                                rel="canonical"
                                href={`https://centralsurdigital.netlify.app/sobre-nosotros`}
                            />
                            
                            
                            {/* Twitter Card */}
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content="Central Sur Digital | Noticias del sur de Lima" />
                            <meta name="twitter:description" content="Información actualizada sobre política, sociedad, cultura y más. Conoce las decisiones que impactan tu región."/>
                            <meta name="twitter:image" content={"/banner.png"} />
            
                        </Helmet>
          <div className="hero-title">
            <h2>Conócenos</h2>
            <p>Somos Central Sur Digital, conectando al sur con el mundo.</p>
          </div>

          <div className="mission-vision-obj">
            <div className="card mission">
              <h3>Misión</h3>
              <p>Difundir, canalizar y garantizar la información veraz y el acceso a contenidos audiovisuales de calidad, generando confianza en la ciudadanía en la recepción de noticias locales, nacionales e internacionales. 
              </p>
            </div>
            <div className="card vision">
              <h3>Visión</h3>
              <p>Ser un referente en la televisión digital a nivel nacional en materia social y comercial por nuestra efectividad organizacional adaptada a las tendencias de las tecnologías comunicacionales, preferidos por la audiencia que disfruta la experiencia de Central Sur noticias. 
              </p>
            </div>
            <div className="card objective">
              <h3>Objetivo</h3>
              <p>Liderar proyectos transmedia que destaquen la identidad del público con nuestros productos innovadores, los cuales integren entretenimiento, información y educación para consolidarnos como el canal público regional de mayor cobertura. Así tambien posicionar a la empresa en el mercado de los servicios de marketing digital, desarrollo de tecnologías de la información y comunicaciones, así como servicios de logística asociados al sector.</p>
            </div>
            <div className="card valores">
              <h3>Valores</h3>
              <p>En Central Sur Digital promovemos la ética periodística, el respeto a la verdad, la imparcialidad, la innovación y el compromiso con la comunidad. Estos valores son la base de cada noticia que compartimos.</p>
            </div>
          </div>
          <div className="card historia">
            <div>
              <h3>Nuestro Origen</h3>
              <p>
              CSD nace con el firme propósito de desarrollar una información veraz, democrático e imparcial con un periodismo que ejerza el contra poder desde las páginas virtuales en las redes sociales. 
              Iniciamos el presente proyecto comunicacional con tres periodistas en base a dar la información esencialmente en Lima Sur y bajo el propósito de desarrollar trabajos de información, noticias, entrevistas, reportajes, etc, con el apoyo de las nuevas tecnologías audio visuales que existe en el mercado y la construcción de alianzas con otros medios de comunicación posesionados en nuestra sociedad.
              </p>
            </div>
            <div className="chimg">
              <img src={Img3} alt="" loading="lazy" width="50px"/>
            </div>
            
          </div>
          
</section>

    );
};
export default About;