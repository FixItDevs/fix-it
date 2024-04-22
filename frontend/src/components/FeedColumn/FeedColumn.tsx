import "./FeedColumn.css";
import PostItem from "../Post/PostItem";
import { useEffect, useState } from "react";
import { PostProps } from "../../types/post.types";

interface FeedColumnProps {
  posts: PostProps;
}

const FeedColumn: React.FC<FeedColumnProps & PostProps> = ({ posts }) => {
  const [feedPosts, setFeedPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch("http://localhost:3000/api/v1.0/posts");
      if (!response.ok) {
        throw new Error("Error in network response");
      }

      const posts = await response.json();
      setFeedPosts(posts);
      console.log(feedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div className="feed-col-container">
      <h1 className="feed-title">I am a dummy title by the way</h1>

      <div className="main-feed-container">
        {feedPosts.map((post: PostProps) => (
          <div key={post.postId}>
              <PostItem
              postId={post.postId}
              user={post.user}
              postText={post.postText}
              tags={post.tags}
              comments={post.comments}
              images={post.images}
              videos={post.videos}
              votes={post.votes}
            />
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedColumn;
