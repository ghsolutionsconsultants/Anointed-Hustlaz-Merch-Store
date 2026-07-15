"use client";

import { useEffect, useRef, useState } from "react";

export function MaskText({
  children,
  as: Tag = "span",
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
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
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`mask${shown ? " in" : ""} ${className}`.trim()}>
      <span
        className="mask-inner"
        style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      >
        {children}
      </span>
    </Tag>
  );
}
