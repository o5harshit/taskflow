import Link from "next/link";
import ProjectCard from "../../components/Projects/ProjectCard";

const projects = [
  {
    id: "1",
    name: "E-commerce Website",
    description: "Build a modern online shopping platform.",
    progress: 75,
    status: "In Progress",
    tasks: 24,
    completedTasks: 18,
  },
  {
    id: "2",
    name: "Mobile Application",
    description: "Build the TaskFlow mobile application.",
    progress: 45,
    status: "In Progress",
    tasks: 32,
    completedTasks: 14,
  },
  {
    id: "3",
    name: "Marketing Website",
    description: "Create the company marketing website.",
    progress: 90,
    status: "Almost Done",
    tasks: 20,
    completedTasks: 18,
  },
  {
    id: "4",
    name: "Admin Dashboard",
    description: "Build the internal administration dashboard.",
    progress: 30,
    status: "In Progress",
    tasks: 40,
    completedTasks: 12,
  },
];


export default async function  ProjectsPage({searchParams }) {

  const params = await searchParams;

  console.log(params);

  const search = params.search || "";

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );
  
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
          className="rounded-lg bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 px-4 py-2.5 text-sm font-medium text-white transition hover:from-slate-900 hover:to-indigo-900"
        >
          + New Project
        </Link>

      </div>


      {/* Search + Filter */}

      <div className="flex flex-col gap-3 sm:flex-row">

        <input
          type="text"
          placeholder="Search projects..."
            className="w-full rounded-lg border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 px-4 py-2.5 text-sm outline-none focus:border-white/20 sm:max-w-md text-white"
        />

        <select className="rounded-lg border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 px-4 py-2.5 text-sm outline-none text-white hover:bg-gradient-to-r hover:from-slate-900 hover:to-indigo-900 focus:border-white/20  ">
          <option value="all" className="text-white">All Projects</option>
          <option value="progress" className="text-white bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 hover:bg-gradient-to-r hover:from-slate-900 hover:to-indigo-900">In Progress</option>
          <option value="completed" className="text-white bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 hover:bg-gradient-to-r hover:from-slate-900 hover:to-indigo-900">Completed</option>
        </select>

      </div>


      {/* Projects */}

      <div className="grid gap-5 md:grid-cols-2">

        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </div>
  );
}