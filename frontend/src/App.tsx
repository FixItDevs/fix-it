import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import Navbar from "./components/Navbar/Navbar";
import { PostProvider } from "./context/PostProvider";

function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <div id="app">
          <Navbar />
          {/* <div className="navbar-spacer"></div> */}
          <Routes>
            <Route path="/" element={<FeedPage />} />
          </Routes>
        </div>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
