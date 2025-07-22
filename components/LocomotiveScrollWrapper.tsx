"use client";
import { useEffect, useRef } from "react";

export default function LocomotiveScrollWrapper({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let locoScroll: any;
    let anchorHandler: any;
    let isMounted = true;
    if (typeof window !== "undefined") {
      Promise.all([
        import("locomotive-scroll"),
        import("locomotive-scroll/dist/locomotive-scroll.css")
      ]).then(([LocomotiveScrollModule]) => {
        if (!isMounted) return;
        locoScroll = new LocomotiveScrollModule.default({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.02, // Lower value for more smoothness
          multiplier: 1.4, // Higher value for more inertia
          class: 'is-reveal',
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });
        // Anchor link smooth scroll
        anchorHandler = (e: any) => {
          if (
            e.target.tagName === 'A' &&
            e.target.hash &&
            document.querySelector(e.target.hash)
          ) {
            const target = document.querySelector(e.target.hash);
            if (target) {
              e.preventDefault();
              locoScroll.scrollTo(target, { offset: -80, duration: 1200, easing: [0.25, 0.0, 0.35, 1.0] });
            }
          }
        };
        document.addEventListener('click', anchorHandler);
        (locoScroll as any)._anchorHandler = anchorHandler;
      });
    }
    return () => {
      isMounted = false;
      if (locoScroll) locoScroll.destroy();
      if (typeof window !== "undefined" && locoScroll && (locoScroll as any)._anchorHandler) {
        document.removeEventListener('click', (locoScroll as any)._anchorHandler);
      }
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container style={{ minHeight: '100vh' }}>
      {children}
    </div>
  );
} 