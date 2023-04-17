import ItemsGrid from "../ui/items-grid";
import PostItem from "./post-item";

function PostsList(props) {
  const { posts } = props;

  return (
    <ItemsGrid>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ItemsGrid>
  );
}

export default PostsList;
