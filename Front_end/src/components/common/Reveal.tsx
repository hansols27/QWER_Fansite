import React from "react";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

export const AnimatedSection: React.FC = () => {
  const ref = useIntersectionAnimation({
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className="opacity-0 transition-opacity duration-1000 [&.animate]:opacity-100"
    >
      <h2 className="text-3xl font-bold">스크롤하면 보여요!</h2>
      <p className="text-lg">React + Vite + TypeScript + IntersectionObserver</p>
    </div>
  );
};
