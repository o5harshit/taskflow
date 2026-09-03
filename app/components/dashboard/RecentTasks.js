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

      <h2 className="mb-4 text-lg font-semibold">
        Recent Tasks
      </h2>

      <div className="overflow-hidden rounded-xl border bg-white">

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