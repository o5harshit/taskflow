import TaskCard from "./TaskCard";

export default function TaskColumn({
  title,
  tasks,
}) {
  return (
    <section className="min-w-[300px] flex-1">

      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-bold text-white">
          {title}
        </h2>

        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
          {tasks.length}
        </span>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>

    </section>
  );
}