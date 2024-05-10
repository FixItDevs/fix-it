import "./FeedColumn.css";
import PostItem from "../PostItem/PostItem";
import { useEffect, useContext } from "react";
import { PostObject } from "../../types/post.types";
import axios from "axios";
import baseUrl from "../../utils/baseUrl";
import PostContext from "../../context/PostContext";

const FeedColumn = () => {
  const contextValue = useContext(PostContext);

  const feedPosts = contextValue?.feedPosts;
  const setFeedPosts = contextValue?.setFeedPosts;

  async function getPosts() {
    try {
      const response = await axios.get(`${baseUrl}/api/v1.0/posts`);
      if (response.status !== 200) {
        throw new Error("Error in network response");
      }
      const posts = response.data;
      setFeedPosts && setFeedPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed-col-container">
      <h1 className="feed-title">FixIt news feed</h1>
      <div className="main-feed-container">
        {feedPosts && feedPosts.map((post: PostObject) => (
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
