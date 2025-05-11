import Navbar from "./navbar";
import Logo from "../assets/imgs/Logo.png";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NoticiasJson from '../data/data.json'; // Ajusta esta ruta si es diferente
import { useParams } from "react-router-dom";
const Header = () => {
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
    const [currentIndex, setCurrentIndex] = useState(0);
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

    
    const noticiasPolitica = NoticiasJson
        .sort((a, b) => parseDate(b.date) - parseDate(a.date)); // Más recientes primero

    const noticiasTop10 = noticiasPolitica.slice(0, 10);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % noticiasTop10.length);
        }, 8000); // cambia cada 8 segundos (puedes ajustar el tiempo)
    
        return () => clearInterval(interval); // Limpia el intervalo cuando se destruye el componente
      }, [noticiasTop10.length]); // cambia cada 8 segundos (puedes ajustar el tiempo)
    return (
        <header>
            <div className="bheader">
                <div className="bhtitle">
                    <span>Actualidad:</span>
                </div>
                <div className="bhactnot">
                    <div className="bhc">
                    {noticiasTop10.length > 0 && (
                    <Link to={`/noticias/${noticiasTop10[currentIndex].id}-${slugify(noticiasTop10[currentIndex].title)}`} key={currentIndex} className="fade">{noticiasTop10[currentIndex].title}</Link>
                )}
                    </div>
                
                </div>
            </div>
            <div className="header">
                <Link to="/" className="logo">
                    <img src={Logo} alt="logo" className="logo-img" loading="lazy"/>
                </Link>
                <Link to="/" className="name"><span>Central Sur Digital</span>
                <span>Noticias</span></Link>
                <div className="networks">
                    <ul>
                        <li><a href="https://www.youtube.com/@CentralSurDigital/videos" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"/></svg></a></li>
                        <li><a href="https://www.tiktok.com/@centralsurdigital" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M412.19 118.66a109.27 109.27 0 01-9.45-5.5 132.87 132.87 0 01-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 01-35.22 55.56 68.8 68.8 0 01-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0121.41 3.39l.1-83.94a153.14 153.14 0 00-118 34.52 161.79 161.79 0 00-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 00115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0027.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z"/></svg></a></li>
                        <li><a href="https://x.com/centralsur_d" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>
                        <li><a href="https://www.instagram.com/centralsurdigital/" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"/><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"/></svg></a></li>
                        <li><a href="https://web.facebook.com/profile.php?id=61575278335998" target="__blank"><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fill-rule="evenodd"/></svg></a></li>
                    </ul>
                </div>
            </div>
            <div className="nav-ico">
                
                <label htmlFor="menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-open" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </label>
                
                
            </div>
            <input type="checkbox" name="menu-btn" id="menu-btn" className="cb-menu"/>
            <Navbar></Navbar>
        </header>
    );
};
export default Header;