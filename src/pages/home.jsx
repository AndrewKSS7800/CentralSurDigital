import { Link } from 'react-router-dom';

import Img1 from "../assets/imgs/economia.jpg";
import Img2 from "../assets/imgs/educacion.jpg";
import Img3 from "../assets/imgs/politica.jpg";
import Img4 from "../assets/imgs/tecnologia.jpg"
import Img5 from "../assets/imgs/sociedad.jpg";
import Img6 from "../assets/imgs/ambiente.jpg";
import Img7 from "../assets/imgs/Cultura.jpg";
import Img8 from "../assets/imgs/Deporte.jpg"


const Home = () => {
    
    return (
        <section className="home">
            <div className="container">
                <input checked type="radio" name="slider" id="item-1" />
                <input checked type="radio" name="slider" id="item-2"/>
                <input checked type="radio" name="slider" id="item-3"/>
                <input checked type="radio" name="slider" id="item-4"/>
                <input checked type="radio" name="slider" id="item-5"/>
                <input checked type="radio" name="slider" id="item-6" />
                <input checked type="radio" name="slider" id="item-7"/>
                <input checked type="radio" name="slider" id="item-8"/>
                
                <div className="cards">
                    <label className="card" htmlFor="item-1" id="card-1">
                        <img src={Img8} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-1'> Deporte</Link>
                    </label>
                    <label className="card" htmlFor="item-2" id="card-2">
                        <img src={Img1} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-2'> Economia</Link>
                    </label>
                    <label className="card" htmlFor="item-3" id="card-3">
                        <img src={Img4} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-3'> Tecnología</Link>
                    </label>
                    <label className="card" htmlFor="item-4" id="card-4">
                        <img src={Img5} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-4'> Sociedad</Link>
                    </label>
                    <label className="card" htmlFor="item-5" id="card-5">
                        <img src={Img6} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-5'> Ambiente</Link>
                    </label>
                    <label className="card" htmlFor="item-6" id="card-6">
                        <img src={Img7} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-6'> Cultura</Link>
                    </label>
                    <label className="card" htmlFor="item-7" id="card-7">
                        <img src={Img2} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-7'> Educacion</Link>
                    </label>
                    <label className="card" htmlFor="item-8" id="card-8">
                        <img src={Img3} alt=""/>
                        <Link to="/noticias" className='name-card' id='name-card-8'> Política</Link>
                    </label>
                </div>
                
            </div>
        </section>
    );
};
export default Home;