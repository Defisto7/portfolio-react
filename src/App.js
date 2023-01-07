import "./css/style.css";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Modern bank</h3>
              </a>
            </li>
            <li className="project">
              <img
                src="./img/projects/02.jpg"
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Admin dashboard</h3>
            </li>
            <li className="project">
              <img
                src="./img/projects/03.jpg"
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Netflix</h3>
            </li>
            <li className="project">
              <img
                src="./img/projects/04.jpg"
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Youtube</h3>
            </li>
            <li className="project">
              <img
                src="./img/projects/05.jpg"
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Game store</h3>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
