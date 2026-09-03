export default function StatCard({
  title,
  value,
  description,
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 p-5 shadow-sm">

      <p className="text-sm font-medium text-white/50">
        {title}
      </p>

      <p className="mt-2 text-3xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-xs text-white/50">
        {description}
      </p>

    </div>
  );
}