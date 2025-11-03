import Card from '@/components/Card';
import React from 'react'

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive and modern web applications using React, Next.js, and the latest technologies.",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Creating cross-platform mobile applications with React Native and Flutter for iOS and Android.",
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces with Figma and implementing them with Tailwind CSS.",
      icon: "🎨"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">My Services</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        I offer a range of professional services to help bring your ideas to life
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Services