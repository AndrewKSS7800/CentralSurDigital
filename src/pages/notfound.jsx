import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="error-container">
            <img
                src="/Logo.png" 
                alt="Logo de la empresa"
                className="logonf"
            />
            <h1>😵 ¡Error 404!</h1>
            <p>La página que buscas no existe o ha sido eliminada.</p>
            <div>
                <Link to="/">
                <button className="btn-home">Volver al inicio</button>
                </Link>
            </div>
        </div>
    );
};
export default NotFound;