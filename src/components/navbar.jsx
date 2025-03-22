import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/sobre-nosotros"}>Nosotros</Link>
                </li>
                <li>
                    <Link to={"/noticias"}>Noticias</Link>
                </li>
                <li>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;