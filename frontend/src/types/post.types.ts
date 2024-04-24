import { User } from "./user.types";

export interface Reply {
  replyAuthor: Author;
  replyText: string;
}

export interface Post {
  title: string;
  body: string;
}

export interface Comment {
  commentAuthor: Author;
  commentText: string;
  replies: Reply[];
}

export interface Tags {
  mainTags: string[];
  subTag: string[];
}

export interface Image {
  url: string;
  caption: string;
}

export interface Video {
  url: string;
  caption: string;
}

export interface Vote {
  user: User;
  type: "upvote" | "downvote";
}

export interface Author {
  userId: string;
  username: string;
  avatar: string;
}

export interface PostProps {
  _id: string;
  postAuthor: Author;
  postText: Post;
  tags: Tags;
  images: Image[];
  videos: Video[];
  comments: Comment[];
  votes: Vote[];
}

