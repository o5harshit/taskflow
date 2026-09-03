import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">
      <div className="w-full max-w-xl text-center">

        {/* 404 */}
        <div className="mb-6">
          <h1 className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-8xl font-extrabold tracking-tight text-transparent sm:text-9xl">
            404
          </h1>
        </div>

        {/* Content */}
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Page not found
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base font-medium leading-7 text-slate-400">
          Sorry, we couldn't find the page you're looking for.
          It may have been moved, deleted, or the URL might be incorrect.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/30"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Small branding */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-lg font-bold text-slate-300 transition hover:text-white"
          >
            TaskFlow
          </Link>

          <p className="mt-1 text-sm text-slate-500">
            Manage your projects. Get work done.
          </p>
        </div>

      </div>
    </main>
  );
}