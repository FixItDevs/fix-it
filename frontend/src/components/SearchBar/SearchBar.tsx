import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { usePostContext } from "../../context/usePostContext";

export interface SearchBarProps {
  onSearch: (searchInput: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchInput, setSearchInput] = useState("");
  const { fetchFilteredPosts } = usePostContext();

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e?.target.value);
    console.log("searchInput:", searchInput);
    searchInput.length >= 3 && fetchFilteredPosts(searchInput);
  };

  // function fetchFilteredPosts() {
  //   axios
  //     .get("http://localhost:3000/api/v1.0/posts/search", {
  //       params: {
  //         searchQuery: searchInput
  //       }
  //     })
  //     .then((res) => {
  //       const posts = res.data;
  //       console.log(posts);
  //     })
  //     .catch((error) => console.log(error));
  // }

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
