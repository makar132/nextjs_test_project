export interface UserProfile {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  email: string;
  github: string;
  linkedin: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export async function getUserProfile(): Promise<UserProfile> {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    name: "Makar Samir Wangat",
    role: "Full Stack Developer",
    bio: "Passionate about building scalable web applications and creating amazing user experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    email: "makarsamer@gmail.com",
    github: "https://github.com/makar132",
    linkedin: "https://www.linkedin.com/in/makar-samir-7a32661a4/",
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "🛒",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates and team features",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "✅",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with forecasts and historical data visualization",
    technologies: ["Next.js", "Chart.js", "OpenWeather API"],
    image: "🌦️",
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
