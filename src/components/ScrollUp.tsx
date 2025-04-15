"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(!animate && window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  const scrollToTop = () => {
    const isBrowser = typeof window !== "undefined";
    if (!isBrowser) return;
    setAnimate(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${animate ? "animate-starship" : ""} fixed top-full right-6 z-50 flex items-center rounded-full border border-[#93C7EF] bg-[#CCE9F999] p-2 transition-transform duration-500 ${isVisible ? "-translate-y-[82px]" : "translate-y-0"}`}
      onClick={scrollToTop}
      onAnimationEnd={() => setAnimate(false)}
    >
      <Image
        src='/icons/spacecraft.svg'
        alt='To the Top!'
        width={40}
        height={40}
      />
    </button>
  );
}
