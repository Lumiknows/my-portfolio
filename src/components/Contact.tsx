import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-neon">Contact Me</h3>
      <p className="text-neutral-200 leading-relaxed mb-8">
        I’m open to opportunities, collaborations, or freelance projects. You can reach me via email or social media.
      </p>

      <div className="flex flex-wrap gap-4">
        {/* Email Badge */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=neilandreibona@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-neon text-black rounded-full text-sm font-medium hover:bg-[#00cfff] transition-colors"
        >
          <Mail className="w-4 h-4" /> Email Me
        </a>

        {/* LinkedIn Badge */}
        <a
          href="https://www.linkedin.com/in/neil-andre-ibona-4246aa377/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-neon text-black rounded-full text-sm font-medium hover:bg-[#00cfff] transition-colors"
        >
          <Linkedin className="w-4 h-4" /> LinkedIn
        </a>

        {/* GitHub Badge */}
        <a
          href="https://github.com/Lumiknows"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-neon text-black rounded-full text-sm font-medium hover:bg-[#00cfff] transition-colors"
        >
          <Github className="w-4 h-4" /> GitHub
        </a>
      </div>
    </section>
  );
}
