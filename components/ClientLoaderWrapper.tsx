"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Loader from "./loader";

export default function ClientLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true); // Loader visible on first load
  const [fadeOut, setFadeOut] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Detect hydration
  useEffect(() => {
    setHydrated(true);
  }, []);

  // On navigation, show loader for at least 2s, then fade out
  useEffect(() => {
    setLoading(true);
    setFadeOut(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000); // 500ms fade
    }, 2000); // 2s minimum loader time
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  // On initial mount, hide loader after hydration and 1.5s minimum
  useEffect(() => {
    if (hydrated && loading) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setLoading(false), 500);
      }, 1500); // 1.5s minimum loader time after hydration
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  return (
    <>
      {loading && <Loader visible={!fadeOut} />}
      {children}
    </>
  );
} 