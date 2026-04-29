"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "AURA didn't just design our home — they designed our life. Every corner speaks to us in ways we never imagined. The attention to detail is simply unparalleled.",
      name: "Priya & Arjun Mehta",
      role: "Residential Client · Mumbai",
      svg: (
        <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" className="w-[55%] opacity-50">
          <circle cx="100" cy="80" r="50" fill="#5C4430" opacity="0.6" />
          <ellipse cx="100" cy="200" rx="70" ry="60" fill="#4A3520" opacity="0.5" />
          <circle cx="100" cy="72" r="32" fill="#6B4F37" opacity="0.8" />
          <circle cx="100" cy="65" r="20" fill="#8B6B4E" opacity="0.6" />
        </svg>
      )
    },
    {
      text: "Our office transformation exceeded every expectation. The team understood our brand identity and wove it into every surface, every angle. Our team is inspired daily.",
      name: "Marcus Chen",
      role: "CEO, Nexus Ventures · Singapore",
      svg: (
        <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" className="w-[55%] opacity-50">
          <circle cx="100" cy="80" r="50" fill="#3A4A5C" opacity="0.6" />
          <ellipse cx="100" cy="200" rx="70" ry="60" fill="#2D3A4A" opacity="0.5" />
          <circle cx="100" cy="72" r="32" fill="#4A5C6B" opacity="0.8" />
          <circle cx="100" cy="65" r="20" fill="#6B7A8B" opacity="0.6" />
        </svg>
      )
    },
    {
      text: "Working with AURA was an absolute revelation. They transformed our boutique hotel lobby into something that stops every guest in their tracks. Pure artistry.",
      name: "Sofia Alderman",
      role: "Hospitality Director · Dubai",
      svg: (
        <svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" className="w-[55%] opacity-50">
          <circle cx="100" cy="80" r="50" fill="#4A3C2A" opacity="0.6" />
          <ellipse cx="100" cy="200" rx="70" ry="60" fill="#3A2D1E" opacity="0.5" />
          <circle cx="100" cy="72" r="32" fill="#5C4A35" opacity="0.8" />
          <circle cx="100" cy="65" r="20" fill="#7A6550" opacity="0.6" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const moveTesti = (dir: number) => {
    setCurrentIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-dark py-32 px-[6vw] md:px-[8vw] overflow-hidden">
      <motion.div
        className="flex justify-between items-end mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center gap-4 before:content-[''] before:w-[30px] before:h-px before:bg-gold">Client Stories</p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-warm-white">Words That <em className="italic text-gold">Move Us</em></h2>
        </div>
      </motion.div>

      <div className="relative mt-16 overflow-hidden">
        <motion.div
          className="flex transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testi, i) => (
            <div key={i} className="min-w-full grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-10 md:gap-20 items-center p-8 md:p-16 border border-gold/15">
              <div className="aspect-3/4 max-w-[300px] md:max-w-none mx-auto w-full bg-linear-to-br from-[#3D3020] to-[#2D2416] relative flex items-center justify-center after:content-[''] after:absolute after:-bottom-8 after:-right-8 after:w-20 after:h-20 after:bg-gold after:opacity-15">
                {testi.svg}
              </div>
              <div>
                <span className="font-display text-8xl text-gold opacity-20 leading-[0.5] mb-6 block">"</span>
                <div className="text-gold text-[0.8rem] mb-6 tracking-widest">★★★★★</div>
                <p className="font-display text-[1.45rem] font-light italic text-white/85 leading-[1.7] mb-8">
                  {testi.text}
                </p>
                <p className="font-semibold text-[0.85rem] text-warm-white tracking-wider">{testi.name}</p>
                <p className="text-[0.75rem] text-gold mt-1 tracking-widest">{testi.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-4 mt-8 justify-end md:pr-16">
        <button
          onClick={() => moveTesti(-1)}
          className="w-11 h-11 border border-gold/30 bg-transparent text-gold flex items-center justify-center cursor-none transition-all hover:bg-gold hover:text-dark hover-target"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => moveTesti(1)}
          className="w-11 h-11 border border-gold/30 bg-transparent text-gold flex items-center justify-center cursor-none transition-all hover:bg-gold hover:text-dark hover-target"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
