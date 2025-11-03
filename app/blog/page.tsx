import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import Card from "@/components/Card";

export const metadata = {
  title: "Blog - Portfolio",
  description: "Read my latest blog posts about web development and technology",
  openGraph: {
    title: "Blog - Portfolio",
    description: "Read my latest blog posts about web development and technology",
    url: "http://192.168.1.5:3000/blog",
  },
};
export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">Blog</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Thoughts, tutorials, and insights about web development
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <Card
              title={post.title}
              description={post.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
