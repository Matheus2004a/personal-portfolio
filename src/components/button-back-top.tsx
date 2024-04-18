"use client"

import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ButtonBackTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        `fixed flex justify-center items-center rounded-full bottom-4 right-4 w-8 h-8 p-2 transition-transform duration-300 ease-in`,
        isVisible ? "translate-y-[0px]" : "translate-y-[100px]"
      )}
    >
      <ArrowUp size={18} />
    </Button>
  );
}
