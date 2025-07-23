"use client";
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
}
