import { BsCodeSlash } from "react-icons/bs";

import classes from "./all-projects.module.css";
import ProjectsList from "./projects-list";

function AllProjects(props) {
  return (
    <section className={classes.projects}>
      <div className="topsvg">
        <BsCodeSlash />
      </div>
      <div className={classes["projects-list"]}>
        <h2 className="special-h2">All projects</h2>
        <ProjectsList projects={props.projects} />
      </div>
      <div className="botsvg">
        <BsCodeSlash />
      </div>
    </section>
  );
}

export default AllProjects;
