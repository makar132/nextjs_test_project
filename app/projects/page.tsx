import { projects } from "@/lib/profile-data";
import Link from "next/link";
import Card from "@/components/Card";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Here are some of the projects I&apos;ve worked on recently
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <div className="cursor-pointer">
              <Card
                title={project.title}
                description={project.description}
                icon={project.image}
                tags={project.technologies}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
