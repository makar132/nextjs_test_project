export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "learn-nextjs",
    title: "Learn Next.js",
    description: "A comprehensive guide to getting started with Next.js 16",
    content: "Next.js is a powerful React framework that enables you to build full-stack web applications. With features like Server Components, App Router, and built-in optimization, Next.js makes it easy to create fast, SEO-friendly applications. In this post, we'll explore the fundamentals of Next.js and how to get started building your first application.",
    date: "2025-11-01",
    author: "John Doe",
    image:"https://i.pravatar.cc/150?img=0"
  },
  {
    slug: "tailwind-tips",
    title: "Tailwind CSS Tips & Tricks",
    description: "Master Tailwind CSS with these pro tips",
    content: "Tailwind CSS is a utility-first CSS framework that has revolutionized the way we style web applications. Instead of writing custom CSS, you use pre-defined utility classes to build your designs. This approach leads to faster development, better consistency, and easier maintenance. In this post, I'll share my favorite Tailwind tips and tricks that will make you more productive.",
    date: "2025-10-28",
    author: "Jane Smith",
    image:"https://i.pravatar.cc/150?img=1"
  },
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    description: "Deep dive into the future of React",
    content: "React Server Components represent a fundamental shift in how we think about building React applications. They allow us to render components on the server, reducing the amount of JavaScript sent to the client and improving performance. With Next.js App Router, Server Components are the default, making it easier than ever to build fast, efficient applications. Let's explore how they work and when to use them.",
    date: "2025-10-25",
    author: "John Doe",
    image:"https://i.pravatar.cc/150?img=2"
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}
