import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.posts}>
      <h2>Featured Blogs</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;