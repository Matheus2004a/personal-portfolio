"use client"

import { useEffect, useState } from "react";

export default function useWindow() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    (function handleResize() {
      setIsDesktop(window.innerWidth >= 768);

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    })();
  }, []);

  return isDesktop
}
