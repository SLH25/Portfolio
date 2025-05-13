import React from 'react';
// import {Code, Braces, Paintbrush2, Database, Palette, Globe, LayoutTemplate, Code2, FileCode2, Server, Settings2 } from "lucide-react";
// import { SiFigma, SiCanva, SiAdobeillustrator, SiSpline, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiBootstrap, SiPhp, SiPython, SiDjango, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb, SiGit, SiGithub, SiVercel, SiNetlify, SiWordpress, SiJson, SiTypescript, SiFramer, SiRedux, SiZustand, SiPrisma } from "react-icons/si";
// import { SiPline  } from "react-icons/si";

import { SiFigma,  SiWebflow, SiFireship, SiXampp, SiCanva, SiAdobeillustrator, SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact, SiNextdotjs, SiBootstrap, SiTypescript, SiPhp, SiPython, SiDjango, SiNodedotjs, SiMysql, SiPostgresql, SiMongodb, SiGit, SiGithub, SiVercel, SiNetlify, SiWordpress, SiJson, SiRedux,  } from "react-icons/si";

 const skillsData = [
    {
      title: "💻 Frontend",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "TypeScript", icon: SiTypescript },
      ],
    },
    {
      title: "🛠️ Backend",
      skills: [
        { name: "PHP", icon: SiPhp },
        { name: "Python", icon: SiPython },
        { name: "Django", icon: SiDjango },
        { name: "Node.js", icon: SiNodedotjs },
      ],
    },
    {
      title: "🚀 Tools & Deployment",
      skills: [
        { name: "Git", icon: SiGit },
        { name: "GitHub", icon: SiGithub },
        { name: "Vercel", icon: SiVercel },
        { name: "Netlify", icon: SiNetlify },
        { name: "InfiniyFree", icon: SiFireship},
        { name: "XAMPP", icon: SiXampp },
      ],
    },
    {
      title: "🗄️ Data base",
      skills: [
        { name: "MySQL", icon: SiMysql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
     {
      title: "🎨 Design & Prototyping",
      skills: [
        { name: "Figma", icon: SiFigma },
        { name: "Canva", icon: SiCanva },
        { name: "Illustrator", icon: SiAdobeillustrator },
        // { name: "Spline", icon: SiSpline },
      ],
    },
    {
      title: "🧠 Order",
      skills: [
        { name: "WordPress", icon: SiWordpress },
        { name: "API / JSON", icon: SiJson },
        { name: "Redux", icon: SiRedux },
        { name: "Webflow", icon:SiWebflow}
        // { name: "Zustand", icon: SiZustand },
      ],
    },
   
  ];

export default function Skills() {

    return (
        <section id='skills' className='py-24 bg-gradient-to-b from-blue-900 to-black'>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        MY SKILLS
                    </h2>
                    <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
                    <p className="text-white max-w-2xl mx-auto">
                        I have experience with a variety of technologies in web development. Here&apos;s a breakdown of my technical skillset.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category) => (
                       <div key={category.title}
                       className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6 group"
                        >
                            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition">
                                {category.title}
                            </h3>
                     
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         {category.skills.map((skill) => (
                           <div
                             key={skill.name}
                             className="flex items-center space-x-3 bg-gray-800/50 px-3 py-2 rounded-lg hover:bg-blue-900/50 transition-all duration-300"
                           >
                             <skill.icon className="text-blue-400 w-6 h-6 shrink-0" />
                             <span className="text-white text-sm font-medium">{skill.name}</span>
                           </div>
                         ))}
                       </div>
                     </div>
                    ))}
                </div>
            </div>
        </section>
    );
}



