export default function Loading() {
  return (
    <div className="w-full max-w-xl h-3 bg-gray-800 rounded overflow-hidden mx-auto mt-8 animate-pulse">
      <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
    </div>
  );
}
