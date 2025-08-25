import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, FileText } from "lucide-react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

import profilePic from "./assets/profile.jpg";
import CV from "./assets/CV.pdf";

export default function Hero() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x00f0ff,          // neon lines
          backgroundColor: 0x000000, // black background
          THREE: THREE,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Vanta Background */}
      <div ref={vantaRef} className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        {/* Profile Picture */}
        <motion.img
          src={profilePic}
          alt="Neil's Profile"
          className="w-32 h-32 rounded-full mb-6 border-4 border-[#00f0ff] shadow-[0_0_30px_#00f0ff]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-4 text-neutral-100 text-glow"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm <span className="text-[#00f0ff]">Neil</span>
        </motion.h2>

        {/* Subheading */}
        <p className="text-lg text-neutral-300 max-w-xl mb-6 text-glow-sub">
          Software Engineer | UI/UX Designer | Mobile Developer
        </p>

        {/* Buttons / Badges */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Contact Me Badge */}
          <Button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-4 py-2 bg-[#00f0ff] text-black rounded-full text-sm font-medium shadow-md shadow-[#00f0ff]/70 hover:bg-[#00cfff] hover:scale-105 transition-transform duration-300"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </Button>

          {/* Download CV Badge */}
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 border-[#00f0ff] text-[#00f0ff] rounded-full text-sm font-medium shadow-md shadow-[#00f0ff]/70 hover:bg-[#00f0ff]/20 hover:scale-105 transition-transform duration-300"
          >
            <a href={CV} download>
              <FileText className="w-4 h-4" /> Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
