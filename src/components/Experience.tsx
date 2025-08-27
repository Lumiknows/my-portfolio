import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { SiJavascript, SiTypescript, SiReact, SiHtml5, SiCss3, SiFigma } from "react-icons/si";
import { MdComputer, MdBuild } from "react-icons/md";

// Example links for each icon (customize as needed)
const techLinks = {
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  typescript: "https://www.typescriptlang.org/",
  react: "https://react.dev/",
  html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  figma: "https://figma.com/",
  hardware: "https://en.wikipedia.org/wiki/Computer_hardware",
  software: "https://en.wikipedia.org/wiki/Software"
};

const iconClass = "w-10 h-10 p-2 rounded-full bg-gray-800 border border-neon/40 outline outline-2 outline-neon hover:bg-neon/80 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg cursor-pointer";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-neon">Experience</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">Leuterio Realty & Brokerage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">Software Developer Intern</p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href={techLinks.javascript} target="_blank" rel="noopener noreferrer" title="JavaScript">
                <SiJavascript className={iconClass + " text-yellow-400"} />
              </a>
              <a href={techLinks.typescript} target="_blank" rel="noopener noreferrer" title="TypeScript">
                <SiTypescript className={iconClass + " text-blue-500"} />
              </a>
              <a href={techLinks.react} target="_blank" rel="noopener noreferrer" title="React">
                <SiReact className={iconClass + " text-cyan-400"} />
              </a>
              <a href={techLinks.react} target="_blank" rel="noopener noreferrer" title="React Native">
                <SiReact className={iconClass + " text-green-400"} />
              </a>
              <a href={techLinks.html} target="_blank" rel="noopener noreferrer" title="HTML5">
                <SiHtml5 className={iconClass + " text-orange-500"} />
              </a>
              <a href={techLinks.css} target="_blank" rel="noopener noreferrer" title="CSS3">
                <SiCss3 className={iconClass + " text-blue-400"} />
              </a>
              <a href={techLinks.figma} target="_blank" rel="noopener noreferrer" title="Figma">
                <SiFigma className={iconClass + " text-pink-400"} />
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">Freelance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">Computer Troubleshooting & Hardware</p>
             <div className="flex gap-4 mt-4 flex-wrap">
              <a href={techLinks.hardware} target="_blank" rel="noopener noreferrer" title="Hardware">
                <MdComputer className={iconClass + " text-white"} />
              </a>
              <a href={techLinks.software} target="_blank" rel="noopener noreferrer" title="Software">
                <MdBuild className={iconClass + " text-white"} />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}