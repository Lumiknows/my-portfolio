import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
          </CardContent>
        </Card>
        <Card className="bg-black border-neon/40">
          <CardHeader>
            <CardTitle className="text-neon">Freelance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-300">Computer Troubleshooting & Hardware</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
