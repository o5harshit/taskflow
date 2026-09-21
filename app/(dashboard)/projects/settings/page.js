"use client";

import ThemeSwitcher from "../../../components/ui/ThemeSwitcher";


export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold">Settings</h1>

        <p className="mt-1 text-sm text-slate-400">
          Customize your TaskFlow experience.
        </p>

        <div className="mt-8 rounded-xl border border-white/10 bg-[#0d111d] p-6">
          <h2 className="text-lg font-semibold">
            Theme
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose your preferred accent color.
          </p>

          <div className="mt-5">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}