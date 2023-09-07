"use client";
import React from "react";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else setTheme("dark");
  };

  return (
    <div
      data-theme={theme}
      id="theme"
      className="flex justify-between p-6 items-center shadow-md"
    >
      <div>
        <h5 className="font-bold text-sm">Where in the world?</h5>
      </div>
      <div className="flex gap-2 cursor-pointer" onClick={() => themeHandler()}>
        <NightlightOutlinedIcon className="w-5" />
        <h2 className="text-sm font-bold">Dark Mode</h2>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
