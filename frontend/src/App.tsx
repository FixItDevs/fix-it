import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import Navbar from "./components/Navbar/Navbar";
import PostContext from "./context/PostContext";
import { useState } from "react";
import { PostObject } from "./types/post.types";
import { ScreenWidthProvider } from "./context/ScreenSizeContext";

function App() {
  const [feedPosts, setFeedPosts] = useState<PostObject[]>([]);

  return (
    <BrowserRouter>
      <ScreenWidthProvider>
        <PostContext.Provider value={{ feedPosts, setFeedPosts }}>
          <div id="app">
            <Navbar />
            {/* <div className="navbar-spacer"></div> */}
            <Routes>
              <Route path="/" element={<FeedPage />} />
            </Routes>
          </div>
        </PostContext.Provider>
      </ScreenWidthProvider>
    </BrowserRouter>
  );
}

export default App;
