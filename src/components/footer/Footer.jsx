import instagram from "./../../img/icons/instagram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import "./style.css";
const Footer = () => {
  return (
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
  )
}

export default Footer