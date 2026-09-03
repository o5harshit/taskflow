import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">

      <div className="text-6xl font-bold text-gray-200">
        404
      </div>

      <h1 className="mt-4 text-2xl font-bold text-gray-900">
        Project not found
      </h1>

      <p className="mt-2 text-gray-500">
        The project you're looking for doesn't exist.
      </p>

      <Link
        href="/projects"
        className="mt-6 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white"
      >
        Back to Projects
      </Link>

    </div>
  );
}