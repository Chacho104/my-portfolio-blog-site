import ProjectItem from "./project-item";

function ProjectsList(props) {
  const { projects } = props;
  return (
    <ul>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectsList;
