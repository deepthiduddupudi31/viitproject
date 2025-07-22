
"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

// Define the type for LocomotiveScroll instance
interface LocomotiveScroll {
  scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number; easing?: number[] }) => void;
  destroy: () => void;
  _anchorHandler?: (e: Event) => void;
}

export default function LocomotiveScrollWrapper({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locoScroll: LocomotiveScroll | null = null;
    let isMounted = true;

    if (typeof window !== "undefined") {
      Promise.all([
        import("locomotive-scroll"),
        import("locomotive-scroll/dist/locomotive-scroll.css"),
      ])
        .then(([LocomotiveScrollModule]) => {
          if (!isMounted || !scrollRef.current) return;

          locoScroll = new LocomotiveScrollModule.default({
            el: scrollRef.current,
            smooth: true,
            lerp: 0.02,
            multiplier: 1.4,
            class: "is-reveal",
            smartphone: { smooth: true },
            tablet: { smooth: true },
          });

          const anchorHandler = (e: Event) => {
            const anchor = e.target as HTMLAnchorElement;
            if (anchor.tagName === "A" && anchor.hash) {
              const target = document.querySelector(anchor.hash);
              if (target instanceof HTMLElement) {
                e.preventDefault();
                locoScroll?.scrollTo(target, { offset: -80, duration: 1200, easing: [0.25, 0.0, 0.35, 1.0] });
              }
            }
          };

          document.addEventListener("click", anchorHandler);
          if (locoScroll) {
            locoScroll._anchorHandler = anchorHandler;
          }
        })
        .catch((error) => {
          console.error("Failed to initialize LocomotiveScroll:", error);
        });
    }

    return () => {
      isMounted = false;
      if (locoScroll) {
        if (locoScroll._anchorHandler) {
          document.removeEventListener("click", locoScroll._anchorHandler);
        }
        locoScroll.destroy();
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
