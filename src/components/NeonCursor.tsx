import React, { useEffect, useRef } from "react";

const NeonCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trail: { x: number; y: number }[] = [];
    const maxTrail = 20; // number of dots in the trail
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // add current mouse position to trail
      trail.push({ x: mouseX, y: mouseY });
      if (trail.length > maxTrail) trail.shift();

      // draw trail lines
      ctx.beginPath();
      ctx.strokeStyle = "#00f0ff"; // neon blue color
      ctx.lineWidth = 2;
      for (let i = 0; i < trail.length - 1; i++) {
        const opacity = i / trail.length;
        ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
        ctx.moveTo(trail[i].x, trail[i].y);
        ctx.lineTo(trail[i + 1].x, trail[i + 1].y);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // resize canvas on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  );
};

export default NeonCursor;
