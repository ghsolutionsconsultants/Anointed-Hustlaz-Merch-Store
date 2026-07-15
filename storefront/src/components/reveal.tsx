"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  variant = "fade",
  delay = 0,
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  variant?: "fade" | "clip";
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "clip" ? "reveal-clip" : "reveal";
  return (
    <Tag
      ref={ref}
      className={`${base}${shown ? " in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
