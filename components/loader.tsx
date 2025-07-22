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
    </div>
  );
}