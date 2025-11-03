import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-48 h-48 bg-linear-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-6xl">
              <Image src="/next.svg" alt="" width={100} height={100} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Full Stack Developer</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hi! I&apos;m a passionate full-stack developer with expertise in building modern web applications
                using Next.js, React, TypeScript, and Tailwind CSS. I love creating intuitive user experiences
                and writing clean, maintainable code.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                With several years of experience in web development, I&apos;ve worked on projects ranging from
                small business websites to large-scale enterprise applications. I&apos;m constantly learning and
                staying up-to-date with the latest technologies and best practices.
              </p>
              <div className="flex gap-4 mt-6">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  React
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  TypeScript
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About