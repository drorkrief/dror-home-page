import "./App.scss";
import Header from "./components/header/Header";
import MainSection from "./components/header/MainSection";

function App() {
  return (
    <>
      <Header />
      <MainSection />
      <div id="portfolio" className="divs">
        Portfolio
      </div>

      <div id="blog" className="divs">
        Blog
      </div>

      <div id="about" className="divs">
        About
      </div>

      <div id="projects" className="divs">
        Projects
      </div>

      <div id="contact" className="divs">
        Contact
      </div>
    </>
  );
}

export default App;
