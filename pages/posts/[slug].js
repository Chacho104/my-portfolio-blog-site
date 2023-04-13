import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";

function PostDetailPage(props) {
  return (
    <Fragment>
      <PostContent post={props.post} />
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((postFilename) =>
    postFilename.replace(/\.md$/, "")
  );

  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export default PostDetailPage;
