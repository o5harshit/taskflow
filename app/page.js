import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 lg:px-8 lg:pb-32 lg:pt-32">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300">
              ✨ Simplify your team's workflow
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Manage projects.
              <span className="block bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
                Get work done.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-400">
              TaskFlow helps teams organize projects, manage tasks,
              collaborate with members, and keep everything moving
              in one place.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/dashboard"
                className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-indigo-500/20 transition hover:from-indigo-500 hover:to-violet-500"
              >
                Go to Dashboard →
              </Link>

              <Link
                href="/projects"
                className="rounded-lg border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10"
              >
                View Projects
              </Link>

            </div>

          </div>

          {/* Dashboard Preview */}
          <div className="mx-auto mt-20 max-w-6xl">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-indigo-950/40 backdrop-blur">

              <div className="rounded-xl border border-white/10 bg-slate-900 p-6">

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="h-5 w-32 rounded bg-white/10" />
                    <div className="mt-2 h-3 w-48 rounded bg-white/5" />
                  </div>

                  <div className="h-9 w-28 rounded-lg bg-indigo-600/70" />
                </div>

                <div className="grid gap-4 md:grid-cols-3">

                  <PreviewCard title="To Do" count="8" />
                  <PreviewCard title="In Progress" count="4" />
                  <PreviewCard title="Completed" count="16" />

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 bg-slate-950/40 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Everything your team needs
            </h2>

            <p className="mt-4 font-medium text-slate-400">
              Keep your projects organized from start to finish.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <Feature
              icon="📋"
              title="Task Management"
              description="Create, organize, prioritize, and track tasks with a powerful Kanban workflow."
            />

            <Feature
              icon="👥"
              title="Team Collaboration"
              description="Keep your team members aligned and see who is working on what."
            />

            <Feature
              icon="📊"
              title="Project Insights"
              description="Get a clear overview of project progress and upcoming work."
            />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to organize your work?
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-medium text-slate-400">
            Start managing your projects with TaskFlow today.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-flex rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 font-bold transition hover:from-indigo-500 hover:to-violet-500"
          >
            Get Started →
          </Link>

        </div>
      </section>

    </main>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/[0.07]">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium leading-6 text-slate-400">
        {description}
      </p>

    </div>
  );
}

function PreviewCard({ title, count }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4">

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-300">
          {title}
        </span>

        <span className="font-bold text-indigo-400">
          {count}
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="h-12 rounded-lg bg-white/5" />
        <div className="h-12 rounded-lg bg-white/5" />
      </div>

    </div>
  );
}