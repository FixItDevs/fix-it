import React from "react";
import "./PostItem.css";
import { PostProps, Vote, Comment } from "../../types/post.types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { timeElapsedSince } from "../../utils/timeElapsed";
import CircleIcon from "@mui/icons-material/Circle";

const PostItem: React.FC<PostProps> = ({
  user,
  postText,
  tags,
  comments,
  // images,
  // videos,
  votes,
  createdAt
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

  const renderAvatarUsernameSection = (
    username: string,
    avatar: string | null,
    date: string
  ) => {
    return (
      <div className="post-avatar-username-section">
        {!avatar && <AccountCircleIcon />}
        <span className="post-username">{username || "user-name-here"}</span>
        <CircleIcon sx={{ width: "1rem", height: "0.2rem" }} />
        <span className="post-date">{timeElapsedSince(date)}</span>
      </div>
    );
  };

  return (
    <div className="post">
      {renderAvatarUsernameSection(user.username, user.avatar, createdAt)}
      <h2 className="post-title">{postText.title}</h2>
      <p className="post-description">{postText.description}</p>
      <p className="post-main-tags">{tags.mainTags}</p>
      <p className="post-sub-tag">{tags.subTag}</p>
      {/* <div>
        {images?.map((image, index) => (
          <div key={index}>
            <p>{image.url}</p>
            <p>{image.caption}</p>
          </div>
        ))}
      </div>
      <div>
        {videos?.map((video, index) => (
          <div key={index}>
            <p>{video.url}</p>
            <p>{video.caption}</p>
          </div>
        ))}
      </div> */}
      <div className="post-votes-and-comments-section">
        {renderVoteSection(votes || [])}
        {renderCommentSection(comments || [])}
      </div>
    </div>
  );
};

export default PostItem;
