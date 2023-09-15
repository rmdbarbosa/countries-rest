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
      <select id="theme" onChange={handleSelect} aria-label="country-filter">
        <option value="filter" disabled hidden label="country-filter-default">
          Filter by Region
        </option>
        <option value="" label="Filter By Region">
          Filter by Region
        </option>
        <option value="africa" label="Africa">
          Africa
        </option>
        <option value="america" label="America">
          America
        </option>
        <option value="asia" label="Asia">
          Asia
        </option>
        <option value="europe" label="Europe">
          Europe
        </option>
        <option value="oceania" label="Oceania">
          Oceania
        </option>
      </select>
    </div>
  );
}
