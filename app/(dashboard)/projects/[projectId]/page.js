import Loading from "./loading";

const projects = [
  {
    id: "1",
    name: "E-commerce Website",
    description: "Build a modern e-commerce platform.",
  },
  {
    id: "2",
    name: "Mobile Application",
    description: "Build the TaskFlow mobile application.",
  },
  {
    id: "3",
    name: "Marketing Website",
    description: "Create the company marketing website.",
  },
];

export async function generateMetadata({ params }) {
    const { projectId } = await params;

     const project = projects.find(
    (project) => project.id === projectId
  );
    return{
     title: project
      ? `${project.name} | TaskFlow`
      : "Project | TaskFlow",
    }
}



export default async function ProjectPage({ params }) {
  const { projectId } = await params;

  const project = projects.find(
    (project) => project.id === projectId
  );

  if (!project) {
    return <Loading/>;
  }

  return (
    <main>
      <h1>{project.name}</h1>

      <p>{project.description}</p>

      <p>Project ID: {project.id}</p>
    </main>
  );
}