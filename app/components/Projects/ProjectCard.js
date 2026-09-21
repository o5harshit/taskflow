import Link from "next/link";
import ProgressBar from "../ui/ProgressBar";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project._id}`}
      className="group block rounded-xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
    >

      {/* Top */}

      <div className="flex items-start justify-between gap-4">

        <div>
          <h2 className="font-semibold text-white group-hover:text-blue-600">
            {project.name}  
          </h2>

          <p className="mt-1 text-sm leading-6 text-white/50">
            {project.description}
          </p>
        </div>

        <span className="whitespace-nowrap rounded-full bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 px-3 py-1 text-xs font-medium text-white">
          {project.status}
        </span>

      </div>


      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-xs">

          <span className="text-white/50">
            Progress
          </span>

          <span className="font-semibold text-white">
            {project.progress}%
          </span>

        </div>

        <ProgressBar progress={project.progress} />

      </div>


      {/* Bottom */}

      <div className="mt-6 flex items-center justify-between border-t pt-4">

        <div className="text-sm text-white/50">
          <span className="font-medium text-white">
            {project.completedTasks}
          </span>{" "}
          / {project.tasks} tasks completed
        </div>

        <span className="text-sm font-medium text-white/50 transition group-hover:translate-x-1">
          →
        </span>

      </div>

    </Link>
  );
}