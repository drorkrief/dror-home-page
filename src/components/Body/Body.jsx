import { useEffect, useRef } from "react";
import "./Body.scss";
export default function Body() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const sections = [
    { name: "Portfolio" },
    { name: "Blog" },
    { name: "About" },
    { name: "Projects" },
    { name: "Contact" },
  ];
  return (
    <>
      <div className="containerbox" style={{ padding: "50px" }}>
        {sections.map((section, index) => (
          <div
            ref={(el) => (elementsRef.current[index] = el)}
            className="hidden box"
            id={section.name.toLowerCase()}
            key={index}
          >
            {section.name}
            <h2>Cascade Effect</h2>
            <p>Child elements can animate one after another.</p>
            <ul>
              <li>First item</li>
              <li>Second item</li>
              <li>Third item</li>
            </ul>
          </div>
        ))}
      </div>
      {/* <div className="container" style={{ padding: "50px" }}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (elementsRef.current[index] = el)}
            className="hidden box"
          >
            <h2>Section {index + 1}</h2>
            <p>This content reveals on scroll.</p>
          </div>
        ))}
      </div> */}
    </>
  );
}
