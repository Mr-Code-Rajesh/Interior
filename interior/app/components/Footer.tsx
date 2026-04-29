"use client";

import { FaInstagram, FaPinterest, FaHouzz, FaLinkedinIn, FaArrowRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/10 pt-20 pb-8 px-[6vw] md:px-[8vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-16 mb-16">
        
        {/* Brand */}
        <div>
          <div className="font-display text-[2rem] font-light text-warm-white tracking-[0.12em]">
            AUR<span className="text-gold">A</span>
          </div>
          <p className="text-[0.85rem] text-white/35 leading-[1.9] mt-5 max-w-[280px]">
            A luxury interior design studio crafting spaces that transcend aesthetics. Every project, a masterpiece. Every space, a story.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 text-[0.85rem] transition-colors hover:border-gold hover:text-gold hover-target"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 text-[0.85rem] transition-colors hover:border-gold hover:text-gold hover-target"><FaPinterest /></a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 text-[0.85rem] transition-colors hover:border-gold hover:text-gold hover-target"><FaHouzz /></a>
            <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 text-[0.85rem] transition-colors hover:border-gold hover:text-gold hover-target"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-[0.68rem] tracking-[0.25em] uppercase text-white/40 mb-6">Services</h5>
          <ul className="flex flex-col gap-3">
            <li><a href="#services" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Residential Design</a></li>
            <li><a href="#services" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Commercial Spaces</a></li>
            <li><a href="#services" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Concept & Styling</a></li>
            <li><a href="#services" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Space Planning</a></li>
            <li><a href="#services" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Lighting Design</a></li>
            <li><a href="#services" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">3D Visualization</a></li>
          </ul>
        </div>

        {/* Studio */}
        <div>
          <h5 className="text-[0.68rem] tracking-[0.25em] uppercase text-white/40 mb-6">Studio</h5>
          <ul className="flex flex-col gap-3">
            <li><a href="#about" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Our Story</a></li>
            <li><a href="#portfolio" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Portfolio</a></li>
            <li><a href="#process" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Our Process</a></li>
            <li><a href="#testimonials" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Testimonials</a></li>
            <li><a href="#" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Press</a></li>
            <li><a href="#" className="text-[0.85rem] text-white/50 no-underline transition-colors hover:text-gold hover-target">Careers</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h5 className="text-[0.68rem] tracking-[0.25em] uppercase text-white/40 mb-6">Newsletter</h5>
          <p className="text-[0.82rem] text-white/40 leading-[1.8] mb-5">
            Stay inspired. Get our monthly design journal delivered to your inbox.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="flex-1 bg-white/5 border border-r-0 border-gold/20 text-warm-white px-4 py-3 font-body text-[0.8rem] outline-none placeholder:text-white/30 hover-target" 
            />
            <button className="bg-gold border-none px-4 py-3 text-dark cursor-none text-[0.8rem] transition-colors hover:bg-gold-light hover-target">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[0.78rem] text-white/25">
          © {new Date().getFullYear()} AURA Interiors. All rights reserved. Crafted with <span className="text-gold">♥</span>
        </p>
        <p className="text-[0.78rem] text-white/25 flex gap-3">
          <a href="#" className="text-gold no-underline hover-target">Privacy Policy</a>
          <span>·</span>
          <a href="#" className="text-gold no-underline hover-target">Terms</a>
        </p>
      </div>
    </footer>
  );
}
