
import Img1 from "../assets/imgs/economia.jpg";
import Img2 from "../assets/imgs/transporte.jpg";
import Img3 from "../assets/imgs/politica.jpg";
import Img4 from "../assets/imgs/salud.jpg"

const Home = () => {
    
    return (
        <section className="home">
            <div className="container">
                <input checked type="radio" name="slider" id="item-1" />
                <input checked type="radio" name="slider" id="item-2"/>
                <input checked type="radio" name="slider" id="item-3"/>
                <input checked type="radio" name="slider" id="item-4"/>
                <div className="cards">
                    <label className="card" htmlFor="item-1" id="song-1">
                    <img src={Img1} alt="song"/>
                    </label>
                    <label className="card" htmlFor="item-2" id="song-2">
                    <img src={Img2} alt="song"/>
                    </label>
                    <label className="card" htmlFor="item-3" id="song-3">
                    <img src={Img3} alt="song"/>
                    </label>
                    <label className="card" htmlFor="item-4" id="song-4">
                    <img src={Img4} alt="song"/>
                    </label>
                </div>
                
            </div>
        </section>
    );
};
export default Home;