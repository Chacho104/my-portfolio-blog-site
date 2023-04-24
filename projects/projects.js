const projects = [
  {
    id: "little-lemon",
    title: "Restaurant web app",
    type: "Personal project",
    description:
      "A fully fledged web app for an imaginary restaurant, Little Lemon. Place your online food orders and reserve a table in advance for your next visit. Beautiful and fully responsive UI.",
    stack: "React.js | Formik | Context API | CSS3 | CSS Modules | Netlify",
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
      "Full-stack next.js web app for an imaginary events app, Eventour. Browse and book events near you and have fun with other event lovers. Complete with authentication, so you can sign up, log in, and log out.",
    stack: "React.js | Next.js | SSG | SSR | ISR | CSS3 | CSS Modules",
    github: "https://github.com/Chacho104/eventour-app",
    website: "https://www.churchilowino.com/",
    image: "images/projects/eventour1.png",
    isFeatured: true,
    layout: "img-first",
  },
  {
    id: "my-site",
    title: "My portfolio website",
    type: "Personal project",
    description:
      "My portfolio and blog website. Browse my latest projects and blogs, and shoot me a message if you'd like to collaborate on building something amazing for the web.",
    stack: "React.js | Next.js | SSG | SSR | CSS3 | CSS Modules | Vercel",
    github: "https://github.com/Chacho104/my-portfolio-blog-site",
    website: "https://www.churchilowino.com/",
    image: "images/projects/chacho-portfolio.png",
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
