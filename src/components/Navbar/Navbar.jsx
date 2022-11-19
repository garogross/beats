import './Navbar.css';
import {logoImg,burgerMenuImg} from "../../assets/images"

function Navbar() {
    return (
        <div className="navbar container">
            <div className="navbar__logo">
                <a href="#" className="navbar__logoLink">
                    <img src={logoImg} alt="Logo" className="navbar__logoImg"/>
                </a>
            </div>
            <nav className="navbar__links">
                <a href="#" className="navbar__LinkItem">Download</a>
                <a href="#" className="navbar__LinkItem">Contact</a>
                <a href="#" className="navbar__LinkItem">FAQ</a>
            </nav>
            <button className="navbar__burgerBtn">
                <img src={burgerMenuImg} alt="" className="navbar__burgerImg"/>
            </button>
        </div>
    );
}

export default Navbar;
