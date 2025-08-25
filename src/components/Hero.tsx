import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, FileText } from "lucide-react";
import profilePic from "./assets/profile.jpg"; 
import CV from "./assets/CV.pdf"; 

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black via-[#001f3f]/20 to-black">
      
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

      {/* Buttons */}
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
    </section>
  );
}
