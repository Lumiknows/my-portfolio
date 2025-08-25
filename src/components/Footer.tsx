import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center border-t border-[#001f3f]/40 bg-black">
      <p className="text-neutral-400 text-sm">© {new Date().getFullYear()} Neil Andre Ibona. All rights reserved.</p>
    </footer>
  );
}
