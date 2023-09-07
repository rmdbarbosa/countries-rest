import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div
      id="theme"
      className="flex m-6 shadow-md h-10 gap-6 rounded pl-6 sm:max-w-xl"
    >
      <div className="flex items-center">
        <SearchIcon />
      </div>
      <input
        className="bg-transparent text-sm outline-none"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}
