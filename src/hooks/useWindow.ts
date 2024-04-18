"use client"

import { useEffect, useState } from "react";

export default function useWindow() {
  const [width, setWidth] = useState(window.innerWidth || innerWidth)

  function handleResize() {
    setWidth(window.innerWidth || innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return width
}
