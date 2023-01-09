import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {project} from "./../helpers/projectsList"


const ProjectPage = () => {

  const {id} = useParams();
  const projects = project[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{projects.title}</h1>
          <a href="https://bank-modern-app-tau.vercel.app/">
            <img src={projects.imgBig} alt={projects.title} className="project-details__cover" />
          </a>
          <div className="project-details__desc">
            <p>{projects.skills}</p>
          </div>
        <BtnGitHub link={projects.gitHubLink}/>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
