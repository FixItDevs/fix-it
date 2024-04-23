import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import Navbar from "./components/Navbar/Navbar";
import { themeOptions } from "./theme";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeOptions}>
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
