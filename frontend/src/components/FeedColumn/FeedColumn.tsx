import "./FeedColumn.css";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import { PostObject } from "../../types/post.types";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const FeedColumn = () => {
  const [feedPosts, setFeedPosts] = useState<PostObject[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  async function getPosts() {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1.0/posts?offset=${index * 5}&limit=5`
      );
      if (response.status !== 200) {
        throw new Error("Error in network response");
      }
      const posts = response.data;
      setFeedPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  const fetchMorePostData = () => {
    axios
      .get(`http://localhost:3000/api/v1.0/posts?offset=${index * 5}&limit=5`)
      .then((res) => {
        if (res.data.length > 0) {
          setFeedPosts((prevPosts) => [...prevPosts, ...res.data]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setHasMore(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="feed-col-container">
      <h1 className="feed-title">I am a dummy title by the way</h1>

      <div className="main-feed-container">
        <InfiniteScroll
          dataLength={feedPosts.length}
          next={fetchMorePostData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {feedPosts.map((post: PostObject) => (
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
        </InfiniteScroll>
      </div>
      <div className="footer-bit"></div>
    </div>
  );
};

export default FeedColumn;
