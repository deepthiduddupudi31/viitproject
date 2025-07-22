"use client";
<<<<<<< HEAD
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "./loader";

function isFullReload() {
  if (typeof window === "undefined") return false;
  // For modern browsers
  if (window.performance && window.performance.getEntriesByType) {
    const navEntries = window.performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
      const nav = navEntries[0] as PerformanceNavigationTiming;
      if (nav.type === "reload") {
        return true;
      }
    }
  }
  // Fallback for older browsers
  if (window.performance && window.performance.navigation) {
    return window.performance.navigation.type === 1;
  }
  return false;
}

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(() => isFullReload());
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setShowLoader(true);
    // Hide loader after video ends (handled by onFinish)
    // Fallback: hide loader after 12s if something goes wrong
    let timeout: NodeJS.Timeout | null = null;
    if (showLoader) {
      timeout = setTimeout(() => setShowLoader(false), 12000);
    }
    // Next.js router events (for client-side navigation)
    // router.events is not available in app directory, so use router.on directly if available
    // For next/navigation, listen to popstate
    window.addEventListener("popstate", handleStart);
    return () => {
      window.removeEventListener("popstate", handleStart);
      if (timeout) clearTimeout(timeout);
    };
  }, [showLoader]);

  // Listen for push/replace navigation (client-side)
  useEffect(() => {
    const origPush = router.push;
    const origReplace = router.replace;
    router.push = (...args: any[]) => {
      setShowLoader(true);
      // @ts-ignore
      return origPush.apply(router, args);
  };
    router.replace = (...args: any[]) => {
      setShowLoader(true);
      // @ts-ignore
      return origReplace.apply(router, args);
    };
    return () => {
      router.push = origPush;
      router.replace = origReplace;
    };
  }, [router]);

    return (
    <>
      <Loader visible={showLoader} onFinish={() => setShowLoader(false)} />
      <div style={{ display: showLoader ? "none" : undefined }}>{children}</div>
    </>
  );
=======
import React, { useState, useRef } from "react";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnd = () => {
    setLoading(false);
  };

  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 w-screen h-screen"
        role="status"
        aria-label="Loading"
      >
        <video
          ref={videoRef}
          src="/0718.mp4"
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return <>{children}</>;
>>>>>>> 64e2da18118fcbfa5f9045783253d47e7e36146f
}
