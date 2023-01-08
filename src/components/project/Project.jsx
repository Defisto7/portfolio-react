import "./style.css"

const Project = ({title, img, link}) => {
  return (
    <li className="project">
      <a href={`/project/${link}`}>
        <img src={img} alt="project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default Project;
