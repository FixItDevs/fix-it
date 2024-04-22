import React from "react";
import "./PostItem.css";
import { PostProps, Vote } from "../../types/post.types";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const PostItem: React.FC<PostProps> = ({
  user,
  postText,
  tags,
  comments,
  images,
  videos,
  votes
}) => {
  const renderVoteIcons = (votes: Vote[]) => {
    let upvoteCount = 0;
    let downvoteCount = 0;

    votes.forEach((vote) => {
      if (vote.type === "upvote") {
        upvoteCount++;
      } else if (vote.type === "downvote") {
        downvoteCount++;
      }
    });

    if (upvoteCount > downvoteCount) {
      return (
        <>
          <div>
            <ThumbUpOffAltIcon />
            <p>{upvoteCount}</p>
            <ThumbDownOffAltIcon />
          </div>
        </>
      );
    } else if (downvoteCount > upvoteCount) {
      return (
        <>
          <div>
            <ThumbUpOffAltIcon />
            <ThumbDownOffAltIcon />
            <p>{downvoteCount}</p>
          </div>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="post">
      <h2 className="post-title">{postText.title}</h2>
      <p className="post-description">{postText.description}</p>
      <p className="post-main-tags">{tags.mainTags}</p>
      <p className="post-sub-tag">{tags.subTag}</p>
      <p className="post-user">{user.username}</p>
      <div>
        {comments?.map((comment, index) => (
          <div key={index}>
            <p>{comment.comment}</p>
            <p>{comment.user}</p>
          </div>
        ))}
      </div>
      <div>
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
      </div>
      <div>{renderVoteIcons(votes || [])}</div>
    </div>
  );
};

export default PostItem;
