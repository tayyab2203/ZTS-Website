import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800/40 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300"
              aria-label="Homepage"
            >
              ZTS
            </button>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("zts-video")} className="text-sm text-slate-200 hover:text-white transition">
                About
              </button>
              <button onClick={() => scrollToSection("zts-courses")} className="text-sm text-slate-200 hover:text-white transition">
                Courses
              </button>
              <button onClick={() => scrollToSection("team-section")} className="text-sm text-slate-200 hover:text-white transition">
                Team
              </button>
              <button onClick={() => scrollToSection("faq-section")} className="text-sm text-slate-200 hover:text-white transition">
                FAQ
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("contact-section")}
              className="px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md hover:from-blue-600 hover:to-cyan-600 transition"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-md text-slate-200 hover:text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="bg-slate-900/95 backdrop-blur-sm border-t border-slate-800/40">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection("zts-video")} className="w-full text-left text-slate-200 py-2">About</button>
            <button onClick={() => scrollToSection("zts-courses")} className="w-full text-left text-slate-200 py-2">Courses</button>
            <button onClick={() => scrollToSection("team-section")} className="w-full text-left text-slate-200 py-2">Team</button>
            <button onClick={() => scrollToSection("faq-section")} className="w-full text-left text-slate-200 py-2">FAQ</button>
            <button onClick={() => scrollToSection("contact-section")} className="w-full text-left py-2">
              <span className="inline-flex items-center justify-center w-full rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LandingNavbar;
