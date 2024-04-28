import "./FeedColumn.css";
import PostItem from "../PostItem/PostItem";
import { useEffect, useState } from "react";
import { PostObject } from "../../types/post.types";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const FeedColumn = () => {
  const [feedPosts, setFeedPosts] = useState<PostObject[]>([]);
  const [hasMore, setHasMore] = useState(true);

  async function getPosts() {
    axios
      .get('http://localhost:3000/api/v1.0/posts', {
        params: {
          _limit: 5
        }
      })
      .then((res) => {
        const posts = res.data;
        console.log('getPosts:', posts)
        setFeedPosts(posts);
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    getPosts();
  }, []);

  const fetchMorePostData = () => {
    axios
      .get(`http://localhost:3000/api/v1.0/posts`, {
        params: {
          offset: feedPosts.length,
          _limit: 5
        }
      })
      .then((res) => {
        if (res.data.length > 0) {
          setFeedPosts((prevPosts) => [...prevPosts, ...res.data]);
          console.log('fetchMorePosts:', feedPosts)
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
