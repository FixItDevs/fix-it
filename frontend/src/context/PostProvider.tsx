import { createContext, useState } from "react";
import { PostObject } from "../types/post.types";
import axios from "axios";
import baseUrl from "../utils/baseUrl";

// NOTE: IN theory, we do not need stFeedPosts anymore except in this file but I am leaving as an export for future ease until we are sure.

interface PostContextType {
  feedPosts: PostObject[];
  getPosts: () => Promise<void>;
  fetchFilteredPosts: (searchInput: string) => Promise<void>;
}

export const PostContext = createContext<PostContextType>({
  feedPosts: [],
  getPosts: async () => { },
  fetchFilteredPosts: async () => { },
});

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [feedPosts, setFeedPosts] = useState<PostObject[]>([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1.0/posts`);
      if (response.status !== 200) {
        throw new Error("Error in network response");
      }
      const posts = response.data;
      setFeedPosts && setFeedPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const fetchFilteredPosts = async (searchInput: string) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1.0/posts/search`, {
        params: {
          searchQuery: searchInput,
        },
      });
      if (response.status !== 200) {
        throw new Error("Error in network response");
      }
      const posts = response.data;
      setFeedPosts && setFeedPosts(posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

    return (
      <PostContext.Provider value={{ feedPosts, getPosts, fetchFilteredPosts }}>
        {children}
      </PostContext.Provider>
    );
};