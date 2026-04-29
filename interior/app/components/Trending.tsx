"use client";

import { motion, Variants } from "framer-motion";

export default function Trending() {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="trending" className="bg-warm-white py-32 px-[6vw] md:px-[8vw]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <p className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center gap-4 before:content-[''] before:w-[30px] before:h-px before:bg-gold">Most Loved</p>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-dark">Trending <em className="italic text-gold">Styles</em> This Season</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2 gap-6 mt-16">

        {/* Item 1 */}
        <motion.div
          className="relative overflow-hidden bg-cream cursor-none group hover-target lg:col-span-2 lg:row-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="absolute top-4 left-4 bg-gold text-dark text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1 font-semibold z-10">Most Popular</div>
          <div className="w-full aspect-video lg:aspect-2/3 flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#2D2010] to-[#1A1208]">
            <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" className="w-[75%] transition-transform duration-500 group-hover:scale-105">
              <rect x="0" y="320" width="300" height="80" fill="#3D2A10" opacity="0.5" />
              <rect x="0" y="0" width="300" height="320" fill="#1E1508" opacity="0.3" />
              <rect x="20" y="240" width="260" height="70" fill="#6B4A20" rx="5" opacity="0.8" />
              <rect x="20" y="215" width="260" height="32" fill="#7A5525" rx="4" opacity="0.8" />
              <rect x="75" y="220" width="150" height="24" fill="#8B6535" rx="3" opacity="0.7" />
              <rect x="0" y="215" width="25" height="95" fill="#5C3D18" rx="3" opacity="0.9" />
              <rect x="275" y="215" width="25" height="95" fill="#5C3D18" rx="3" opacity="0.9" />
              <rect x="100" y="295" width="100" height="10" fill="#2A1A08" rx="2" opacity="0.9" />
              <rect x="40" y="50" width="220" height="150" fill="#3D2A10" opacity="0.4" rx="3" />
              <ellipse cx="150" cy="125" rx="60" ry="40" fill="#C9A84C" opacity="0.07" />
              <line x1="150" y1="50" x2="150" y2="200" stroke="#C9A84C" strokeWidth="0.8" opacity="0.2" />
              <line x1="40" y1="125" x2="260" y2="125" stroke="#C9A84C" strokeWidth="0.8" opacity="0.2" />
              <rect x="10" y="80" width="30" height="100" fill="#2A5A25" opacity="0.5" rx="3" />
              <ellipse cx="25" cy="78" rx="18" ry="22" fill="#3A7030" opacity="0.6" />
              <ellipse cx="15" cy="65" rx="10" ry="14" fill="#2D6025" opacity="0.5" />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1">Japandi · Minimalism</div>
            <div className="font-display text-[1.2rem] font-normal text-dark">Wabi-Sabi Living</div>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className="relative overflow-hidden bg-cream cursor-none group hover-target"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          transition={{ delay: 0.15 }}
        >
          <div className="w-full aspect-16/10 flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#1A1E2A] to-[#0D1220]">
            <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-[75%] transition-transform duration-500 group-hover:scale-105">
              <rect x="0" y="150" width="280" height="50" fill="#1A1E2A" opacity="0.5" />
              <rect x="20" y="110" width="240" height="40" fill="#25304A" rx="3" opacity="0.8" />
              <rect x="20" y="92" width="240" height="22" fill="#2D3A55" rx="3" opacity="0.8" />
              <rect x="0" y="92" width="25" height="58" fill="#1E2840" rx="2" opacity="0.9" />
              <rect x="255" y="92" width="25" height="58" fill="#1E2840" rx="2" opacity="0.9" />
              <rect x="60" y="20" width="80" height="65" fill="#1E2840" opacity="0.6" rx="2" />
              <rect x="155" y="30" width="80" height="55" fill="#1E2840" opacity="0.5" rx="2" />
              <circle cx="200" cy="15" r="18" fill="#C9A84C" opacity="0.15" />
              <circle cx="200" cy="15" r="9" fill="#C9A84C" opacity="0.2" />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1">Dark Luxe · Moody</div>
            <div className="font-display text-[1.2rem] font-normal text-dark">Midnight Modern</div>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          className="relative overflow-hidden bg-cream cursor-none group hover-target"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute top-4 left-4 bg-dark text-gold text-[0.6rem] tracking-[0.15em] uppercase px-3 py-1 font-semibold z-10">Trending</div>
          <div className="w-full aspect-16/10 flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#2A2010] to-[#1E180A]">
            <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-[75%] transition-transform duration-500 group-hover:scale-105">
              <rect x="0" y="155" width="280" height="45" fill="#3D2A10" opacity="0.5" />
              <rect x="25" y="115" width="230" height="42" fill="#6B4520" rx="3" opacity="0.8" />
              <rect x="25" y="96" width="230" height="24" fill="#7A5230" rx="3" opacity="0.7" />
              <rect x="0" y="96" width="30" height="60" fill="#5C3A18" rx="2" opacity="0.9" />
              <rect x="250" y="96" width="30" height="60" fill="#5C3A18" rx="2" opacity="0.9" />
              <rect x="60" y="145" width="160" height="10" fill="#3D2010" rx="2" opacity="0.8" />
              <rect x="40" y="20" width="200" height="70" fill="#2A1E08" opacity="0.5" rx="3" />
              <line x1="40" y1="55" x2="240" y2="55" stroke="#C9A84C" strokeWidth="0.8" opacity="0.25" />
              <line x1="140" y1="20" x2="140" y2="90" stroke="#C9A84C" strokeWidth="0.8" opacity="0.25" />
              <circle cx="30" cy="90" r="15" fill="#2D5A27" opacity="0.6" />
              <circle cx="250" cy="90" r="12" fill="#2D5A27" opacity="0.5" />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1">Art Deco · Gold</div>
            <div className="font-display text-[1.2rem] font-normal text-dark">Golden Epoch</div>
          </div>
        </motion.div>

        {/* Item 4 */}
        <motion.div
          className="relative overflow-hidden bg-cream cursor-none group hover-target"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="w-full aspect-16/10 flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#1E2828] to-[#121E1E]">
            <svg viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg" className="w-[75%] transition-transform duration-500 group-hover:scale-105">
              <rect x="0" y="150" width="280" height="50" fill="#1A2A2A" opacity="0.5" />
              <rect x="20" y="110" width="240" height="40" fill="#20383A" rx="3" opacity="0.8" />
              <rect x="20" y="92" width="240" height="22" fill="#254545" rx="3" opacity="0.7" />
              <rect x="0" y="92" width="25" height="58" fill="#1A3030" rx="2" opacity="0.9" />
              <rect x="255" y="92" width="25" height="58" fill="#1A3030" rx="2" opacity="0.9" />
              <rect x="55" y="20" width="85" height="65" fill="#1A3030" opacity="0.6" rx="2" />
              <rect x="155" y="25" width="80" height="60" fill="#1A3030" opacity="0.5" rx="2" />
              <rect x="60" y="25" width="75" height="55" fill="#C9A84C" opacity="0.05" />
              <ellipse cx="195" cy="55" rx="25" ry="20" fill="#C9A84C" opacity="0.08" />
            </svg>
          </div>
          <div className="p-4 md:p-6">
            <div className="text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1">Biophilic · Earthy</div>
            <div className="font-display text-[1.2rem] font-normal text-dark">Forest Luxe</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
