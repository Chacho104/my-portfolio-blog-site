const projects = [
  {
    id: "reddit-clone",
    title: "Reddit Clone",
    type: "Personal project",
    description:
      "A full-stack clone of Reddit with implementations of key Reddit functionalities such as authentication, creating and joining communities; and creating, voting on, and commenting on posts in communities.",
    stack:
      "TypeScript | React.js | Next.js | Recoil | Chakra UI | Firebase | Cloud Firestore | Vercel ",
    github: "https://github.com/Chacho104/reddit-clone",
    website: "https://reddit-clone-vzno.vercel.app/",
    image: "images/projects/reddit-clone.png",
    isFeatured: true,
    layout: "text-first",
  },
  {
    id: "little-lemon",
    title: "Restaurant web app",
    type: "Personal project",
    description:
      "A fully fledged web app for an imaginary restaurant, Little Lemon. Place your online food orders and reserve a table in advance for your next visit. Beautiful and fully responsive UI.",
    stack:
      "TypeScript | React.js | Next.js | Formik | Redux Toolkit | SASS | CSS Modules | Vercel | MongoDB",
    github: "https://github.com/Chacho104/little-lemon",
    website: "https://little-lemon-theta.vercel.app/",
    image: "images/projects/little-lemon.png",
    isFeatured: true,
    layout: "img-first",
  },
  {
    id: "eventour-app",
    title: "Events web app",
    type: "Personal project",
    description:
      "Full-stack next.js web app for an imaginary events app, Eventour. Browse and book events near you and have fun with other event lovers. Complete with authentication, so you can sign up, log in, and log out.",
    stack:
      "React.js | Next.js | SSG | SSR | ISR | CSS3 | CSS Modules | Vercel | MongoDB",
    github: "https://github.com/Chacho104/eventour-app",
    website: "https://eventour-app.vercel.app/",
    image: "images/projects/events-webpage.png",
    isFeatured: true,
    layout: "text-first",
  },
  {
    id: "my-site",
    title: "My portfolio website",
    type: "Personal project",
    description:
      "My portfolio and blog website. Browse my latest projects and blogs, and shoot me a message if you'd like to collaborate on building something amazing for the web.",
    stack:
      "React.js | Next.js | SSG | SSR | CSS3 | CSS Modules | Vercel | React Markdown | YAML | MongoDB",
    github: "https://github.com/Chacho104/my-portfolio-blog-site",
    website: "https://www.churchilowino.com/",
    image: "images/projects/portfolio-home.png",
    isFeatured: true,
    layout: "img-first",
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
