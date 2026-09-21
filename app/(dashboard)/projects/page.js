"use client";

import Link from "next/link";
import ProjectCard from "../../components/Projects/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch projects
  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get("/api/projects/fetch");

        console.log(response);

        setProjects(response.data.project);
        setFilteredProjects(response.data.project);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProjects();
  }, []);

  // Filter projects whenever search changes
  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProjects(filtered);
  }, [search, projects]);

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Projects
          </h1>

          <p className="mt-1 text-sm text-white/50">
            Manage and track all your projects.
          </p>
        </div>

        <Link
  href="/projects/new"
  className="
    rounded-lg
    px-4 py-2.5
    text-sm font-medium
    text-white
    transition
    hover:opacity-90
  "
  style={{
    backgroundColor: "var(--primary)",
  }}
>
  + New Project
</Link>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-3 sm:flex-row">

        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 px-4 py-2.5 text-sm text-white outline-none focus:border-white/20 sm:max-w-md"
        />

        <select className="rounded-lg border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 px-4 py-2.5 text-sm text-white outline-none">
          <option value="all">All Projects</option>
          <option value="progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

      </div>

      {/* Projects */}
      <div className="grid gap-5 md:grid-cols-2">

        {filteredProjects?.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
          />
        ))}

      </div>

    </div>
  );
}