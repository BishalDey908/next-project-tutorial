export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f7fb]">
      <div className="flex flex-col items-center gap-3">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        <p className="text-gray-600 text-sm">Loading gender data...</p>
      </div>
    </div>
  );
}
