"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaExpand } from "react-icons/fa";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "The Meridian Penthouse",
      category: "Residential · Living Room",
      tags: ["residential", "luxury"],
      bg: "linear-gradient(135deg,#3D2E1E,#1A1612)",
      svg: (
        <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" className="w-[70%] transition-transform duration-500 group-hover:scale-105">
          <rect x="0" y="260" width="280" height="80" fill="#4A3520" opacity="0.5" />
          <rect x="0" y="0" width="280" height="260" fill="#2A1E12" opacity="0.3" />
          <rect x="50" y="20" width="180" height="120" fill="#3D2E1E" opacity="0.5" rx="2" />
          <line x1="140" y1="20" x2="140" y2="140" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
          <line x1="50" y1="80" x2="230" y2="80" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
          <rect x="30" y="200" width="220" height="55" fill="#6B4F37" rx="4" opacity="0.8" />
          <rect x="30" y="178" width="220" height="28" fill="#7A5C40" rx="3" opacity="0.8" />
          <rect x="85" y="183" width="110" height="20" fill="#8B6B4E" rx="3" opacity="0.7" />
          <rect x="0" y="178" width="35" height="77" fill="#5C4430" rx="3" opacity="0.9" />
          <rect x="245" y="178" width="35" height="77" fill="#5C4430" rx="3" opacity="0.9" />
          <rect x="95" y="250" width="90" height="10" fill="#3D2A18" rx="2" opacity="0.9" />
          <circle cx="248" cy="155" r="25" fill="#C9A84C" opacity="0.1" />
          <rect x="238" y="155" width="4" height="60" fill="#8B7355" opacity="0.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Nexus Creative Hub",
      category: "Commercial · Office",
      tags: ["commercial"],
      bg: "linear-gradient(135deg,#1A2030,#0D1520)",
      svg: (
        <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" className="w-[70%] transition-transform duration-500 group-hover:scale-105">
          <rect x="0" y="280" width="280" height="60" fill="#1A1A2A" opacity="0.6" />
          <rect x="0" y="0" width="280" height="280" fill="#0D1020" opacity="0.4" />
          <rect x="20" y="40" width="80" height="110" fill="#1E2A3A" opacity="0.8" rx="2" />
          <rect x="115" y="40" width="80" height="110" fill="#1E2A3A" opacity="0.8" rx="2" />
          <rect x="20" y="40" width="80" height="3" fill="#C9A84C" opacity="0.6" />
          <rect x="115" y="40" width="80" height="3" fill="#C9A84C" opacity="0.6" />
          <rect x="40" y="190" width="200" height="45" fill="#252535" opacity="0.9" rx="2" />
          <rect x="55" y="175" width="170" height="20" fill="#2E2E45" opacity="0.8" rx="2" />
          <rect x="90" y="235" width="100" height="8" fill="#1A1A2A" opacity="0.8" rx="2" />
          <rect x="100" y="243" width="80" height="30" fill="#1A1A2A" opacity="0.6" rx="2" />
          <circle cx="240" cy="30" r="20" fill="#C9A84C" opacity="0.12" />
          <circle cx="240" cy="30" r="10" fill="#C9A84C" opacity="0.2" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Aurum Dining Suite",
      category: "Luxury · Dining",
      tags: ["luxury"],
      bg: "linear-gradient(135deg,#1E1A10,#302815)",
      svg: (
        <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" className="w-[70%] transition-transform duration-500 group-hover:scale-105">
          <rect x="0" y="270" width="280" height="70" fill="#3D2E10" opacity="0.5" />
          <rect x="0" y="0" width="280" height="270" fill="#1E1810" opacity="0.3" />
          <rect x="20" y="220" width="240" height="50" fill="#5C4015" opacity="0.7" rx="3" />
          <rect x="30" y="200" width="90" height="25" fill="#7A5A20" opacity="0.7" rx="3" />
          <rect x="160" y="200" width="90" height="25" fill="#7A5A20" opacity="0.7" rx="3" />
          <rect x="20" y="200" width="18" height="70" fill="#6B4A18" opacity="0.9" rx="2" />
          <rect x="242" y="200" width="18" height="70" fill="#6B4A18" opacity="0.9" rx="2" />
          <rect x="70" y="255" width="140" height="10" fill="#4A3210" rx="2" opacity="0.9" />
          <rect x="60" y="50" width="160" height="130" fill="#3D2E10" opacity="0.4" rx="2" />
          <ellipse cx="140" cy="115" rx="55" ry="40" fill="#C9A84C" opacity="0.08" />
          <circle cx="140" cy="115" rx="30" fill="none" stroke="#C9A84C" strokeWidth="1" opacity="0.3" />
          <rect x="135" y="50" width="2" height="50" fill="#C9A84C" opacity="0.3" />
          <ellipse cx="136" cy="38" rx="15" ry="8" fill="#C9A84C" opacity="0.2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Casa Luna Retreat",
      category: "Residential · Bedroom",
      tags: ["residential"],
      bg: "linear-gradient(135deg,#1A1E28,#252030)",
      svg: (
        <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" className="w-[70%] transition-transform duration-500 group-hover:scale-105">
          <rect x="0" y="265" width="280" height="75" fill="#1A1825" opacity="0.6" />
          <rect x="0" y="0" width="280" height="265" fill="#151320" opacity="0.4" />
          <rect x="30" y="185" width="220" height="70" fill="#25204A" opacity="0.7" rx="4" />
          <rect x="30" y="165" width="220" height="25" fill="#2D2858" opacity="0.7" rx="3" />
          <rect x="85" y="170" width="110" height="18" fill="#3A3560" opacity="0.7" rx="3" />
          <rect x="0" y="165" width="35" height="90" fill="#25204A" opacity="0.9" rx="3" />
          <rect x="245" y="165" width="35" height="90" fill="#25204A" opacity="0.9" rx="3" />
          <rect x="90" y="250" width="100" height="10" fill="#1A1825" rx="2" opacity="0.9" />
          <rect x="15" y="30" width="110" height="110" fill="#1E1E38" opacity="0.6" rx="2" />
          <line x1="70" y1="30" x2="70" y2="140" stroke="#C9A84C" strokeWidth="1" opacity="0.25" />
          <line x1="15" y1="85" x2="125" y2="85" stroke="#C9A84C" strokeWidth="1" opacity="0.25" />
          <rect x="155" y="60" width="110" height="70" fill="#1E1E38" opacity="0.5" rx="2" />
          <rect x="170" y="70" width="80" height="50" fill="#C9A84C" opacity="0.07" />
        </svg>
      )
    },
    {
      id: 5,
      title: "The Grand Atelier",
      category: "Hospitality · Lobby",
      tags: ["commercial", "luxury"],
      bg: "linear-gradient(135deg,#1A1208,#2D2010)",
      svg: (
        <svg viewBox="0 0 280 340" xmlns="http://www.w3.org/2000/svg" className="w-[70%] transition-transform duration-500 group-hover:scale-105">
          <rect x="0" y="265" width="280" height="75" fill="#2A1E08" opacity="0.5" />
          <rect x="0" y="0" width="280" height="265" fill="#1A1208" opacity="0.3" />
          <rect x="10" y="195" width="120" height="65" fill="#4A3515" rx="3" opacity="0.8" />
          <rect x="150" y="195" width="120" height="65" fill="#4A3515" rx="3" opacity="0.8" />
          <rect x="80" y="175" width="120" height="28" fill="#3D2A10" rx="3" opacity="0.8" />
          <rect x="100" y="178" width="80" height="22" fill="#5A3E18" rx="3" opacity="0.7" />
          <ellipse cx="140" cy="150" rx="35" ry="35" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.3" />
          <circle cx="140" cy="150" r="20" fill="#C9A84C" opacity="0.08" />
          <rect x="138" y="80" width="4" height="55" fill="#8B7355" opacity="0.5" />
          <ellipse cx="140" cy="75" rx="20" ry="10" fill="#C9A84C" opacity="0.3" />
          <ellipse cx="140" cy="70" rx="12" ry="6" fill="#C9A84C" opacity="0.4" />
          <rect x="10" y="50" width="60" height="110" fill="#3D2A10" opacity="0.5" rx="2" />
          <rect x="210" y="50" width="60" height="110" fill="#3D2A10" opacity="0.5" rx="2" />
        </svg>
      )
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.tags.includes(filter));
  const maxIndex = Math.max(0, filteredProjects.length - (typeof window !== "undefined" && window.innerWidth > 768 ? 3 : 1));

  const handleFilter = (f: string) => {
    setFilter(f);
    setCurrentIndex(0);
  };

  const moveCarousel = (dir: number) => {
    setCurrentIndex(prev => Math.max(0, Math.min(maxIndex, prev + dir)));
  };

  return (
    <section id="portfolio" className="bg-warm-white py-32 px-[6vw] md:px-[8vw] pb-8 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center gap-4 before:content-[''] before:w-[30px] before:h-px before:bg-gold">Our Portfolio</p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-dark">Selected <em className="italic text-gold">Works</em></h2>
        </div>
        <a href="#contact" className="text-[0.75rem] tracking-[0.18em] uppercase text-dark no-underline flex items-center gap-2 border-b border-dark pb-1 transition-all hover:gap-4 hover-target">
          View All Projects <FaArrowRight />
        </a>
      </motion.div>

      <motion.div
        className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {["all", "residential", "commercial", "luxury"].map(f => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            className={`whitespace-nowrap px-5 py-2 font-body text-[0.72rem] tracking-[0.12em] uppercase cursor-none transition-all hover-target border ${filter === f ? "bg-dark border-dark text-warm-white" : "bg-transparent border-black/15 text-muted hover:bg-dark hover:border-dark hover:text-warm-white"}`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      <div className="relative overflow-hidden mx-[-6vw] md:mx-0 px-[6vw] md:px-0">
        <motion.div
          className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 1.5}rem))` }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="min-w-[80%] md:min-w-[calc(33.333%-1rem)] relative bg-cream cursor-none group hover-target"
              >
                <div
                  className="w-full aspect-3/4 relative overflow-hidden flex items-center justify-center"
                  style={{ background: project.bg }}
                >
                  {project.svg}
                  <div className="absolute inset-0 bg-dark/70 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-dark text-xl scale-75 transition-transform duration-400 group-hover:scale-100">
                      <FaExpand />
                    </div>
                  </div>
                </div>
                <div className="py-5">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">{project.category}</div>
                  <div className="font-display text-xl font-normal text-dark">{project.title}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => moveCarousel(-1)}
          disabled={currentIndex === 0}
          className="w-12 h-12 border border-black/20 bg-transparent flex items-center justify-center cursor-none text-dark transition-all hover:bg-dark hover:text-warm-white hover:border-dark disabled:opacity-30 hover-target"
        >
          <FaArrowLeft />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full cursor-none transition-all duration-300 hover-target ${currentIndex === i ? "w-5 bg-gold" : "w-1.5 bg-black/20 hover:bg-black/40"}`}
            />
          ))}
        </div>
        <button
          onClick={() => moveCarousel(1)}
          disabled={currentIndex >= maxIndex}
          className="w-12 h-12 border border-black/20 bg-transparent flex items-center justify-center cursor-none text-dark transition-all hover:bg-dark hover:text-warm-white hover:border-dark disabled:opacity-30 hover-target"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
