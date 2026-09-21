"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "⌂",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: "▣",
  },
  {
    name: "My Tasks",
    href: "/projects/tasks",
    icon: "✓",
  },
  {
    name: "Team",
    href: "/projects/members",
    icon: "♙",
  },
  {
    name: "Settings",
    href: "/projects/settings",
    icon: "⚙",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 border-r  bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-gray-300 md:block">
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold">TaskFlow</h1>
      </div>

      <nav className="space-y-3 p-4">
        {navigation.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3   rounded-lg
  bg-gradient-to-r
  from-slate-950
  to-indigo-950
  px-5 py-3
  text-white
  transition
  hover:from-slate-900
  hover:to-indigo-900 ${
    active ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
  }`}
            >
              <span>{item.icon}</span>

              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
