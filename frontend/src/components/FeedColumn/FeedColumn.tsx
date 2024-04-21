import "./FeedColumn.css";
import { dummyFeedData } from "../../data/dummyFeedData";
import FeedItem from "../FeedItem/FeedItem";

const FeedColumn = () => {
  return (
    <div className="feed-col-container">
      <h1 className="feed-title">I am a dummy title by the way</h1>

      {/* 👇🏻 mapped post feed */}
      <div className="main-feed-container">
        {dummyFeedData.map((item) => (
          <div key={item.title}>
            <FeedItem item={item} />
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedColumn;
