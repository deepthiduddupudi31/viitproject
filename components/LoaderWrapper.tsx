// components/LoaderWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";
import VideoLoader from "./VideoLoader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pathname === "/") {
      // Let video duration control loading
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // adjust to match your video duration in ms

      return () => clearTimeout(timer);
    } else {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000); // standard page loader timeout

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  if (loading) {
    return pathname === "/" ? <VideoLoader/> : <Loader />;
  }

  return <>{children}</>;
}
