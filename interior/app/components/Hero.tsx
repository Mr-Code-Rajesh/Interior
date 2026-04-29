"use client";

import { motion, Variants } from "framer-motion";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-dark pt-20 pb-16 md:py-0">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1A1612] via-[#2D2416] to-[#1A1612]"></div>
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)`
        }}
      ></div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-[-50%] left-[60%] w-1px h-[200%] opacity-30"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
          animate={{ opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute top-[-50%] left-[75%] w-1px h-[200%] opacity-15"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(201,168,76,0.5), transparent)" }}
          animate={{ opacity: [0.1, 0.35, 0.1] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, delay: 2 }}
        ></motion.div>
      </div>

      <div className="relative z-10 px-6 sm:px-10 md:px-[8vw] max-w-[1000px] mt-10 md:mt-0">
        <motion.div
          className="flex items-center gap-4 text-[0.7rem] tracking-[0.35em] uppercase text-gold mb-7"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="w-10 h-1px bg-gold"></div>
          Luxury Interior Design Studio
        </motion.div>

        <motion.h1
          className="font-display text-[clamp(2.8rem,10vw,7rem)] font-light leading-[1.05] text-warm-white mb-6 md:mb-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Where Spaces<br />Become
          <em className="block italic text-gold">Masterpieces</em>
        </motion.h1>

        <motion.p
          className="text-[0.95rem] md:text-base font-light text-white/55 leading-[1.8] max-w-[480px] mb-10 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.7 }}
        >
          We craft interiors that transcend aesthetics — spaces that breathe, inspire, and reflect the essence of those who inhabit them.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start sm:items-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a href="#portfolio" className="bg-gold text-dark px-10 py-4 text-[0.75rem] tracking-[0.18em] uppercase font-semibold no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,168,76,0.4)] hover-target w-full sm:w-auto text-center block">
            Explore Our Work
          </a>
          <a href="#about" className="flex items-center justify-center sm:justify-start gap-3 text-white/70 text-[0.75rem] tracking-[0.18em] uppercase no-underline transition-colors hover:text-gold hover-target w-full sm:w-auto mt-2 sm:mt-0">
            <FaRegPlayCircle className="text-base" /> Our Story
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/35 text-[0.65rem] tracking-[0.2em] uppercase hidden sm:flex"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          className="w-1px h-[50px]"
          style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
        ></motion.div>
        Scroll
      </motion.div>

      <motion.div
        className="hidden md:flex absolute right-[8vw] bottom-24 gap-12"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 1, delay: 1.0 }}
      >
        <div className="text-center">
          <div className="font-display text-[2.5rem] font-light text-gold leading-none">12+</div>
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/35 mt-2">Years</div>
        </div>
        <div className="text-center">
          <div className="font-display text-[2.5rem] font-light text-gold leading-none">340</div>
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/35 mt-2">Projects</div>
        </div>
        <div className="text-center">
          <div className="font-display text-[2.5rem] font-light text-gold leading-none">98%</div>
          <div className="text-[0.65rem] tracking-[0.2em] uppercase text-white/35 mt-2">Satisfied</div>
        </div>
      </motion.div>
    </section>
  );
}
