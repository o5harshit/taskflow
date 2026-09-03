export default function ProgressBar({ progress }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full bg-gray-900 transition-all"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}