import React from 'react';
import { FileCode, Monitor, Server, Database, } from 'lucide-react';


export default function About(){



    return(
        <section id='about' className="py-24 bg-gradient-to-b from-black to-blue-900 ">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        About Me
                    </h2>
                    <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
                </div>

                <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            Hello! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">SALIHOU</span>, a passionate junior full-stack developer with a love for creating seamless, user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through clean code and thoughtful design.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                            My journey into programming began with curiosity about how websites work, which evolved into a deep passion for development. I'm constantly learning and staying up-to-date with the latest technologies to ensure I deliver modern, efficient solutions.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
                        </p>
            
                        <div className="flex flex-wrap space-x-4">
                            <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 mb-3">
                                Get In Touch
                            </a>
                            <a href="#" className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-md transition-colors duration-300 mb-3">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <Monitor size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    Frontend
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Creating beautiful, responsive UI/UX with React, Tailwind CSS, and modern JavaScript.
                                </p>
                            </div>
              
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <Server size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    Backend
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Building robust APIs and server logic with Node.js, Express, and REST principles.
                                </p>
                            </div>
              
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <Database size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    Database
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Designing efficient data structures with MongoDB, PostgreSQL, and Firebase.
                                </p>
                            </div>
              
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <FileCode size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    Desing Annimation
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Desing a efficient structures of logo, affiche, template, mokup and annimation with IA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

