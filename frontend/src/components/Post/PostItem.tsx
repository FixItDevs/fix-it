import React from "react";
import "./PostItem.css";

interface Post {
  title: string;
  body: string;
}

interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default PostItem;
