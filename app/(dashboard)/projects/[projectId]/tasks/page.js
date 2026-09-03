export default async function ProjectTasksPage({
  params,
}) {
  const { projectId } = await params;

  return (
    <main>
      <h1>Project Tasks</h1>

      <p>
        Tasks for project {projectId}
      </p>
    </main>
  );
}