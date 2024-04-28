import { TextField } from "@mui/material";
import { useState } from "react";
import "./SearchBar.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";

export interface SearchBarProps {
  setSearchInput: (searchInput: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = () => {
    setSearchInput(event?.target.value);
    console.log("searchInput:", searchInput);
    fetchFilteredPosts();
  };

  function fetchFilteredPosts() {
    axios
      .get("http://localhost:3000/api/v1.0/posts/search", {
        params: {
          searchQuery: searchInput
        }
      })
      .then((res) => {
        const posts = res.data;
        console.log(posts);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="search-bar-container">
      <SearchIcon />
      <TextField
        sx={{ ml: 1, flex: 1, input: { color: "rgba(255, 255, 255, 0.7)" } }}
        placeholder="Search..."
        variant="standard"
        InputProps={{ disableUnderline: true }}
        onChange={handleSearchInput}
        value={searchInput}
      />
    </div>
  );
};
