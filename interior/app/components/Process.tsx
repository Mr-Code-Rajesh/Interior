"use client";

import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We begin with deep listening — understanding your lifestyle, aspirations, and the story you want your space to tell." },
    { num: "02", title: "Concept", desc: "Our designers craft a rich visual language — mood boards, material palettes, and spatial concepts unique to you." },
    { num: "03", title: "Design", desc: "Full design development: floor plans, 3D renders, custom furniture selection, and every exquisite detail resolved." },
    { num: "04", title: "Delivery", desc: "We manage every aspect of project delivery — from procurement to installation — ensuring a flawless result." },
  ];

  return (
    <section id="process" className="bg-cream py-32 px-[6vw] md:px-[8vw]">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center justify-center gap-4 before:content-[''] before:w-[30px] before:h-1px before:bg-gold">How We Work</p>
        <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-dark">Our Design <em className="italic text-gold ">Process</em></h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="relative group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            {/* Connecting line - hidden on last item and on small screens */}
            {idx < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[calc(50%+1rem)] w-[calc(100%-2rem)] h-1px bg-linear-to-r from-gold to-gold/10"></div>
            )}

            <div className="w-16 h-16 border border-border-gold flex items-center justify-center mb-6 relative z-10 bg-cream transition-all duration-300 group-hover:bg-gold group-hover:border-gold hover-target">
              <div className="font-display text-[1.4rem] font-normal text-gold transition-colors group-hover:text-dark">{step.num}</div>
            </div>

            <h3 className="font-display text-xl font-normal text-dark mb-3">{step.title}</h3>
            <p className="text-[0.82rem] text-muted leading-[1.8]">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
