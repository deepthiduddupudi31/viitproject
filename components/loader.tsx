import React from "react";

export default function Loader({ visible = true }: { visible?: boolean }) {
  return (
    <div
      className={`
        fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black
        ${visible ? "opacity-100" : "opacity-0 transition-opacity duration-500 pointer-events-none"}
      `}
      role="status"
      aria-label="Loading"
      style={{ transition: visible ? "none" : undefined }} // No fade-in, only fade-out
    >
      <video
        key={visible ? "show" : "hide"}
        src="/0718.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/loader-poster.jpg" // Add a suitable poster image to public/
        className="w-full h-full object-cover"
        style={{ display: "block" }}
      />
    </div>
  );
}