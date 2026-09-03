export default function ProgressBar({ progress }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 transition-all"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}