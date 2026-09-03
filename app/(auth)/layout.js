import Link from "next/link";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

      {/* Top Bar */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-extrabold text-slate-950">
              TF
            </div>

            <span className="text-xl font-extrabold tracking-tight">
              TaskFlow
            </span>
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-slate-400 transition hover:text-white"
          >
            Back to home
          </Link>

        </div>
      </header>

      {/* Auth Content */}
      <main>
        {children}
      </main>

    </div>
  );
}