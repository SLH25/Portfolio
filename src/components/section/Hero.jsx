import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownCircle, ArrowDown, Briefcase, MessageSquare } from 'lucide-react';

export default function Hero(){

const roles=["Software Engineering Student", "Digital Solutions Builder","Technology Problem Solver"]
const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
const [displayedRole, setDisplayedRole] = useState("");
const [isDeleting, setIsDeleting] = useState(false);
const [typingSpeed, setTypingSpeed] = useState(150);

useEffect(() => {
  const handleTyping = () => {
    const fullRole = roles[currentRoleIndex];
    if (isDeleting) {
      setDisplayedRole(fullRole.substring(0, displayedRole.length - 1));
      setTypingSpeed(75);
    } else {
      setDisplayedRole(fullRole.substring(0, displayedRole.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && displayedRole === fullRole) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }
  };

  const timer = setTimeout(handleTyping, typingSpeed);
  return () => clearTimeout(timer);
}, [displayedRole, isDeleting, currentRoleIndex, typingSpeed]);


return(
        <section id='home' className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden hero-animated-bg z-10">
            <div className=' py-6 '>
                <div className="container mx-auto px-6 text-center relative z-20">
                    <div className="max-w-3xl mx-auto">
                        <p className="text-blue-300 dark:text-blue-400 text-xl md:text-2xl font-medium tracking-wider mb-4 animate-fade-in-up">
                            Hello, I'm
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-fade-in-up animation-delay-200">
                            SALIHOU OUMAROU
                        </h1>
                        <div className="animate-fade-in-up animation-delay-400 min-h-[3rem] sm:min-h-[4rem]">
                          <p className="text-2xl sm:text-3xl text-white md:text-4xl font-semibold text-foreground">
                            - <span className="text-blue-600 font-bold">{displayedRole}</span>
                            <span className="inline-block animate-blink">|</span>
                          </p>
                        </div>

                        <p className="text-gray-200 dark:text-gray-300 text-lg md:text-xl mb-12 animate-fade-in-up animation-delay-600">
                          I build smart digital solutions focused on real-world problems.
                            <br />
                          From web platforms and automation tools to custom software, I focus on building practical and scalable solutions.
                        </p>
                    
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up animation-delay-800">
            <a href="#projects"
              className="px-8 flex py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 transform hover:scale-105 font-medium"
            >
              <Briefcase className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              View My Work
            </a>
            <a href="#contact" 
              className="flex px-8 py-3 bg-transparent border-2 border-white text-white  hover:bg-black rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
            >
            <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-wiggle" />
              Contact Me
            </a>
          </div>

                    </div>
                </div>

            </div>

            {/* <style jsx global>{`
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0; 
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .group-hover\:animate-wiggle:hover svg {
          animation: wiggle 0.5s ease-in-out infinite;
        }
      `}</style> */}

        </section>
    )
}

