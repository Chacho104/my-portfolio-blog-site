import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>C&C Solutions | All Blogs</title>
        <meta
          name="description"
          content="A list of all programming blogs and tutorials!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
