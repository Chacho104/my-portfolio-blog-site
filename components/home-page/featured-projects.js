import ProjectsList from "../projects/projects-list";
import classes from "./featured-projects.module.css";
import { BsCodeSlash } from "react-icons/bs";

function Projects(props) {
  return (
    <section id="projects">
      <div className="topsvg">
        <BsCodeSlash />
      </div>
      <div className={classes["projects-list"]}>
        <h2>Latest projects</h2>
        <ProjectsList projects={props.projects} />
      </div>
      <div className="botsvg">
        <BsCodeSlash />
      </div>
    </section>
  );
}

export default Projects;
