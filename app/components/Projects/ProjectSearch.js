"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProjectSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(event) {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.push(`/projects?${params.toString()}`);
  }

  return (
    <input
      type="text"
      placeholder="Search projects..."
      onChange={handleSearch}
      className="rounded-lg border px-4 py-2"
    />
  );
}