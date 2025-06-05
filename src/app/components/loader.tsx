// components/Loader.tsx
export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen py-20">
      <div className="w-12 h-12 border-4 border-yellow-400 border-dashed rounded-full animate-spin" />
    </div>
  );
}
