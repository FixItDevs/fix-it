import React from "react";
import "./FeedItem.css";

interface Post {
  title: string;
  body: string;
}

interface FeedItemProps {
  post: Post;
}

const FeedItem: React.FC<FeedItemProps> = ({ post }) => {
  return (
    <div className="feed-item">
      <h2 className="feed-item-title">{post.title}</h2>
      <p className="feed-item-body">{post.body}</p>
    </div>
  );
};

export default FeedItem;
