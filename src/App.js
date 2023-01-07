import "./css/style.css";



import instagram from "./img/icons/instagram.svg"
import linkedIn from "./img/icons/linkedIn.svg"
import gitHub from "./img/icons/gitHub.svg"
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hi, my name is <em>Dima</em>
            </strong>
            <br /> a frontend developer{" "}
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="https://joyful-tulumba-e94b24.netlify.app/" className="btn">
            My CV
          </a>
        </div>
      </header>
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
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="https://github.com/Defisto7">
                  <img src={gitHub} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/dima-yanovskji-23670022a/">
                  <img src={linkedIn} alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.instagram.com/defisto77/">
                  <img src={instagram} alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2023 Dima Yanovskyi</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
