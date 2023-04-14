import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";
import { TbWriting } from "react-icons/tb";

function AllPosts(props) {
  return (
    <section>
      <div className="topsvg">
        <TbWriting />
      </div>
      <div className={classes["posts-list"]}>
        <h2 className="special-h2">All Blogs</h2>
        <PostsGrid posts={props.posts} />
      </div>
      <div className="botsvg">
        <TbWriting />
      </div>
    </section>
  );
}

export default AllPosts;
