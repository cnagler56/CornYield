import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h4>{post.title}</h4>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
      </p>
    </article>
  ));

  return (
    <div
      style={{ border: "2px solid black", marginTop: "20px", maxWidth: "40em" }}
    >
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      <section
        style={{
          border: "2px solid black",
          margin: "10px",
          padding: "10px",
          overflow: "scroll",
          maxHeight: "20em",
        }}
      >
        {renderedPosts}
      </section>
      <AddPostForm></AddPostForm>
    </div>
  );
};
export default PostsList;
