import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
