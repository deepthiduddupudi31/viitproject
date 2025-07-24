// components/loader.tsx
import Header from "./header";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col">
      <Header />
      <div className="flex flex-1 items-center justify-center">
        <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}