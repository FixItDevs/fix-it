import { User } from "./user.types";

export interface Reply {
  user: string;
  _id: string;
  comment: string;
}

export interface Post {
  title: string;
  description: string;
}

export interface Comment {
  user: string;
  comment: string;
  replies: [Reply];
}

export interface Tags {
  mainTags: [string];
  subTag: [string];
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

export interface PostProps {
  postId: string;
  user: User;
  postText: Post;
  tags: Tags;
  comments?: [Comment];
  images?: [Image];
  videos?: [Video];
  votes?: [Vote];
}
