import React from 'react';
import { Globe, Monitor, Zap, Brain, BookOpen, Rocket, Settings, Code2 } from 'lucide-react';

const capabilitiesData = [
  {
    id: 1,
    title: "Professional Websites",
    description: "Custom-built, responsive websites that represent your brand effectively. From portfolios to business sites, I create modern and user-friendly web experiences.",
    icon: Globe,
    features: ["Responsive Design", "SEO Optimized", "Fast Performance"]
  },
  {
    id: 2,
    title: "Web Applications",
    description: "Full-featured web applications built with modern technologies. From frontend interfaces to backend APIs, I build scalable and maintainable solutions.",
    icon: Monitor,
    features: ["Full-Stack Development", "API Integration", "Database Management"]
  },
  {
    id: 3,
    title: "Task Automation & Tools",
    description: "Automation solutions and custom tools that streamline workflows and save time. I create scripts and applications that handle repetitive tasks efficiently.",
    icon: Zap,
    features: ["Process Automation", "Custom Scripts", "Workflow Optimization"]
  },
  {
    id: 4,
    title: "Smart Problem Solving",
    description: "I focus on understanding problems deeply before building solutions. Every project starts with analyzing requirements and designing the most effective approach.",
    icon: Brain,
    features: ["Solution Architecture", "Problem Analysis", "Efficient Design"]
  },
  {
    id: 5,
    title: "Learning & Continuous Improvement",
    description: "Technology evolves rapidly, and so do I. I continuously learn new tools, frameworks, and best practices to deliver cutting-edge solutions.",
    icon: BookOpen,
    features: ["Stay Updated", "Best Practices", "Innovation"]
  },
  {
    id: 6,
    title: "Custom Software Solutions",
    description: "Tailored software solutions designed specifically for your needs. Whether it's a unique business requirement or a specialized tool, I build it from the ground up.",
    icon: Code2,
    features: ["Custom Development", "Scalable Architecture", "Maintainable Code"]
  },
  {
    id: 7,
    title: "API Development & Integration",
    description: "Build robust APIs and integrate third-party services seamlessly. I create efficient backend systems that power modern applications.",
    icon: Settings,
    features: ["RESTful APIs", "Third-Party Integration", "Data Processing"]
  },
  {
    id: 8,
    title: "Rapid Prototyping",
    description: "Quickly transform ideas into working prototypes. I help validate concepts and iterate fast to bring your vision to life.",
    icon: Rocket,
    features: ["Fast Iteration", "MVP Development", "Concept Validation"]
  }
];

export default function Capabilities() {
  return (
    <section id='projects' className="py-24 bg-gradient-to-b from-black to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Can Do
          </h2>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            I offer a range of digital solutions focused on solving real-world problems 
            and delivering practical, scalable results.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((capability) => {
            const IconComponent = capability.icon;
            return (
              <div
                key={capability.id}
                className="group relative bg-gradient-to-br from-black via-gray-900 to-black border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-600 transition-all duration-500 hover:scale-105"
              >
                {/* Icon Header */}
                <div className="relative h-32 bg-gradient-to-br from-blue-900/20 to-black/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="relative z-10">
                      <div className="p-4 bg-blue-600/20 rounded-full group-hover:bg-blue-600/30 transition-all duration-300">
                        <IconComponent className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5"></div>
                </div>

                {/* Capability Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {capability.description}
                  </p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {capability.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 text-xs rounded-md border border-blue-800/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            Have a project in mind or want to discuss how I can help?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 font-medium"
          >
            Let's Work Together
            <Rocket className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
