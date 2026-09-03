import Link from "next/link";
import ProgressBar from "../ui/ProgressBar";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="block rounded-xl border bg-white p-5 transition hover:shadow-md"
    >

      <div className="flex items-start justify-between">

        <div>
          <h3 className="font-semibold text-gray-900">
            {project.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {project.description}
          </p>
        </div>

        <span className="text-sm font-semibold">
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