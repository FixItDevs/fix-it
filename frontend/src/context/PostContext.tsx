import { createContext } from "react";
import { PostObject } from "../types/post.types";

type PostContextType = {
  feedPosts: PostObject[];
  setFeedPosts: React.Dispatch<React.SetStateAction<PostObject[]>>;
} | null;

const PostContext = createContext<PostContextType>(null);

export default PostContext;
