/// <reference types="vite-plugin-svgr/client" />

import React from "react";
import "./PostItem.css";
import { PostObject, Vote, Comment, Image } from "../../types/post.types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { timeElapsedSince } from "../../utils/timeElapsed";
import CircleIcon from "@mui/icons-material/Circle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DefaultAvatar from "../../assets/default-avatar.svg";
import useScreenWidth from "../../hooks/useScreenWidth";
import { abbreviateText } from "../../utils/postHelpers";

const PostItem: React.FC<PostObject> = ({
  postAuthor,
  postText,
  tags,
  images,
  // videos,
  comments,
  votes,
  createdAt
}) => {
  const {isSmallScreen} = useScreenWidth();
  console.log(isSmallScreen);

  const abbreviatedText = abbreviateText(postText.body, 40);

  const renderVoteSection = (votes: Vote[]) => {
    let upvoteCount = 0;
    let downvoteCount = 0;

    votes.forEach((vote) => {
      vote.type === "upvote" ? upvoteCount++ : downvoteCount++;
    });
    return (
      <div className="icon-encasing vote-encasing">
        <ArrowUpwardIcon sx={{ color: "white" }} />
        {upvoteCount >= downvoteCount && (
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
      <div className="icon-encasing comment-encasing">
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
          <img src={avatar} alt="avatar" className="post-user-avatar" />
        ) : (
          <div>
            <DefaultAvatar />
          </div>
        )}
        <span className="post-username">{username || "user-name-here"}</span>
        <CircleIcon sx={{ width: "1rem", height: "0.2rem" }} />
        <span className="post-date">{timeElapsedSince(date)}</span>
      </div>
    );
  };

  const renderImageSection = (images: Image[]) => {
    return (
      <div className="image-container">
        {images.length === 1 ? (
          <img src={images[0].url} alt={images[0].caption} className="image" />
        ) : (
          <div className="multi-image-container">
            <img
              src={images[0].url}
              alt={images[0].caption}
              className="image"
            />
            <div className="image-counter-overlay">{images.length}</div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="post-container">
      {!isSmallScreen ? (
        <>
          <div className="post-details">
            {renderAvatarUsernameSection(
              postAuthor.username,
              postAuthor.avatar,
              createdAt
            )}

            <h2 className="post-title">{postText.title}</h2>
            <p className="post-description">{abbreviatedText}</p>
            <br />

            <div className="post-tag-comment-vote-container">
              <div className="post-votes-and-comments-section">
                {renderVoteSection(votes || [])}
                {renderCommentSection(comments || [])}
              </div>

              <div className="post-tag-encasing">
                <LocalOfferIcon />
                <div className="post-tag-text">
                  {tags.mainTags.map((mainTag, index) => (
                    <span key={index} className="main-tag">
                      {mainTag}{" "}
                    </span>
                  ))}
                  {tags.subTag.map((subTag, index) => (
                    <span key={index} className="sub-tag">
                      {subTag}{" "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="post-images">{renderImageSection(images)}</div>
        </>
      ) : (
        <>
          <div className="post-header">
            {renderAvatarUsernameSection(
              postAuthor.username,
              postAuthor.avatar,
              createdAt
            )}

            <h2 className="post-title">{postText.title}</h2>
            <p className="post-description">{abbreviatedText}</p>
            <br />
          </div>
          <div className="post-images">{renderImageSection(images)}</div>
          <div className="post-tag-comment-vote-container">
            <div className="post-votes-and-comments-section">
              {renderVoteSection(votes || [])}
              {renderCommentSection(comments || [])}
            </div>

            <div className="post-tag-encasing">
              <LocalOfferIcon />
              <div className="post-tag-text">
                {tags.mainTags.map((mainTag, index) => (
                  <span key={index} className="main-tag">
                    {mainTag}{" "}
                  </span>
                ))}
                {tags.subTag.map((subTag, index) => (
                  <span key={index} className="sub-tag">
                    {subTag}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PostItem;
