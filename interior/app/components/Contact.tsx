"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaLocationDot, FaPhone, FaEnvelope, FaRegClock, FaPaperPlane, FaCheck } from "react-icons/fa6";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate network request
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="bg-cream py-32 px-[6vw] md:px-[8vw]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          <motion.p variants={itemVariants} className="text-[0.68rem] tracking-[0.35em] uppercase text-gold mb-5 flex items-center gap-4 before:content-[''] before:w-[30px] before:h-1px before:bg-gold">Get In Touch</motion.p>
          <motion.h2 variants={itemVariants} className="font-display text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.15] text-dark mb-6">Let&apos;s Create<br />Something <em className="italic text-gold ">Extraordinary</em></motion.h2>
          <motion.p variants={itemVariants} className="text-[0.95rem] font-light text-muted leading-[1.9] max-w-[520px] mb-10">
            We&apos;d love to hear about your project. Reach out and let&apos;s begin the conversation.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-8 mt-10">
            <div className="flex gap-5 items-start">
              <div className="w-[46px] h-[46px] min-w-[46px] bg-gold/10 flex items-center justify-center text-gold text-base">
                <FaLocationDot />
              </div>
              <div>
                <h4 className="text-[0.75rem] tracking-[0.12em] uppercase font-semibold text-dark mb-1">Studio</h4>
                <p className="text-[0.88rem] text-muted">14 Design District, Colaba<br />Mumbai, Maharashtra 400005</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-[46px] h-[46px] min-w-[46px] bg-gold/10 flex items-center justify-center text-gold text-base">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-[0.75rem] tracking-[0.12em] uppercase font-semibold text-dark mb-1">Phone</h4>
                <p className="text-[0.88rem] text-muted">+91 22 4567 8900</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-[46px] h-[46px] min-w-[46px] bg-gold/10 flex items-center justify-center text-gold text-base">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-[0.75rem] tracking-[0.12em] uppercase font-semibold text-dark mb-1">Email</h4>
                <p className="text-[0.88rem] text-muted">hello@aura-interiors.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-[46px] h-[46px] min-w-[46px] bg-gold/10 flex items-center justify-center text-gold text-base">
                <FaRegClock />
              </div>
              <div>
                <h4 className="text-[0.75rem] tracking-[0.12em] uppercase font-semibold text-dark mb-1">Studio Hours</h4>
                <p className="text-[0.88rem] text-muted">Mon – Sat: 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-dark p-8 md:p-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-display text-[1.6rem] font-light text-warm-white mb-8">Start Your Project</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-warm-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-2">First Name</label>
                <input required type="text" placeholder="Your first name" className="w-full bg-white/5 border border-gold/15 text-warm-white px-4 py-3.5 font-body text-[0.88rem] outline-none transition-colors focus:border-gold placeholder:text-white/20 hover-target" />
              </div>
              <div>
                <label className="block text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-2">Last Name</label>
                <input required type="text" placeholder="Your last name" className="w-full bg-white/5 border border-gold/15 text-warm-white px-4 py-3.5 font-body text-[0.88rem] outline-none transition-colors focus:border-gold placeholder:text-white/20 hover-target" />
              </div>
            </div>

            <div>
              <label className="block text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-2">Email Address</label>
              <input required type="email" placeholder="your@email.com" className="w-full bg-white/5 border border-gold/15 text-warm-white px-4 py-3.5 font-body text-[0.88rem] outline-none transition-colors focus:border-gold placeholder:text-white/20 hover-target" />
            </div>

            <div>
              <label className="block text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-2">Phone</label>
              <input type="tel" placeholder="+91 00000 00000" className="w-full bg-white/5 border border-gold/15 text-warm-white px-4 py-3.5 font-body text-[0.88rem] outline-none transition-colors focus:border-gold placeholder:text-white/20 hover-target" />
            </div>

            <div>
              <label className="block text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-2">Project Type</label>
              <select required className="w-full bg-white/5 border border-gold/15 text-warm-white px-4 py-3.5 font-body text-[0.88rem] outline-none transition-colors focus:border-gold cursor-none appearance-none hover-target">
                <option value="" className="bg-dark text-warm-white">Select a service</option>
                <option className="bg-dark text-warm-white">Residential Design</option>
                <option className="bg-dark text-warm-white">Commercial Space</option>
                <option className="bg-dark text-warm-white">Concept & Styling</option>
                <option className="bg-dark text-warm-white">Space Planning</option>
                <option className="bg-dark text-warm-white">Lighting Design</option>
                <option className="bg-dark text-warm-white">3D Visualization</option>
              </select>
            </div>

            <div>
              <label className="block text-[0.68rem] tracking-[0.18em] uppercase text-white/40 mb-2">Tell Us About Your Vision</label>
              <textarea required placeholder="Describe your project, timeline, and any specific requirements..." className="w-full bg-white/5 border border-gold/15 text-warm-white px-4 py-3.5 font-body text-[0.88rem] outline-none transition-colors focus:border-gold placeholder:text-white/20 resize-y min-h-[120px] hover-target"></textarea>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={`w-full py-4 text-[0.75rem] tracking-[0.2em] uppercase font-semibold cursor-none flex items-center justify-center gap-3 transition-all ${status === "sent" ? "bg-[#2D7A3A] text-white" : "bg-gold text-dark hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(201,168,76,0.4)]"} hover-target`}
            >
              {status === "idle" && <>Send Message <FaPaperPlane /></>}
              {status === "sending" && "Sending..."}
              {status === "sent" && <>Message Sent! <FaCheck /></>}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
