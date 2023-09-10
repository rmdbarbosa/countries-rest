"use client";

import React, { startTransition } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Search() {
  let pathname = usePathname();
  let { replace } = useRouter();

  let [isPending, startTransition] = useTransition();

  let handleSearch = (term) => {
    let params = new URLSearchParams(window.location.search);
    if (term) {
      params.set("search", term.toLowerCase());
    } else {
      params.delete("search");
    }
    params.delete("page");

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  };

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
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
