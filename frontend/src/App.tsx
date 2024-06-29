import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import Navbar from "./components/Navbar/Navbar";
import { PostProvider } from "./context/PostProvider";
import { ScreenWidthProvider } from "./context/ScreenSizeContext";
import { useState } from "react";

function App() {
  const [isCategoryOverlayActive, setIsCategoryOverlayActive] = useState(false);

  return (
    <BrowserRouter>
      <PostProvider>
        <ScreenWidthProvider>
          <div id="app">
            <Navbar isCategoryOverlayActive={isCategoryOverlayActive} setIsCategoryOverlayActive={setIsCategoryOverlayActive} />
            {/* <div className="navbar-spacer"></div> */}
            <Routes>
              <Route path="/" element={<FeedPage isCategoryOverlayActive={isCategoryOverlayActive} />} />
            </Routes>
          </div>
        </ScreenWidthProvider>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
