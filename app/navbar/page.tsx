'use client'
import React from 'react'

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
export default function Navbar() {
  const { user, logout, isLoading } = useAuth();
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
              <Link href="/dashboard" className="hover:text-blue-400 transition">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-blue-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              {isLoading ? (
                <span className="text-gray-400">Loading...</span>
              ) : user?.name ? (
                <div className="flex items-center gap-3">
                  <span className="bg-blue-600 px-3 py-1 rounded text-white">
                    {user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="px-3 py-1 bg-red-600 rounded hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login" className="hover:text-blue-400 transition">
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
