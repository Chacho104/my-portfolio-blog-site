import classes from "./all-posts.module.css";
import PostsList from "./posts-list";
import { TbWriting } from "react-icons/tb";

function AllPosts(props) {
  return (
    <section>
      <div className="topsvg">
        <TbWriting />
      </div>
      <div className={classes["posts-list"]}>
        <h2 className="special-h2">All blogs</h2>
        <PostsList posts={props.posts} />
      </div>
      <div className="botsvg">
        <TbWriting />
      </div>
    </section>
  );
}

export default AllPosts;
