import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { FileText } from "lucide-react";
import { INFO } from "../data/info";
import CV from "./assets/CV.pdf";

export default function Navbar() {
  const sections = ["home", "about", "experience", "projects", "contact"];
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // Update underline position whenever activeSection changes
  useEffect(() => {
    if (navRef.current) {
      const btn = navRef.current.querySelector<HTMLButtonElement>(
        `button[data-id="${activeSection}"]`
      );
      if (btn) {
        setUnderlineStyle({
          left: btn.offsetLeft,
          width: btn.offsetWidth,
        });
      }
    }
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-neutral-800 bg-black/70">
      <nav
        ref={navRef}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative"
      >
        {/* Logo */}
        <a
          href="#home"
          className="font-extrabold text-xl tracking-tight text-neon transform transition duration-300 hover:-translate-y-1 hover:text-[#00cfff]"
          onClick={() => handleScroll("home")}
        >
          {INFO.name}
        </a>

        {/* Links */}
        <div className="hidden sm:flex items-center gap-4 relative">
          {[
            ["About", "about"],
            ["Experience", "experience"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              data-id={id}
              onClick={() => handleScroll(id)}
              className={`relative text-sm px-1 transform transition duration-300 ${
                activeSection === id ? "text-neon" : "text-neutral-300"
              } hover:text-[#00cfff] hover:-translate-y-1`}
            >
              {label}
            </button>
          ))}

          {/* Underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-neon transition-all duration-300"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          ></span>

          {/* Download CV Button */}
          <Button
            asChild
            className="ml-4 rounded-2xl bg-neon text-black shadow-md shadow-neon/50 hover:bg-[#00cfff] hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <a href={CV} download>
              <FileText className="h-4 w-4" /> Download CV
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
}
