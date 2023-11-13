import { useSelector } from "react-redux";
import { selectAllSales } from "./SalesSlice";
import PostAuthor from "../features/post/PostAuthor";
import TimeAgo from "../features/post/TimeAgo";
import ReactionButtons from "../features/post/ReactionButtons";

const SalesList = () => {
  const sales = useSelector(selectAllSales);

  const orderedPosts = sales
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((sale) => (
    <article key={sale.id}>
      <h4>{sale.type}</h4>
      <p>{sale.description.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={sale.userId} />
        <TimeAgo timestamp={sale.date} />
        <ReactionButtons post={sale} />
      </p>
    </article>
  ));

  return (
    <section
      style={{ border: "2px solid black", margin: "10px", padding: "10px" }}
    >
      <h2 style={{ textAlign: "center" }}>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default SalesList;
