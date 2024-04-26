import React from "react";
import "./PostItem.css";
import { PostObject, Vote, Comment } from "../../types/post.types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { timeElapsedSince } from "../../utils/timeElapsed";
import CircleIcon from "@mui/icons-material/Circle";

const PostItem: React.FC<PostObject> = ({
  postAuthor,
  postText,
  tags,
  images,
  videos,
  comments,
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
        <ChatBubbleIcon sx={{ color: "white", height: "1.2rem" }} />
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
        {avatar ? (
          <img src={avatar} alt="avatar" className="user-avatar" />
        ) : (
          <AccountCircleIcon />
        )}
        <span className="post-username">{username || "user-name-here"}</span>
        <CircleIcon sx={{ width: "1rem", height: "0.2rem" }} />
        <span className="post-date">{timeElapsedSince(date)}</span>
      </div>
    );
  };

  return (
    <div className="post-container">
      {renderAvatarUsernameSection(
        postAuthor.username,
        postAuthor.avatar,
        createdAt
      )}
      <div className="post">
        <h2 className="post-title">{postText.title}</h2>
        <p className="post-description">{postText.body}</p>
        <br />
        <div className="user-and-avatar"></div>
        <br />
        <p className="post-main-tags">
          Tags: {tags.mainTags.join(", ")} and {tags.subTag.join(", ")}
        </p>
        <br />
        <div>
          {images?.map((image, index) => (
            <div key={index}>
              <img
                src={image.url}
                alt={image.caption}
                style={{ width: "300px" }}
              />
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
                src="https://www.youtube.com/watch?v=1SVv4RuGWYk"
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
    </div>
  );
};

export default PostItem;
