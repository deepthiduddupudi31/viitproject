"use client";
import React, { useState, useEffect } from "react";
import Loader from "./loader";
import { usePathname } from "next/navigation";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, [pathname]); // <-- runs on every route change

  return (
    <>
      {loading && <Loader />}
      {children}
    </>
  );
}
