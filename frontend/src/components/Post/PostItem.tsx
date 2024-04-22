import React from "react";
import "./PostItem.css";
import { PostProps } from "../../types/post.types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const PostItem: React.FC<PostProps> = ({
  user,
  postText,
  tags,
  comments,
  images,
  videos,
  votes
}) => {
  const renderVoteIcon = (voteType: string) => {
    return voteType === "upvote" ? <ThumbUpIcon /> : <ThumbDownIcon />;
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
      <div>
        {votes?.map((vote, index) => (
          <div key={index}>{renderVoteIcon(vote.type)}</div>
        ))}
      </div>
    </div>
  );
};

export default PostItem;
