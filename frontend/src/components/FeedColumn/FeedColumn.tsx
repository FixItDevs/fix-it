import "./FeedColumn.css";
import PostItem from "../PostItem/PostItem";
import { useEffect } from "react";
import { PostObject } from "../../types/post.types";
import { usePostContext } from "../../context/usePostContext";

const FeedColumn = () => {
  const {feedPosts, getPosts} = usePostContext();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="feed-col-container">
      <h1 className="feed-title">FixIt news feed</h1>
      <div className="main-feed-container">
        {feedPosts &&
          feedPosts.map((post: PostObject) => (
            <div key={post.postId}>
              <PostItem
                postId={post.postId}
                postAuthor={post.postAuthor}
                postText={post.postText}
                tags={post.tags}
                comments={post.comments}
                images={post.images}
                videos={post.videos}
                votes={post.votes}
                createdAt={post.createdAt}
              />
              <div className="horizontal-divider feed-divider"></div>
            </div>
          ))}
      </div>
      <div className="footer-bit"></div>
    </div>
  );
};

export default FeedColumn;
