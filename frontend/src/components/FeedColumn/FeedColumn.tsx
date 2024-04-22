import "./FeedColumn.css";
import { dummyFeedData } from "../../data/dummyFeedData";
import PostItem from "../Post/PostItem";

const FeedColumn = () => {
  return (
    <div className="feed-col-container">
      <h1 className="feed-title">I am a dummy title by the way</h1>

      {/* 👇🏻 mapped post feed */}
      <div className="main-feed-container">
        {dummyFeedData.map((post) => (
          <div key={post.title}>
            <PostItem post={post} />
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedColumn;
