import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";
import { TbWriting } from "react-icons/tb";

function FeaturedPosts(props) {
  return (
    <section>
      <div className="topsvg">
        <TbWriting />
      </div>
      <div className={classes["posts-list"]}>
        <h2>Latest blogs</h2>
        <PostsGrid posts={props.posts} />
      </div>
      <div className="botsvg">
        <TbWriting />
      </div>
    </section>
  );
}

export default FeaturedPosts;
