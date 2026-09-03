import TaskBoard from "../../../../components/Tasks/TaskBoard";
import { tasks } from "../../../../../lib/tasks";

export default async function ProjectTasksPage({
  params,
}) {
  const { projectId } = await params;

  const projectTasks = tasks.filter(
    (task) => task.projectId === projectId
  );

  return (
    <div className="p-6">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 text-white">
          Tasks
        </h1>

        <p className="mt-2 text-slate-500">
          Manage tasks for this project.
        </p>
      </div>

      <TaskBoard tasks={projectTasks} />

    </div>
  );
}