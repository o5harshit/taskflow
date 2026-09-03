import Link from "next/link";

export default async function ProjectLayout({
  children,
  params,
}) {
  const { projectId } = await params;

  return (
    <div>

      <nav className="mb-8 flex gap-6 border-b">

        <Link
          href={`/projects/${projectId}`}
          className="pb-3 text-sm font-medium text-white/50 hover:text-white"
        >
          Overview
        </Link>

        <Link
          href={`/projects/${projectId}/tasks`}
          className="pb-3 text-sm font-medium text-white/50 hover:text-white"
        >
          Tasks
        </Link>

        <Link
          href={`/projects/${projectId}/members`}
          className="pb-3 text-sm font-medium text-white/50 hover:text-white"  
        >
          Members
        </Link>

        <Link
          href={`/projects/${projectId}/settings`}
          className="pb-3 text-sm font-medium text-white/50 hover:text-white"
        >
          Settings
        </Link>

      </nav>

      {children}

    </div>
  );
}