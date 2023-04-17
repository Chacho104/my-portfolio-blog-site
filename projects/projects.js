const projects = [
  {
    id: "little-lemon",
    title: "Restaurant web app",
    type: "Personal project",
    description:
      "A fully fledged web app for an imaginary restaurant, Little Lemon. Place your online food orders and reserve a table in advance for your next visit.",
    stack: "React.js | Formik | Context API | CSS3 | CSS Modules",
    github: "https://github.com/Chacho104/little-lemon-app",
    website: "https://little-lemon-complete.web.app/",
    image: "images/projects/restaurant-app.png",
    isFeatured: true,
    layout: "text-first",
  },
  {
    id: "eventour-app",
    title: "Events web app",
    type: "Personal project",
    description:
      "A fully fledged web app for an imaginary restaurant, Little Lemon. Place your online food orders and reserve a table in advance for your next visit.",
    stack: "React.js | Formik | Context API | CSS3 | CSS Modules",
    github: "https://github.com/Chacho104/little-lemon-app",
    website: "https://little-lemon-complete.web.app/",
    image: "images/projects/events-app.png",
    isFeatured: true,
    layout: "img-first",
  },
  {
    id: "my-site",
    title: "My portfolio website",
    type: "Personal project",
    description:
      "My portfolio and blog website. Browse my latest projects and blogs, and send me a message if you'd like to collaborate on building something amazing for the web.",
    stack: "React.js | Next.js | SSG | SSR | CSS3 | CSS Modules",
    github: "https://github.com/Chacho104/my-blog",
    website: "https://little-lemon-complete.web.app/",
    image: "images/projects/myblogsite.png",
    isFeatured: true,
    layout: "text-first",
  },
];

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  const projects = getAllProjects();

  const featuredProjects = projects.filter((project) => project.isFeatured);

  return featuredProjects;
}
