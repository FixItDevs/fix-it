import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="app"> */}

      <Navbar />
      <div className="navbar-spacer"></div>
      <Routes>
        <Route path="/" element={<FeedPage />} />
      </Routes>
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
