export default async function ProjectSettingsPage({
    params,
  }) {
    const { projectId } = await params;
  
    return (
      <div>
        <h1 className="text-2xl font-bold text-white">
          Project Settings
        </h1>
  
        <p className="mt-2 text-white/50">
          Settings for project {projectId}.
        </p>
      </div>
    );
  }