import { useState } from "react";
import "./Header.scss";
export default function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <a href="https://drorkrief.github.io/dror-home-page">
        <div className="logo">
          <span className="dev">DEV</span>
          <span className="name">DROR KRIEF</span>
        </div>
      </a>
      <a
        href="#"
        className={showMenu ? "menuBtn" : "menuBtn act"}
        onClick={toggleMenu}
      >
        <span className="lines"></span>
      </a>
      <nav className={showMenu ? "mainMenu" : "mainMenu act"}>
        <ul>
          <li onClick={toggleMenu}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#blog">Blog</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact">Contact</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#" class="suBtn">
              Sing Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
