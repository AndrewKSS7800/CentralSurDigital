import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav>
            <label htmlFor="menu-btn" className="l-menu-btn-close">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-close" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>            
            </label>
            <ul>
                <li>
                    <label htmlFor="menu-btn">
                        <Link to={"/"} onClick={() => document.getElementById("menu-btn").click()}>Inicio</Link>
                    </label>
                </li>
                <li>
                    <label htmlFor="menu-btn">
                        <Link to={"/sobre-nosotros"} onClick={() => document.getElementById("menu-btn").click()}>Nosotros</Link>
                    </label>
                </li>
                <li>
                    <label htmlFor="menu-btn">
                        <Link to={"/noticias"} onClick={() => document.getElementById("menu-btn").click()}>Noticias</Link>
                    </label>
                </li>
                <li>
                    <label htmlFor="menu-btn">
                        <Link to={"/contacto"} onClick={() => document.getElementById("menu-btn").click()}>Contacto</Link>
                    </label>
                </li>
            </ul>
        </nav>
        
    );
};
export default Navbar;