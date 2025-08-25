import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
  return (
    <section id="projects" className="py-4 px-6 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold mb-8 text-neon">Projects</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">SUPERNOVA</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              Mobile app for buying games and in-game items. Easy and effiecient access.<br></br> (Lead | Fullstack Developer & Designer)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">QuestGate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              A web app that turns learning and tasks into rewards and progress tracking. (Front-End Developer | Designer)
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">my-portfolio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">
              My very own portfolio website <br></br>(Developer | Designer)
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
