"use client"

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RegisterPage() {
  const router = useRouter();
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [confirmPassword,setconfirmpassword] = useState("");

   async function createUser(e) {
    e.preventDefault();

    if (!username || !password || !confirmPassword || !email) {
      console.error("The field is empty");
      return;
    }

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {

      const response = await axios.post("/api/register", {
        name: username,
        email,
        password,
      });

      console.log(response.data);

      if (response.status === 201) {
        router.push("/login");
      }

    } catch (error) {

      console.error(
        error.response?.data?.message || "Something went wrong"
      );

    }
  }
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6 py-12">

      <div className="w-full max-w-md">

        {/* Heading */}
        <div className="text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-extrabold shadow-lg shadow-indigo-500/20">
            TF
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight">
            Create your account
          </h1>

          <p className="mt-2 font-medium text-slate-400">
            Start managing your projects with TaskFlow.
          </p>

        </div>

        {/* Card */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-bold text-slate-200"
              >
                Full name
              </label>

              <input
                id="name"
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 font-medium text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

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
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 font-medium text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold text-slate-200"
              >
                Password
              </label>

              <input
                id="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 font-medium text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <p className="mt-2 text-xs font-medium text-slate-500">
                Use at least 8 characters.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-bold text-slate-200"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 font-medium text-white outline-none placeholder:text-slate-600 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">

              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 accent-indigo-600"
              />

              <label
                htmlFor="terms"
                className="text-sm font-medium leading-5 text-slate-400"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Privacy Policy
                </Link>
                .
              </label>

            </div>

            {/* Submit */}
            <button
              type="submit"
              onSubmit={createUser}
              className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/30"
            >
              Create account
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

        {/* Login */}
        <p className="mt-6 text-center text-sm font-medium text-slate-500">
          Already have an account?{" "}

          <Link
            href="/login"
            className="font-bold text-indigo-400 transition hover:text-indigo-300"
          >
            Sign in
          </Link>
        </p>

      </div>

    </main>
  );
}