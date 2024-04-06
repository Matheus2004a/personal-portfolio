import { useState } from "react";

export default function useChangeTheme() {
  const [iconTheme, setIconTheme] = useState<"sun" | "moon">("sun")

  function changeTheme() {
    setIconTheme(prevState => prevState === "sun" ? "moon" : "sun")
  }

  const iconChoosed = iconTheme === "sun" ? "/icon-sun.svg" : "/icon-moon.svg"

  return {
    iconChoosed,
    changeTheme
  }
}
