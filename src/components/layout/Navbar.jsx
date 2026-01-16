import React, { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Capabilities", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(""); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-6xl transition-all duration-300${
          scrolled
          ? 'bg-transparent '
          : 'bg-transparent '
          
        }`}
      >
        <nav  
        className={`flex items-center justify-between rounded-full bg-gradient-to-r from-blue-900 via-black to-blue-900 py-5 px-5 backdrop-blur-lg transition-all duration-300 ease-in-out glow-effect ${
          scrolled
          ?'border ':''
        }`}
     
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 text-xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
            {/* <Code2 className="h-7 w-7" /> */}
            <span >&lt; SLH / IA &gt;</span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 mr-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-white/80 hover:text-blue-400"
                } transition-colors duration-300 pb-1`}
                
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden mr-3">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="fixed inset-y-0 right-0 z-50 w-[250px] sm:w-[300px] bg-gradient-to-b from-black via-blue-900 to-black border-l border-white/10 p-6 flex flex-col mobile-menu">
            <div className="flex justify-between items-center mb-8">
              <a
                href="#home"
                className="text-xl font-bold text-white hover:text-blue-400"
                onClick={() => setMenuOpen(false)}
              >
                SALIHOU
              </a>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${
                  activeSection === item.href.replace("#", "")
                    ? "text-blue-400"
                    : "text-white/80 hover:text-blue-400"
                } transition-colors duration-300`}
                
              >
                {item.name}
              </a>
            ))}
            </nav>
          </div>
          {/* Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          ></div>
        </>
      )}
    </>
  );
}
