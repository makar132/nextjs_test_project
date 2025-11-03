import React from 'react'

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
            MyPortfolio
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/weather" className="hover:text-blue-400 transition">
                Weather
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
