"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();

    if (pauseOnHover && scrollerRef.current) {
      const scroller = scrollerRef.current;

      const handleTouchStart = () => {
        scroller.style.animationPlayState = "paused";
      };
      const handleTouchEnd = () => {
        scroller.style.animationPlayState = "running";
      };

      scroller.addEventListener("touchstart", handleTouchStart);
      scroller.addEventListener("touchend", handleTouchEnd);
      scroller.addEventListener("touchcancel", handleTouchEnd);

      return () => {
        scroller.removeEventListener("touchstart", handleTouchStart);
        scroller.removeEventListener("touchend", handleTouchEnd);
        scroller.removeEventListener("touchcancel", handleTouchEnd);
      };
    }
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    if (!containerRef.current) return;
    const durations = { fast: "20s", normal: "40s", slow: "80s" };
    containerRef.current.style.setProperty(
      "--animation-duration",
      durations[speed] || "40s"
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_1%,white_99%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-3 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            key={item.name}
            className="relative w-[350px] max-w-full shrink-0 rounded-sm bg-white shadow-sm border border-b-0 border-zinc-200 px-8 py-6 md:w-[450px]"
          >
            <blockquote>
              <span className="relative z-20 text-sm font-medium text-stone-700">
                {item.text}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col">
                  <span className="text-sm font-bold text-stone-700">
                    {item.name}
                  </span>
                  <span className="text-sm font-semibold text-stone-700">
                    {item.position}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
