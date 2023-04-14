import classes from "./featured-projects.module.css";
import { BsCodeSlash } from "react-icons/bs";

function Projects() {
  return (
    <section id="projects">
      <div className="topsvg">
        <BsCodeSlash />
      </div>
      <div className={classes["projects-list"]}>
        <h2>Latest projects</h2>
      </div>
      <div className="botsvg">
        <BsCodeSlash />
      </div>
    </section>
  );
}

export default Projects;
