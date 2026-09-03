export default async function MembersPage({
  params,
}) {
  const { projectId } = await params;

  return (
    <main>
      <h1>Project Members</h1>

      <p>
        Members of project {projectId}
      </p>
    </main>
  );
}