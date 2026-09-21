"use client";

import { useState } from "react";
import Link from "next/link";
import AddTaskModal from "./AddTaskModal";

export default function ProjectActions({
  projectId,
  isOwner,
}) {
  const [showTaskModal, setShowTaskModal] = useState(false);

  return (
    <>
      <div className="flex gap-3">

        {isOwner && (
          <button
            type="button"
            onClick={() => setShowTaskModal(true)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
          >
            Add Task
          </button>
        )}

        <Link
          href={`/projects/${projectId}/tasks`}
          className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
        >
          View Tasks
        </Link>

      </div>

      {showTaskModal && (
        <AddTaskModal
          projectId={projectId}
          onClose={() => setShowTaskModal(false)}
        />
      )}
    </>
  );
}