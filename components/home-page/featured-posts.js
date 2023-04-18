import PostsList from "../posts/posts-list";
import classes from "./featured-posts.module.css";
import { TbWriting } from "react-icons/tb";

function FeaturedPosts(props) {
  return (
    <section className={classes.posts}>
      <div className="topsvg">
        <TbWriting />
      </div>
      <div className={classes["posts-list"]}>
        <h2>Latest blogs</h2>
        <PostsList posts={props.posts} />
      </div>
      <div className="botsvg">
        <TbWriting />
      </div>
    </section>
  );
}

export default FeaturedPosts;
