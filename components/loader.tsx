import React from "react";

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-50 w-screen h-screen"
      role="status"
      aria-label="Loading"
    >
      <video
        src="/0718.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      {/* Optional: Overlay for dimming or branding */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="w-32 h-32" />
      </div> */}
    </div>
  );
}