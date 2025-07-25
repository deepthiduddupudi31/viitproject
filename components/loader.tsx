<<<<<<< HEAD
// components/loader.tsx
import Header from "./header";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
=======
import React from "react";

export default function Loader({ visible = true, onFinish }: { visible?: boolean; onFinish?: () => void }) {
  React.useEffect(() => {
    if (!visible && onFinish) onFinish();
  }, [visible, onFinish]);

  if (!visible) return null;

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
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
>>>>>>> ac280e33f23497fb7e8dcf863a41d493a2fd3460
    </div>
  );
}