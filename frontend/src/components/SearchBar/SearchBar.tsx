import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
// import { useState } from "react";
import "./SearchBar.css";

export interface SearchBarProps {
  // setSearchQuery: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <div className="search-bar-container">
      <SearchIcon />
      <TextField
        sx={{ ml: 1, flex: 1, input: { color: "rgba(255, 255, 255, 0.7)" } }}
        placeholder="Search..."
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
};
