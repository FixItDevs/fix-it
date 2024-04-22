import "./FeedColumn.css";
import { dummyFeedData } from "../../data/dummyFeedData";
import PostItem from "../Post/PostItem";
import { useEffect } from "react";
import { PostProps } from "../Post/PostItem";

interface FeedColumnProps {
  posts: PostProps
}

const FeedColumn: React.FC<FeedColumnProps>= ({ posts }) => {

  async function getPosts() {
    try {
      const response = await fetch('http://localhost:3000/api/v1.0/posts');
      if (!response.ok) {
        throw new Error('Error in network response');
      }
      
      const posts = await response.json();
      console.log(posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    getPosts();
  }, [posts])

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
