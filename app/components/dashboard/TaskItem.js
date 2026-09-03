export default function TaskItem({ task }) {
  return (
    <div className="flex items-center justify-between border-b px-4 py-4 last:border-b-0">

      <div className="flex items-center gap-3">

        <div
          className={`flex h-5 w-5 items-center justify-center rounded border text-xs ${
            task.completed
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-300"
          }`}
        >
          {task.completed && "✓"}
        </div>

        <span
          className={
            task.completed
              ? "text-sm text-gray-400 line-through"
              : "text-sm text-gray-700"
          }
        >
          {task.title}
        </span>

      </div>

      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          task.priority === "High"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-gray-600"
        }`}
      >
        {task.priority}
      </span>

    </div>
  );
}