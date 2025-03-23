import Navbar from "./navbar";
import Logo from "../assets/imgs/Logo.png";
const Header = () => {
    return (
        <header>
            
            <div className="header">
            
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="name"><span>Central Sur Digital</span>
                <span>Noticias</span></div>
                <div className="networks">
                    <ul>
                        <li><a href=""><img src="" alt="" /></a></li>
                        <li><a href=""><img src="" alt="" /></a></li>
                        <li><a href=""><img src="" alt="" /></a></li>
                        <li><a href=""><img src="" alt="" /></a></li>
                        <li><a href=""><img src="" alt="" /></a></li>
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