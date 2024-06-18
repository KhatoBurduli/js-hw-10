import React from "react";
import "./App.css";
import image1 from './assets/1.jpg';
import image2 from './assets/2.jpg';
import image3 from './assets/3.jpg';


function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>My Portfolio</h1>
        <h2>Khatuna Burduli</h2>
      </header>

      <section className="fact">
        <h2>British-Georgian Academy</h2>
        <img
          src={image1}
          alt="British-Georgian Academy"
          className="fact-image"
        />
        <p>
          I completed my schooling at the British-Georgian Academy, where I
          acquired essential skills that have laid a solid foundation for my
          future endeavors. The rigorous academic environment and diverse
          curriculum helped me develop critical thinking, problem-solving
          abilities, and a strong work ethic.
        </p>
      </section>

      <section className="fact">
        <h2>Caucasus University</h2>
        <img
          src={image2}
          alt="Caucasus University"
          className="fact-image"
        />
        <p>
          Currently, I am pursuing a degree in Computer Science at Caucasus
          University. I am dedicated to mastering this field and work diligently
          to excel in my studies. My goal is to become proficient in various
          aspects of computer science and contribute to innovative projects.
        </p>
      </section>

      <section className="fact">
        <h2>Skillwill</h2>
        <img
          src={image3}
          alt="Skillwill"
          className="fact-image"
        />
        <p>
          I am also a student at Skillwill, where I have completed the
          "Programming from Zero" course. This course provided me with a strong
          foundation in programming. I am now continuing my education by taking
          the React course, which is helping me enhance my skills in web
          development.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
