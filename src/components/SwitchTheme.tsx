"use client"

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

export function SwitchTheme() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <button
        className={cn(
          "relative flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors duration-300 p-1.5",
          "dark:hover:bg-gray-800 dark:active:bg-gray-900"
        )}
        onClick={() => setTheme('light')}
      >
        <SunIcon className='w-7 h-7' />
      </button>
    );
  } else {
    return (
      <button
        className={cn(
          "relative flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 active:bg-gray-300 rounded-lg transition-colors duration-300 p-1.5",
          "dark:hover:bg-gray-800 dark:active:bg-gray-900"
        )}
        onClick={() => setTheme('dark')}
      >
        <MoonIcon className='w-7 h-7' />
      </button>
    );
  }
};
