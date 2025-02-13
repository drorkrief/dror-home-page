import "./MainSection.css";
import me from "/me.jpg";
export default function MainSection() {
  return (
    <section>
      <header>
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
      <main>
        <div className="main-page">
          <h1 className="main-page-header">
            Hey there! I'm Dror Krief, a software developer passionate about
            building awesome things.
          </h1>
          <div className="image-container">
            <img src={me} alt="hero" className="circular-image" />
          </div>
        </div>
      </main>
    </section>
  );
}
