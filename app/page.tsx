import { getUserProfile } from "@/lib/profile-data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const profile = await getUserProfile();
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-48 h-48 mx-auto mb-6 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl">
            <Image src="/next.svg" alt="" width={100} height={100} />
          </div>
          <h1 className="text-5xl font-bold mb-4">{profile.name}</h1>
          <p className="text-2xl text-gray-600 mb-6">{profile.role}</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {profile.bio}
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/projects" key={"projects"}>
              <button className="bg-gray-700 text-gray-100 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition cursor-pointer">
                View Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-gray-100 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition cursor-pointer">
                Contact Me
              </button>
            </Link>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <span className="text-2xl">📧</span>
            <span>Email</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <span className="text-2xl">💻</span>
            <span>GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <span className="text-2xl">💼</span>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Profile data loaded using Server-Side Rendering (SSR)</p>
        </div>
      </div>
    </div>
  );
}
