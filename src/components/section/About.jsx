import React from 'react';
import { FileCode, Monitor, Server, Database, Layers, Lightbulb, TrendingUp, BrainCircuit,  } from 'lucide-react';


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
                        I hold a Bachelor’s degree in Software Engineering from Jagora University, where I built strong foundations in programming and system thinking.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        To deepen my technical skills and gain international exposure, I continued my studies at KL University, known for its strong focus on engineering and technology.              
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        I am currently focusing on web systems, automation, and intelligent digital solutions, while exploring data-driven and cloud-oriented approaches as part of my long-term growth.
                        </p>
            
                        <div className="flex flex-wrap space-x-4">
                            <a href="#contact" className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-md transition-colors duration-300 mb-3">
                                Get In Touch
                            </a>
                            {/* <a href="#" className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-md transition-colors duration-300 mb-3">
                                Download CV
                            </a> */}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <Layers size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Full-Stack Development
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                Building complete web solutions from frontend interfaces to backend logic and APIs.
                                </p>
                            </div>
              
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <Lightbulb size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Solution-Driven Thinking
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                I focus on understanding problems first, then designing practical and effective digital solutions.
                                </p>
                            </div>
              
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <TrendingUp size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                Growth & Direction
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                Continuously improving my skills while moving toward data-driven and cloud-based systems.
                                </p>
                            </div>
              
                            <div className="rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border border-transparent hover:border-blue-600 transition duration-300 shadow-lg p-6">
                                <div className="text-blue-600 dark:text-blue-400 mb-4">
                                    <BrainCircuit size={48} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                AI-Assisted Workflow
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                AI helps me learn faster, think better, and solve problems more efficiently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
}

