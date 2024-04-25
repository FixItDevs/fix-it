import { User } from "./user.types";

export interface Reply {
  replyAuthor: Author;
  replyText: string;
}

export interface PostText {
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

export interface DbPostObject {
  _id: string;
  postAuthor: Author;
  postText: PostText;
  tags: Tags;
  images: Image[];
  videos: Video[];
  comments: Comment[];
  votes: Vote[];
}

export interface PostObject {
  postId: string;
  postAuthor: Author;
  postText: PostText;
  tags: Tags;
  images: Image[];
  videos: Video[];
  comments: Comment[];
  votes: Vote[];
}
