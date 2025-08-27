import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiSqlite,
  SiXml,
  SiVite,
  SiCss3
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { DiAndroid } from "react-icons/di";

const techLinks = {
  supernova: {
    java: "https://www.java.com/",
    sqlite: "https://www.sqlite.org/",
    xml: "https://developer.mozilla.org/en-US/docs/Web/XML",
    figma: "https://figma.com/",
    androidstudio: "https://developer.android.com/studio",
    mobile: "https://developer.android.com/",
  },
  questgate: {
    vite: "https://vitejs.dev/",
    react: "https://react.dev/",
    tailwind: "https://tailwindcss.com/",
    figma: "https://figma.com/",
  },
  portfolio: {
    typescript: "https://www.typescriptlang.org/",
    react: "https://react.dev/",
    vantajs: "https://www.vantajs.com/",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  }
};

const iconClass = "w-10 h-10 p-2 rounded-full bg-gray-800 border border-neon/40 outline outline-2 outline-neon hover:bg-neon/80 transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg cursor-pointer";
export default function Projects() {
  return (
    <section id="projects" className="py-4 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-neon">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* SUPERNOVA */}
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">SUPERNOVA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              Mobile app for buying games and in-game items. Easy and efficient access.<br /> (Lead | Fullstack Developer & Designer)
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href={techLinks.supernova.java} target="_blank" rel="noopener noreferrer" title="Java">
                <FaJava className={iconClass + " text-red-700"} />
              </a>
              <a href={techLinks.supernova.sqlite} target="_blank" rel="noopener noreferrer" title="SQLite">
                <SiSqlite className={iconClass + " text-blue-700"} />
              </a>
              <a href={techLinks.supernova.xml} target="_blank" rel="noopener noreferrer" title="XML">
                <SiXml className={iconClass + " text-orange-400"} />
              </a>
              <a href={techLinks.supernova.figma} target="_blank" rel="noopener noreferrer" title="Figma">
                <SiFigma className={iconClass + " text-pink-400"} />
              </a>
              <a href={techLinks.supernova.mobile} target="_blank" rel="noopener noreferrer" title="Mobile App">
                <DiAndroid className={iconClass + " text-green-400"} />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* QuestGate */}
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">QuestGate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              A web app that turns learning and tasks into rewards and progress tracking. (Front-End Developer | Designer)
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href={techLinks.questgate.vite} target="_blank" rel="noopener noreferrer" title="Vite">
                <SiVite className={iconClass + " text-purple-400"} />
              </a>
              <a href={techLinks.questgate.react} target="_blank" rel="noopener noreferrer" title="React">
                <SiReact className={iconClass + " text-cyan-400"} />
              </a>
              <a href={techLinks.questgate.tailwind} target="_blank" rel="noopener noreferrer" title="TailwindCSS">
                <SiTailwindcss className={iconClass + " text-blue-400"} />
              </a>
              <a href={techLinks.questgate.figma} target="_blank" rel="noopener noreferrer" title="Figma">
                <SiFigma className={iconClass + " text-pink-400"} />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* my-portfolio */}
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">my-portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              My very own portfolio website <br /> (Developer | Designer)
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              <a href={techLinks.portfolio.typescript} target="_blank" rel="noopener noreferrer" title="TypeScript">
                <SiTypescript className={iconClass + " text-blue-500"} />
              </a>
              <a href={techLinks.portfolio.react} target="_blank" rel="noopener noreferrer" title="React">
                <SiReact className={iconClass + " text-cyan-400"} />
              </a>
              <a href={techLinks.questgate.vite} target="_blank" rel="noopener noreferrer" title="Vite">
                <SiVite className={iconClass + " text-purple-400"} />
              </a>
              <a href={techLinks.questgate.tailwind} target="_blank" rel="noopener noreferrer" title="TailwindCSS">
                <SiTailwindcss className={iconClass + " text-blue-400"} />
              </a>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}