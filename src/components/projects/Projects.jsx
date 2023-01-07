import first from "./../../img/projects/01.jpg";
import second from "./../../img/projects/02.jpg";
import third from "./../../img/projects/03.jpg";
import fourth from "./../../img/projects/04.jpg";
import fifth from "./../../img/projects/05.jpg";


const Projects = () => {
  return (
    <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="project-page.html">
                <img
                  src={first}
                  alt="project img"
                  className="project__img"
                />
                <h3 className="project__title">Modern bank</h3>
              </a>
            </li>
            <li className="project">
              <img
                src={second}
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Admin dashboard</h3>
            </li>
            <li className="project">
              <img
                src={third}
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Netflix</h3>
            </li>
            <li className="project">
              <img
                src={fourth}
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Youtube</h3>
            </li>
            <li className="project">
              <img
                src={fifth}
                alt="project img"
                className="project__img"
              />
              <h3 className="project__title">Game store</h3>
            </li>
          </ul>
        </div>
      </main>
  )
}

export default Projects