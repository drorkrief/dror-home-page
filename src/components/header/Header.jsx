export default function Header() {
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
          <li></li>
          <li>{/* <a href="#services">Services</a> */}</li>
          <li>{/* <a href="#skills">Skills</a> */}</li>
          <li>{/* <a href="#experience">Experience</a> */}</li>
          <li>{/* <a href="#education">Education</a> */}</li>
          <li>{/* <a href="#testimonials">Testimonials</a> */}</li>
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
        </ul>
      </nav>
    </header>
  );
}
