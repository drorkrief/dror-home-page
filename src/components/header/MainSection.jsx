import "./MainSection.css";
import me from "/me.jpg";
export default function MainSection() {
  return (
    <section>
      <main>
        <div className="main-page">
          {/* <h1 className="main-page-header">
            Hey there! I'm Dror Krief, a software developer passionate about
            building awesome things.
          </h1> */}
          <h1 className="main-page-header">
            Hey there! I'm Dror Krief{" "}
            <span style={{ color: "#00ff99" }}>{":)"}</span> Software Developer.
          </h1>
          <div className="main-page-text">
            <div className="image-container">
              <img src={me} alt="my pidture" className="circular-image" />
              <div className="small-circle"></div>
            </div>
          </div>
        </div>
        <div className="main-decor">
          <div></div>
          <p></p>
        </div>
      </main>
    </section>
  );
}
