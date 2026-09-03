import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-extrabold shadow-lg shadow-indigo-500/20">
            TF
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-2 font-medium text-slate-400">
            Sign in to continue to your TaskFlow workspace.
          </p>

        </div>

        {/* Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

          <form className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-bold text-slate-200"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 font-medium text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">

                <label
                  htmlFor="password"
                  className="block text-sm font-bold text-slate-200"
                >
                  Password
                </label>

                <Link
                  href="#"
                  className="text-sm font-semibold text-indigo-400 transition hover:text-indigo-300"
                >
                  Forgot password?
                </Link>

              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 font-medium text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Remember */}
            <div className="flex items-center gap-2">

              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-white/20 bg-slate-950 accent-indigo-600"
              />

              <label
                htmlFor="remember"
                className="text-sm font-medium text-slate-400"
              >
                Remember me
              </label>

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/30"
            >
              Sign in
            </button>

          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">

            <div className="h-px flex-1 bg-white/10" />

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Or
            </span>

            <div className="h-px flex-1 bg-white/10" />

          </div>

          {/* Google */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
          >
            <span className="text-lg font-bold">G</span>
            Continue with Google
          </button>

        </div>

        {/* Register */}
        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-bold text-indigo-400 transition hover:text-indigo-300"
          >
            Create an account
          </Link>
        </p>

      </div>

    </main>
  );
}