"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    setError("");

    await signIn("google", {
      callbackUrl: "/",
    });
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050b1f] px-4">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* Sign In Card */}
      <div className="relative z-10 w-full max-w-md">

        <div className="rounded-2xl border border-white/10 bg-[#0b1228]/90 p-8 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">

          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-purple-600/30">
              T
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              Welcome back.
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Sign in to continue to{" "}
              <span className="font-medium text-violet-400">
                TaskFlow
              </span>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={googleLoading || loading}
            className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {/* Google Icon */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.23c0-.71-.06-1.4-.18-2.05H12v3.88h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.7 2.92-4.2 2.92-7.19Z"
              />
              <path
                fill="#34A853"
                d="M12 21.77c2.63 0 4.84-.87 6.45-2.35l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.29v2.5A9.74 9.74 0 0 0 12 21.77Z"
              />
              <path
                fill="#FBBC05"
                d="M6.54 13.89a5.85 5.85 0 0 1 0-3.74v-2.5H3.29a9.78 9.78 0 0 0 0 8.74l3.25-2.5 3.25-2.5Z"
              />
              <path
                fill="#EA4335"
                d="M12 6.12c1.43 0 2.71.49 3.72 1.46l2.79-2.79C16.83 3.23 14.63 2.32 12 2.32a9.74 9.74 0 0 0-8.71 5.33l3.25 2.5C7.31 7.84 9.46 6.12 12 6.12Z"
              />
            </svg>

            {googleLoading
              ? "Connecting..."
              : "Continue with Google"}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />

            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Or
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Form */}
          <form
            onSubmit={handleCredentialsLogin}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/70 focus:bg-white/[0.06] focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Sign In */}
            <button
              type="submit"
              disabled={loading || googleLoading}
              className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-all duration-200 hover:from-violet-500 hover:to-purple-500 hover:shadow-purple-600/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Signup */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/signup")}
              className="font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Create an account
            </button>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-center text-xs text-slate-600">
          Secure authentication powered by TaskFlow
        </p>
      </div>
    </main>
  );
}