import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // ou un autre icône si tu veux

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  // Affiche le bouton seulement si scrollY > 100
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 hover:border-blue-500 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
