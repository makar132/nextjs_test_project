import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-9xl mb-8">🔍</div>
        <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you&apos;re looking for seems to have wandered off into the digital void.
        </p>
        <Link href="/">
          <button className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg">
            Take Me Home
          </button>
        </Link>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog">
            <div className="p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition cursor-pointer">
              <div className="text-3xl mb-2">📝</div>
              <p className="font-semibold">Visit Blog</p>
            </div>
          </Link>
          <Link href="/services">
            <div className="p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition cursor-pointer">
              <div className="text-3xl mb-2">🌐</div>
              <p className="font-semibold">Our Services</p>
            </div>
          </Link>
          <Link href="/contact">
            <div className="p-4 bg-gray-600 rounded-lg hover:bg-gray-500 transition cursor-pointer">
              <div className="text-3xl mb-2">✉️</div>
              <p className="font-semibold">Contact Us</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
