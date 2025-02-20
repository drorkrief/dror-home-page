import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="header">
      <div className="logo">
        <span className="dev">DEV</span>
        <span className="name">DROR KRIEF</span>
      </div>
      <a
        href="#"
        className={showMenu ? "menuBtn" : "menuBtn act"}
        onClick={toggleMenu}
      >
        <span className="lines"></span>
      </a>
      <nav className={showMenu ? "mainMenu" : "mainMenu act"}>
        <ul>
          <li>
            <a href="#">Intro</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#" class="suBtn">
              Sing Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
