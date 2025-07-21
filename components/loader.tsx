import React, { useEffect, useRef, useState } from "react";

export default function Loader({ visible = true, onFinish }: { visible?: boolean; onFinish?: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // Start with a stable key for SSR, update after mount
  const [videoKey, setVideoKey] = useState("initial");

  useEffect(() => {
    // Only run on client
    setVideoKey("video-" + Date.now() + "-" + Math.random());
  }, []);

  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [visible, videoKey]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (!onFinish) return;
    const handleEnded = () => onFinish();
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black
        ${visible ? "opacity-100" : "opacity-0 transition-opacity duration-500 pointer-events-none"}
      `}
      role="status"
      aria-label="Loading"
      style={{ transition: visible ? "none" : undefined }}
    >
      <video
        key={videoKey}
        ref={videoRef}
        src="/0718.mp4"
        autoPlay
        muted
        className="w-full h-full object-cover"
      />
    </div>
  );
}