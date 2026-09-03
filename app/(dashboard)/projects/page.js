import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "E-commerce Website",
    description: "Build a modern e-commerce platform.",
  },
  {
    id: 2,
    name: "Mobile Application",
    description: "Build the TaskFlow mobile application.",
  },
  {
    id: 3,
    name: "Marketing Website",
    description: "Create the company marketing website.",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>

      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>

          <p>{project.description}</p>

          <Link href={`/projects/${project.id}`}>
            View Project
          </Link>
        </div>
      ))}
    </main>
  );
}