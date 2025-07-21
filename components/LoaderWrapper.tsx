"use client";
import { useState, useEffect } from "react";
import Loader from "./loader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {showLoader && <Loader visible={true} />}
      {children}
    </>
  );
}
