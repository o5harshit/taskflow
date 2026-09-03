import {members} from "../../../../../lib/members"

export default async function MembersPage({ params }) {
  const { projectId } = await params;

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Members of ProjectId - {projectId}
          </h1>

          <p className="mt-2 font-medium text-slate-500">
            Manage the people working on this project.
          </p>
        </div>

        <button
          className="rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 font-bold text-white shadow-md transition hover:from-indigo-500 hover:to-violet-500"
        >
          + Add Member
        </button>

      </div>

      {/* Team Stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">

        <Stat
          label="Total Members"
          value={members.length}
        />

        <Stat
          label="Active Members"
          value="4"
        />

        <Stat
          label="Total Tasks"
          value="23"
        />

      </div>

      {/* Members */}
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">

        <div className="border-b border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Project Team
          </h2>

          <p className="mt-1 text-sm font-medium text-slate-500">
            Everyone currently assigned to this project.
          </p>
        </div>

        <div className="divide-y divide-slate-100">

          {members.map((member) => (
            <MemberCard
              key={member.id}
              member={member}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

function MemberCard({ member }) {
  return (
    <div className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center">

      {/* Avatar */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 font-bold text-white">
        {member.name
          .split(" ")
          .map((name) => name[0])
          .join("")
          .slice(0, 2)}
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">

        <h3 className="font-bold text-slate-900">
          {member.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-slate-500">
          {member.email}
        </p>

      </div>

      {/* Role */}
      <div>
        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600">
          {member.role}
        </span>
      </div>

      {/* Tasks */}
      <div className="min-w-24">
        <p className="text-xs font-semibold text-slate-400">
          Assigned Tasks
        </p>

        <p className="mt-1 font-bold text-slate-900">
          {member.tasks}
        </p>
      </div>

      {/* Menu */}
      <button className="rounded-lg px-3 py-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
        ⋮
      </button>

    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">

      <p className="text-sm font-semibold text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-extrabold text-slate-900">
        {value}
      </p>

    </div>
  );
}