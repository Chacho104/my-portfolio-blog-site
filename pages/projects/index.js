import { Fragment } from "react";
import Head from "next/head";
import AllProjects from "@/components/projects/all-projects";
import { getAllProjects } from "@/projects/projects";

function AllProjectsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>.Ch | All projects</title>
        <meta
          name="description"
          content="A list of all the projects I have worked on before!"
        />
      </Head>
      <AllProjects projects={props.projects} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const projects = getAllProjects();

  return {
    props: {
      projects: projects,
    },
  };
}

export default AllProjectsPage;
