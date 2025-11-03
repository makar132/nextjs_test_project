import React from 'react'
import Form from 'next/form'

function Contact() {
   return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Get In Touch</h1>
        <p className="text-center text-gray-600 mb-12">
          Have a project in mind? Let&apos;s work together!
        </p>
        <Form className="bg-gray-800 rounded-lg shadow-lg p-8" action="/home">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-300 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Project inquiry"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-linear-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Contact