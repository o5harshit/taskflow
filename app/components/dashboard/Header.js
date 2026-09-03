"use client";

import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="flex h-16 items-center justify-between px-6 border-b border-white bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950">

      <div className="w-full max-w-md">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <div className="ml-6 flex items-center gap-4">

        <button className="rounded-lg p-2 hover:bg-gray-100">
          🔔
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-900 text-sm font-medium text-white">
          H
        </div>

      </div>

    </header>
  );
}