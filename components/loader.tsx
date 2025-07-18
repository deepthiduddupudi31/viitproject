// components/loader.tsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-white bg-opacity-90">
      <video
        src="/0718.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:brightness-110"
        style={{ pointerEvents: "auto" }} // allow hover
      />
      {/* Optional: Overlay for extra effect */}
      <div className="absolute inset-0 bg-black bg-opacity-20 pointer-events-none" />
    </div>
  );
}
