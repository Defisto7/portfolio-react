import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import img from "./../img/projects/01-big.jpg";

const ProjectPage = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Modern bank</h1>
          <a href="https://bank-modern-app-tau.vercel.app/">
            <img src={img} alt="" className="project-details__cover" />
          </a>
          <div className="project-details__desc">
            <p>Skills: Tailwind css, React</p>
          </div>
        <BtnGitHub link="https://github.com/Defisto7/bank_modern_app"/>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
