import React from "react";
import "./PostItem.css";
import { PostProps, Vote, Comment, Reply } from "../../types/post.types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";



const PostItem: React.FC<PostProps> = ({
  // _id,
  postAuthor,
  postText,
  tags,
  images,
  videos,
  comments,
  votes,
}) => {

  const renderVoteSection = (votes: Vote[]) => {
    let upvoteCount = 0;
    let downvoteCount = 0;

    votes.forEach((vote) => {
      vote.type === "upvote" ? upvoteCount++ : downvoteCount++;
    });

    return (
      <div className="vote-encasing">
        <ArrowUpwardIcon sx={{ color: "white" }} />
        {upvoteCount > downvoteCount && (
          <span className="vote-count">{upvoteCount}</span>
        )}
        <ArrowDownwardIcon sx={{ color: "white" }} />
        {downvoteCount > upvoteCount && (
          <span className="vote-count">{downvoteCount}</span>
        )}
      </div>
    );
  };

  const renderCommentSection = (comments: Comment[]) => {
    return (
      <div className="comment-encasing">
        <ChatBubbleIcon sx={{ color: "white" }} />
        <span className="comment-count">{comments.length}</span>
      </div>
    );
  };

  return (
    <div className="post">
      <h2 className="post-title">{postText.title}</h2>
      <p className="post-description">{postText.body}</p>
      <br />
      <div className="user-and-avatar">
        <p className="post-user">By {postAuthor.username}</p>
        <img src={postAuthor.avatar} alt="avatar" className="user-avatar" />
      </div>
      <br />
      <p className="post-main-tags">Tags: {tags.mainTags.join(', ')} and {tags.subTag.join(', ')}</p>
      {/* <p className="post-sub-tag">{tags.subTag}</p> */}
      <br />
      <div>
        {comments?.length > 0 && <h4>Comments:</h4>}
        {comments?.map((comment, index) => (
          <div key={index}>
            <div className="user-and-avatar">
            <p>{comment.commentText} - {comment.commentAuthor.username}</p>
              <img src={comment.commentAuthor.avatar} alt="avatar" className="user-avatar" />
            </div>
            {comment.replies?.map((reply, index) => (
              <div key={index}>
                <div className="user-and-avatar">
                  <p> --- {reply.replyText} - {reply.replyAuthor.username}</p>
                  <img src={reply.replyAuthor.avatar} alt="avatar" className="user-avatar" />
          </div>
          </div>
            ))}
            <br />
          </div>
        ))}
      </div>
      <div>
        {images?.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.caption} style={{ width: '300px' }} />
          </div>
        ))}
      </div>
      <br />
      <div>
        {videos?.map((video, index) => (
          <div key={index}>
            <p>This video does not work for some reason.</p>
          <iframe
            width="300"
            height="200"
            src='https://www.youtube.com/watch?v=1SVv4RuGWYk'
            title={video.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
          <p>{video.caption}</p>
        </div>
        ))}
      </div>
        <br />
      <div className="post-votes-and-comments-section">
        {renderVoteSection(votes || [])}
        {renderCommentSection(comments || [])}
      </div>
    </div>
  );
};

export default PostItem;
