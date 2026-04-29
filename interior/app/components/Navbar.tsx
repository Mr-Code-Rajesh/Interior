"use client";

import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-[5vw] py-5 flex items-center justify-between transition-all duration-400 ${scrolled ? "bg-dark/90 backdrop-blur-md py-4 border-b border-border-gold" : "bg-transparent"
          }`}
      >
        <a href="#hero" className="font-display text-2xl font-light text-warm-white tracking-[0.12em] no-underline">
          AUR<span className="text-gold">A</span>
        </a>

        <ul className="hidden md:flex gap-10 list-none m-0 p-0">
          {["About", "Services", "Our Work", "Process", "Trending", "Contact"].map((item) => {
            const id = item === "Our Work" ? "portfolio" : item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className="text-[0.78rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors hover:text-gold relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-1px after:bg-gold after:transition-all hover:after:w-full hover-target"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          onClick={scrollToContact}
          className="hidden md:block bg-transparent border border-gold text-gold px-6 py-2 font-body text-[0.75rem] tracking-[0.15em] uppercase cursor-none transition-colors hover:bg-gold hover:text-dark hover-target"
        >
          Get a Quote
        </button>

        <div className="md:hidden flex flex-col gap-[5px] hover-target cursor-none" onClick={() => setMobileMenuOpen(true)}>
          <span className="w-6 h-px bg-warm-white transition-all duration-300"></span>
          <span className="w-6 h-px bg-warm-white transition-all duration-300"></span>
          <span className="w-6 h-px bg-warm-white transition-all duration-300"></span>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/95 z-998 flex flex-col items-center justify-center gap-10 pointer-events-auto"
          >
            <button
              className="absolute top-8 right-[5vw] bg-transparent border-none text-warm-white text-2xl hover-target cursor-none"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>
            {["Home", "About", "Services", "Work", "Contact"].map((item) => {
              const id = item === "Work" ? "portfolio" : item === "Home" ? "hero" : item.toLowerCase();
              return (
                <motion.a
                  key={item}
                  href={`#${id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl font-light text-warm-white no-underline transition-colors hover:text-gold hover-target cursor-none"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
