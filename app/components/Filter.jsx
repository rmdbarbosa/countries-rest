"use client";

import React, { startTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Filter() {
  let pathname = usePathname();
  let { replace } = useRouter();

  let [isPending, startTransition] = useTransition();

  function handleSelect(e) {
    let params = new URLSearchParams(window.location.search);
    if (e) {
      params.set("search", e.target.value);
    } else {
      params.delete("search");
    }
    params.delete("page");

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div
      className="flex m-6 shadow-md h-10 gap-6 rounded pl-6 w-1/2 sm:w-fit pr-6"
      id="theme"
    >
      <select id="theme" onChange={handleSelect}>
        <option value="filter" disabled hidden>
          Filter by Region
        </option>
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
