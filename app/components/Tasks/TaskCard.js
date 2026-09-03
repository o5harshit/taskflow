export default function TaskCard({ task }) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md">
  
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900">
            {task.title}
          </h3>
  
          <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
            {task.priority}
          </span>
        </div>
  
        <p className="mt-2 text-sm text-slate-500">
          {task.description}
        </p>
  
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">
            {task.assignee}
          </span>
  
          <span className="text-xs font-medium capitalize text-indigo-600">
            {task.status}
          </span>
        </div>
  
      </div>
    );
  }