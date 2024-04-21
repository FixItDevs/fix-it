import React from "react";
import "./FeedItem.css";

interface Item {
  title: string;
  body: string;
}

interface FeedItemProps {
  item: Item;
}

const FeedItem: React.FC<FeedItemProps> = ({ item }) => {
  return (
    <div className="feed-item">
      <h2 className="feed-item-title">{item.title}</h2>
      <p className="feed-item-body">{item.body}</p>
    </div>
  );
};


export default FeedItem;
