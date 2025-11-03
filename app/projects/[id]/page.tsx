import { getProject } from "@/lib/profile-data";
import { notFound } from "next/navigation";
import Link from "next/link";


export default async function ProjectDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProject(id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">

                <Link
                    href="/projects"
                    className="text-gray-700 hover:text-gray-500  mb-8 inline-block"
                >
                    {'< '} Back to Projects
                </Link>
                <div className="bg-gray-800 rounded-lg shadow-xl p-8">
                    <div className="text-8xl mb-6 text-center">{project.image}</div>
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800 rounded-lg font-semibold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
