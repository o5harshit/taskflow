
import { notFound } from "next/navigation";
import Link from "next/link";
import Project from "../../../../models/Project";
import { auth } from "../../../api/auth/[...nextauth]/route";
import { connectDB } from "../../../../lib/mongodb";
import ProjectActions from "../../../components/Projects/ProjectActions";

export async function generateMetadata({ params }) {
  const { projectId } = await params;

  await connectDB();


  const project = await Project.findById(projectId).lean();

  console.log(project.owner.toString());
  

  return {
    title: project
      ? `${project.name} | TaskFlow`
      : "Project | TaskFlow",
  };
}

export default async function ProjectPage({ params }) {
  const { projectId } = await params;

  const session = await auth();

  console.log("this is session",session.user.id);

  if (!session?.user?.id) {
    notFound();
  }

  await connectDB();

  const project = await Project.findOne({
    _id: projectId,
  }).lean();

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-md border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400">
                PROJECT
              </span>

              <span className="text-sm text-slate-500">
                #{project._id.toString().slice(-6)}
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {project.name}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              {project.description || "No description provided for this project."}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
           <ProjectActions
  projectId={projectId}
  isOwner={
    session?.user?.id === project?.owner?.toString()
  }
/>
          </div>
        </div>

        {/* Project Information */}
        <div className="grid gap-5 md:grid-cols-3">

          {/* Status */}
          <div className="rounded-xl border border-white/10 bg-[#0d111d] p-5 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Status
            </p>

            <div className="mt-3 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-400" />

              <span className="text-lg font-semibold text-white">
                {project.status}
              </span>
            </div>
          </div>

          {/* Priority */}
          <div className="rounded-xl border border-white/10 bg-[#0d111d] p-5 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Priority
            </p>

            <p className="mt-3 text-lg font-semibold text-white">
              {project.priority}
            </p>
          </div>

          {/* Project ID */}
          <div className="rounded-xl border border-white/10 bg-[#0d111d] p-5 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Project ID
            </p>

            <p className="mt-3 truncate text-sm font-medium text-slate-300">
              {project._id.toString()}
            </p>
          </div>

        </div>

        {/* Dates */}
        <div className="mt-5 rounded-xl border border-white/10 bg-[#0d111d] p-6 shadow-xl">

          <div className="mb-5">
            <h2 className="text-lg font-semibold">
              Project Timeline
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Track the planned duration of this project.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {/* Start Date */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Start Date
              </p>

              <p className="mt-2 text-base font-medium text-slate-200">
                {project.startDate
                  ? new Date(project.startDate).toLocaleDateString()
                  : "Not specified"}
              </p>
            </div>

            {/* Due Date */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Due Date
              </p>

              <p className="mt-2 text-base font-medium text-slate-200">
                {project.dueDate
                  ? new Date(project.dueDate).toLocaleDateString()
                  : "Not specified"}
              </p>
            </div>

          </div>

          {/* Progress bar placeholder */}
          <div className="mt-7">
            <div className="mb-2 flex justify-between text-xs">
              <span className="text-slate-500">
                Project progress
              </span>

              <span className="font-medium text-slate-300">
                0%
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-0 rounded-full bg-indigo-500" />
            </div>
          </div>

        </div>

        {/* Navigation */}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">

          <Link
            href={`/projects/${projectId}/overview`}
            className="group rounded-xl border border-white/10 bg-[#0d111d] p-5 transition hover:border-indigo-500/30 hover:bg-white/[0.03]"
          >
            <h3 className="font-semibold text-white">
              Overview
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              View project summary and progress.
            </p>

            <span className="mt-4 block text-sm text-indigo-400 group-hover:text-indigo-300">
              Open →
            </span>
          </Link>

          <Link
            href={`/projects/${projectId}/tasks`}
            className="group rounded-xl border border-white/10 bg-[#0d111d] p-5 transition hover:border-indigo-500/30 hover:bg-white/[0.03]"
          >
            <h3 className="font-semibold text-white">
              Tasks
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage tasks for this project.
            </p>

            <span className="mt-4 block text-sm text-indigo-400 group-hover:text-indigo-300">
              Open →
            </span>
          </Link>

          <Link
            href={`/projects/${projectId}/members`}
            className="group rounded-xl border border-white/10 bg-[#0d111d] p-5 transition hover:border-indigo-500/30 hover:bg-white/[0.03]"
          >
            <h3 className="font-semibold text-white">
              Members
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage project members.
            </p>

            <span className="mt-4 block text-sm text-indigo-400 group-hover:text-indigo-300">
              Open →
            </span>
          </Link>

        </div>

      </div>
    </main>
  );
}