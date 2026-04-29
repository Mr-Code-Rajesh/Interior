"use client";

import { motion, Variants } from "framer-motion";
import { FaGem, FaAward, FaLeaf, FaHeadset } from "react-icons/fa";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="bg-cream py-32 px-[6vw] md:px-[8vw]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Visual Column */}
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="absolute top-8 -left-8 w-[90px] h-[90px] bg-gold rounded-full flex flex-col items-center justify-center z-10 shadow-lg">
            <span className="font-display text-[1.8rem] font-semibold text-dark leading-none">12</span>
            <span className="text-[0.55rem] tracking-[0.35em] uppercase text-dark">Years</span>
          </div>

          <div className="w-full aspect-4/5 bg-linear-to-br from-[#3D3020] to-[#1A1612] relative overflow-hidden flex items-center justify-center">
            {/* SVG Illustration from HTML */}
            <svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" className="w-[80%] opacity-60 bg-transparent">
              {/* Floor */}
              <rect x="0" y="280" width="300" height="80" fill="#3D2E1E" opacity="0.6" />
              {/* Wall */}
              <rect x="0" y="0" width="300" height="280" fill="#2A1F14" opacity="0.4" />
              {/* Window */}
              <rect x="40" y="30" width="100" height="140" fill="#C9A84C" opacity="0.15" rx="2" />
              <line x1="90" y1="30" x2="90" y2="170" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
              <line x1="40" y1="100" x2="140" y2="100" stroke="#C9A84C" strokeWidth="1.5" opacity="0.5" />
              {/* Sofa */}
              <rect x="50" y="220" width="200" height="55" fill="#5C4430" rx="6" opacity="0.8" />
              <rect x="50" y="195" width="200" height="30" fill="#6B4F37" rx="4" opacity="0.8" />
              <rect x="50" y="195" width="28" height="80" fill="#6B4F37" rx="4" opacity="0.9" />
              <rect x="222" y="195" width="28" height="80" fill="#6B4F37" rx="4" opacity="0.9" />
              {/* Cushions */}
              <rect x="78" y="200" width="55" height="40" fill="#8B6B4E" rx="4" opacity="0.7" />
              <rect x="143" y="200" width="55" height="40" fill="#7A5D42" rx="4" opacity="0.7" />
              {/* Coffee table */}
              <rect x="95" y="265" width="110" height="12" fill="#4A3520" rx="2" opacity="0.9" />
              <rect x="100" y="277" width="4" height="10" fill="#3D2A18" opacity="0.8" />
              <rect x="196" y="277" width="4" height="10" fill="#3D2A18" opacity="0.8" />
              {/* Lamp */}
              <rect x="230" y="140" width="4" height="80" fill="#8B7355" opacity="0.6" />
              <polygon points="218,140 250,140 244,110 224,110" fill="#C9A84C" opacity="0.4" />
              {/* Plant */}
              <rect x="15" y="230" width="8" height="40" fill="#5C4020" opacity="0.7" />
              <ellipse cx="19" cy="225" rx="18" ry="24" fill="#2D5A27" opacity="0.6" />
              <ellipse cx="12" cy="215" rx="10" ry="15" fill="#3A7034" opacity="0.5" />
              <ellipse cx="28" cy="218" rx="10" ry="13" fill="#3A7034" opacity="0.5" />
              {/* Art frame */}
              <rect x="170" y="50" width="100" height="70" fill="none" stroke="#C9A84C" strokeWidth="2" opacity="0.5" />
              <rect x="175" y="55" width="90" height="60" fill="#3D2E1E" opacity="0.4" />
              <ellipse cx="220" cy="85" rx="25" ry="18" fill="#C9A84C" opacity="0.15" />
              {/* Floor line shadow */}
              <rect x="0" y="278" width="300" height="2" fill="#C9A84C" opacity="0.1" />
            </svg>
          </div>

          <div className="hidden lg:flex absolute -bottom-12 -right-12 w-[55%] aspect-square bg-linear-to-br from-[#2D2416] to-[#4A3820] border-4 border-warm-white items-center justify-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-[60%] opacity-50">
              <rect x="0" y="130" width="200" height="70" fill="#2A1F14" opacity="0.5" />
              <rect x="30" y="100" width="140" height="40" fill="#5C4430" rx="4" opacity="0.8" />
              <rect x="30" y="75" width="140" height="30" fill="#6B4F37" rx="3" opacity="0.8" />
              <rect x="75" y="80" width="50" height="22" fill="#8B6B4E" rx="3" opacity="0.7" />
              <rect x="20" y="75" width="15" height="65" fill="#4A3520" rx="2" opacity="0.8" />
              <rect x="165" y="75" width="15" height="65" fill="#4A3520" rx="2" opacity="0.8" />
              <rect x="22" y="55" width="12" height="8" fill="#C9A84C" opacity="0.5" rx="2" />
              <rect x="166" y="55" width="12" height="8" fill="#C9A84C" opacity="0.5" rx="2" />
              <rect x="0" y="0" width="200" height="75" fill="#1A1612" opacity="0.3" />
              <rect x="60" y="10" width="80" height="55" fill="#3D2E1E" opacity="0.5" rx="2" />
              <rect x="65" y="15" width="70" height="45" fill="#C9A84C" opacity="0.08" />
            </svg>
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center gap-4 before:content-[''] before:w-[30px] before:h-1px before:bg-gold">
            About AURA
          </motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-dark mb-6">
            Design is not just<br />what it looks like —<br />
            <em className="italic text-gold">it&apos;s how it feels</em>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-[0.95rem] font-light text-muted leading-[1.9] max-w-[520px] mb-12">
            Founded in 2012, AURA Interiors has been redefining luxury living across residential and commercial spaces. We believe every space tells a story — and we&apos;re here to help yours become extraordinary.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {[
              { icon: FaGem, title: "Bespoke Design Philosophy", desc: "Every project is a one-of-a-kind creation tailored to your vision." },
              { icon: FaAward, title: "Award-Winning Studio", desc: "Recognized globally for innovation and design excellence." },
              { icon: FaLeaf, title: "Sustainable Materials", desc: "We source responsibly, crafting beauty without compromise." },
              { icon: FaHeadset, title: "End-to-End Service", desc: "From concept to completion — we handle every exquisite detail." },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 border-l-2 border-transparent transition-all duration-300 hover:border-gold hover:bg-gold/5 group hover-target">
                <div className="w-[42px] h-[42px] min-w-[42px] bg-gold/10 flex items-center justify-center text-gold text-base group-hover:bg-gold/20 transition-colors">
                  <feature.icon />
                </div>
                <div>
                  <h4 className="text-[0.9rem] font-medium mb-1 text-dark">{feature.title}</h4>
                  <p className="text-[0.8rem] text-muted">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
