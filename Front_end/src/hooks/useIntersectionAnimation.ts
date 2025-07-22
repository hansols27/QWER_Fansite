import { useEffect, useRef } from "react";

interface UseIntersectionAnimationProps {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export const useIntersectionAnimation = ({
  rootMargin = "0px",
  threshold = 0.1,
  triggerOnce = true,
}: UseIntersectionAnimationProps = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("animate");
          if (triggerOnce) observer.unobserve(node);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce]);

  return ref;
};
