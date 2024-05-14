import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import Navbar from "./components/Navbar/Navbar";
import { PostProvider } from "./context/PostProvider";
import { ScreenWidthProvider } from "./context/ScreenSizeContext";

function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <ScreenWidthProvider>
          <div id="app">
            <Navbar />
            {/* <div className="navbar-spacer"></div> */}
            <Routes>
              <Route path="/" element={<FeedPage />} />
            </Routes>
          </div>
        </ScreenWidthProvider>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
