"use client";

import { useTheme } from "../../../app/providers/ThemeProviders";

export default function ThemeSwitcher() {
  const { theme, changeTheme } = useTheme();

  const themes = [
    { name: "indigo", color: "bg-indigo-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "green", color: "bg-green-500" },
    { name: "purple", color: "bg-purple-500" },
    { name: "red", color: "bg-red-500" },
  ];

  return (
    <div className="flex gap-3">
      {themes.map((item) => (
        <button
          key={item.name}
          onClick={() => changeTheme(item.name)}
          className={`
            h-8 w-8 rounded-full
            ${item.color}
            transition-all duration-200
            cursor-pointer
            ${
              theme === item.name
                ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110"
                : "hover:scale-105"
            }
          `}
          aria-label={`Select ${item.name} theme`}
        />
      ))}
    </div>
  );
}