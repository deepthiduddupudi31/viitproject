"use client";

import React, { useEffect, useRef } from "react";

interface VideoLoaderProps {
  onVideoEnd: () => void;
}

const VideoLoader: React.FC<VideoLoaderProps> = ({ onVideoEnd }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((e) => console.error("Video play failed:", e));
    }
  }, []);

  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-black" role="status" aria-label="Loading">
      <video
        ref={videoRef}
        src="/0718.mp4"
        autoPlay
        muted
        onEnded={onVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default VideoLoader;
