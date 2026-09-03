import TaskItem from "./TaskItem";

const tasks = [
  {
    id: 1,
    title: "Design landing page",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Create authentication",
    priority: "Done",
    completed: true,
  },
  {
    id: 3,
    title: "Setup database",
    priority: "Medium",
    completed: false,
  },
];

export default function RecentTasks() {
  return (
    <section>

      <h2 className="mb-4 text-lg font-semibold text-white">
        Recent Tasks
      </h2>

      <div className="overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950">

        {tasks.map((task) => (  
          <TaskItem
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </section>
  );
}