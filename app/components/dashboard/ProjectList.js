import Link from "next/link";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    name: "E-commerce Website",
    description: "Build the online store.",
    progress: 75,
  },
  {
    id: "2",
    name: "Mobile Application",
    description: "Build the TaskFlow mobile application.",
    progress: 45,
  },
  {
    id: "3",
    name: "Marketing Website",
    description: "Build the company marketing website.",
    progress: 90,
  },
];

export default function ProjectList() {
  return (
    <section>

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-lg font-semibold text-white">
          Recent Projects
        </h2>

        <Link
          href="/projects"
          className="text-sm font-medium text-white/50 hover:underline"
        >
          View all →
        </Link>

      </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}