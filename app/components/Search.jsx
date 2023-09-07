import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div>
      <SearchIcon />
      <input className="bg-transparent" type="text" placeholder="Search" />
    </div>
  );
}
