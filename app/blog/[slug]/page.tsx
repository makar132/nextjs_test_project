import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return {
            title: "Post not found | My Blog",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: post.title,
        desciption: post.description,
        openGraph: {
            title: post.title,
            desciption: post.description,
            type: "article",
            publishedTime: post.date,
            author: post.author,
            images: [
                {
                    url: post.image,
                    width: 200,
                    height: 200,
                    alt: post.title,
                },
            ],
        },

    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                <Link
                    href="/blog"
                    className="text-gray-700 hover:text-gray-500  mb-8 inline-block"
                >
                    {'< '} Back to Blog
                </Link>
                <article className="bg-gray-700 rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold mb-4 text-gray-100">{post.title}</h1>
                              <div className="w-80 h-48 mx-auto mb-6 bg-linear-to-br from-blue-400 to-purple-500  flex items-center justify-center text-white text-6xl">
                                <Image src={post.image} alt="" width={200} height={200} />
                              </div>
                    <div className="flex gap-4 text-gray-200 mb-8 pb-8 border-b">
                        <span>By {post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="prose max-w-none">
                        <p className="text-lg leading-relaxed text-gray-300">
                            {post.content}
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
