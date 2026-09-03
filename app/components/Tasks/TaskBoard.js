import TaskColumn from "./TaskColumn";

export default function TaskBoard({ tasks }) {
  const todoTasks = tasks.filter(
    (task) => task.status === "todo"
  );

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  );

  const doneTasks = tasks.filter(
    (task) => task.status === "done"
  );

  return (
    <div className="flex gap-6 overflow-x-auto pb-6">

      <TaskColumn
        title="To Do"
        tasks={todoTasks}
      />

      <TaskColumn
        title="In Progress"
        tasks={inProgressTasks}
      />

      <TaskColumn
        title="Done"
        tasks={doneTasks}
      />

    </div>
  );
}