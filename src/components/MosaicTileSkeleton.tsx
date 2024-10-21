export const MosaicTileSkeleton = () => {
  return (
    <div className="border-2 m-2 border-blue-300 shadow-lg rounded-lg p-4 bg-white">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="flex justify-between items-center mb-2">
          <div className="h-10 w-32 bg-slate-300 rounded"></div>
          <div className="h-8 w-20 bg-red-500 rounded"></div>
        </div>

        <div className="h-6 bg-slate-300 rounded w-3/4"></div>
        <div className="h-5 bg-slate-300 rounded w-2/3"></div>
        <div className="h-5 bg-slate-300 rounded w-3/4"></div>
        <div className="h-5 bg-slate-300 rounded w-2/3"></div>
        <div className="h-5 bg-slate-300 rounded w-3/4"></div>
        <div className="h-5 bg-slate-300 rounded w-1/2"></div>
        <div className="h-5 bg-slate-300 rounded w-1/3"></div>
        <div className="h-5 bg-slate-300 rounded w-1/2"></div>
        <div className="h-5 bg-slate-300 rounded w-1/3"></div>
        <div className="h-5 bg-slate-300 rounded w-1/2"></div>
        <div className="h-5 bg-slate-300 rounded w-1/3"></div>
      </div>
    </div>
  );
};
