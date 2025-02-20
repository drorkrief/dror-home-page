import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <div className="logo">
              <span className="dev">DEV</span>
              <span className="name">DROR KRIEF</span>
            </div>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="burger-menu">
            <button onClick={toggleMenu}>BurgerMenu</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
