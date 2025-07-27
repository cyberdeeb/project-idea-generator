export const Loading = () => {
  return (
    <div className="w-[800px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
      <div className="w-[40%] h-full bg-red-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
    </div>
  );
};
