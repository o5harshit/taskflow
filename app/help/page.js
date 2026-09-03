import Link from "next/link";

export default function HelpPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">TaskFlow Help</h1>

      <p className="mt-3 text-white/50">
        Learn how to use TaskFlow.
      </p>

      <div className="mt-8 space-y-4">
        <Link
          href="/help/getting-started"
          className="block rounded-lg border p-5 hover:bg-slate-50 text-white hover:text-white"     
        >
          <h2 className="font-semibold">Getting Started</h2>
          <p className="mt-1 text-sm text-white/50">
            Learn the basics of TaskFlow.
          </p>
        </Link>

        <Link
          href="/help/projects"
          className="block rounded-lg border p-5 hover:bg-slate-50 text-white"
        >
          <h2 className="font-semibold">Projects</h2>
          <p className="mt-1 text-sm text-white/50">
            Learn how to manage projects.
          </p>
        </Link>
      </div>
    </main>
  );
}