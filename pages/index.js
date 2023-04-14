import About from "@/components/home-page/about";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Projects from "@/components/home-page/featured-projects";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Churchil's Portfolio & Blog</title>
        <meta
          name="description"
          content="Welcome to Churchil's portfolio and blog website. View my amazing projects and read my informative blogs, all in one place."
        />
      </Head>
      <Hero />
      <About />
      <Projects />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
