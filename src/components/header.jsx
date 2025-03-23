import Navbar from "./navbar";
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="logo"></div>
                <div className="name">Central Sur Digital</div>
                <div className="networks"></div>
            </div>
            <Navbar></Navbar>
        </header>
    );
};
export default Header;