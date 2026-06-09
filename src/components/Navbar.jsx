import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const offsets = navLinks.map((l) => {
        const el = document.getElementById(l.toLowerCase());
        if (!el) return { id: l.toLowerCase(), top: Infinity };
        return { id: l.toLowerCase(), top: Math.abs(el.getBoundingClientRect().top - 80) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "py-4 bg-black/20 backdrop-blur-sm"
      }`}>
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center font-black text-white text-base shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {portfolioData.name.charAt(0)}
              </div>
              <span className="font-bold text-white text-xl tracking-tight hidden sm:block">
                Abhay<span className="text-blue-400">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl px-2 py-1.5 backdrop-blur-md">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className={`relative px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeSection === link.toLowerCase()
                        ? "bg-white text-black"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.resumeUrl}
                className="hidden sm:flex px-6 py-2.5 bg-white/5 border border-white/10 text-white rounded-xl text-sm font-bold hover:bg-white/10 transition-all"
              >
                Resume
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                aria-label="Menu"
              >
                {menuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-80 bg-[#050508] border-l border-white/10 p-8 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between mb-12">
            <span className="font-bold text-white text-2xl tracking-tight">Navigation</span>
            <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 text-slate-400 hover:text-white transition-all">
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-lg font-bold transition-all ${
                    activeSection === link.toLowerCase()
                      ? "bg-gradient-to-r from-cyan-400 to-violet-500 text-white shadow-lg shadow-cyan-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-12 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-4 bg-white text-black text-center font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
