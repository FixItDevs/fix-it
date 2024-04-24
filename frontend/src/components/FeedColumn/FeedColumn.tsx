import "./FeedColumn.css";
import PostItem from "../Post/PostItem";
import { useEffect, useState } from "react";
import { PostProps } from "../../types/post.types";
import axios from "axios";

const FeedColumn = () => {
  const [feedPosts, setFeedPosts] = useState<PostProps[]>([]);

  async function getPosts() {
    try {
      const response = await axios.get("http://localhost:3000/api/v1.0/posts");
      if (response.status !== 200) {
        throw new Error("Error in network response");
      }

      const posts = response.data;
      console.log(posts)
      console.log(posts[0]._id)
      setFeedPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed-col-container">
      <h1 className="feed-title">I am a dummy title by the way</h1>

      <div className="main-feed-container">
        {feedPosts.map((post: PostProps) => (
          <div key={post._id}>
            {post._id}
            {/* <PostItem
              postId={post.postId}
              user={post.user}
              postText={post.postText}
              tags={post.tags}
              comments={post.comments}
              images={post.images}
              videos={post.videos}
              votes={post.votes}
            /> */}
            <div className="feed-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedColumn;
