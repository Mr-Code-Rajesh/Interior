"use client";

import { motion, Variants } from "framer-motion";
import { FaCouch, FaBuilding, FaPalette, FaDraftingCompass, FaLightbulb, FaCube, FaArrowRight } from "react-icons/fa";

export default function Services() {
  const services = [
    { num: "01", icon: FaCouch, title: "Residential Design", desc: "Transform your home into a sanctuary of beauty and comfort, tailored precisely to your lifestyle and aspirations." },
    { num: "02", icon: FaBuilding, title: "Commercial Spaces", desc: "Elevate your business environment — offices, retail, and hospitality spaces that inspire and impress." },
    { num: "03", icon: FaPalette, title: "Concept & Styling", desc: "Curated mood boards, material palettes, and styling packages to bring a cohesive aesthetic to any space." },
    { num: "04", icon: FaDraftingCompass, title: "Space Planning", desc: "Strategic spatial design that optimizes flow, function, and visual harmony within any architectural framework." },
    { num: "05", icon: FaLightbulb, title: "Lighting Design", desc: "Sculptural and atmospheric lighting solutions that transform mood, depth, and the beauty of every space." },
    { num: "06", icon: FaCube, title: "3D Visualization", desc: "Photorealistic renders that let you experience your space before a single piece of furniture is placed." }
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="services" className="bg-dark py-32 px-[6vw] md:px-[8vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <p className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center gap-4 before:content-[''] before:w-[30px] before:h-px before:bg-gold">
            What We Do
          </p>
          <h2 className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-warm-white">
            Crafted Services<br />for <em className="italic text-gold ">Every Vision</em>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <p className="text-[0.95rem] font-light text-white/45 leading-[1.9] max-w-[520px]">
            From intimate residences to grand commercial spaces, our expertise spans every realm of design.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5px] bg-gold/10 border border-gold/10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
            className="group relative overflow-hidden bg-dark p-10 border border-transparent transition-all duration-400 hover:bg-gold/5 hover:-translate-y-1 hover-target"
          >
            <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full"></div>

            <div className="font-display text-6xl font-light text-gold/10 leading-none mb-4">
              {service.num}
            </div>

            <div className="w-[52px] h-[52px] bg-gold/10 flex items-center justify-center text-gold text-xl mb-6 transition-colors group-hover:bg-gold/20">
              <service.icon />
            </div>

            <h3 className="font-display text-2xl font-normal text-warm-white mb-3">
              {service.title}
            </h3>

            <p className="text-[0.85rem] text-white/40 leading-[1.8] mb-6">
              {service.desc}
            </p>

            <a href="#contact" className="inline-flex items-center gap-2 mt-auto text-gold text-[0.72rem] tracking-[0.15em] uppercase no-underline transition-all group-hover:gap-4 hover-target">
              Enquire <FaArrowRight />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
