'use client';

import React from "react";

const Loader: React.FC = () => {
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
    </div>
  );
};

export default Loader;
