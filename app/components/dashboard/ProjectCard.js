import Link from "next/link";
import ProgressBar from "../ui/ProgressBar";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block rounded-xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 p-5 transition hover:shadow-md"
    >

      <div className="flex items-start justify-between">

        <div>
          <h3 className="font-semibold text-white">
            {project.name}
          </h3>

          <p className="mt-1 text-sm text-white/50">
            {project.description}
          </p>
        </div>

        <span className="text-sm font-semibold text-white">
          {project.progress}%
        </span>

      </div>

      <div className="mt-5">
        <ProgressBar
          progress={project.progress}
        />
      </div>

    </Link>
  );
}