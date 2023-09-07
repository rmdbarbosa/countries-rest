import React from "react";

export default function Filter() {
  return (
    <div
      className="flex m-6 shadow-md h-10 gap-6 rounded pl-6 w-1/2 sm:w-fit pr-6"
      id="theme"
    >
      <select id="theme">
        <option selected disabled hidden>
          Filter by Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}
