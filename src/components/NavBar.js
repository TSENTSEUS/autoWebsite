import {FaBars, FaTimes} from "react-icons/fa";
import {useRef} from "react";
import logo from "../assets/logo.png";
import white_phone from "../assets/white_phone.png";
export default function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="icon">
        <div>
          <img src={logo} alt="logo" width={100}></img>
        </div>

        <div className="phoneNumber">
          <div>
            <img src={white_phone} alt={"logo"} width={15}></img>
          </div>
          <div className="phoneNumber_column">
            <a href="tel:+380635551234">+380635551234</a>
            <a href="tel:+380634414609">+380634414609</a>
          </div>
        </div>
      </div>
      <div className="nav_a">
        <nav ref={navRef}>
          <a href="#about_us">О нас</a>
          <a href="#contacts">Контакты</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}
