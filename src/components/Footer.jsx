import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-16 bg-slate-900/20 backdrop-blur-md border-t border-slate-800">
      <p className="text-gray-300 text-5xl md:text-7xl font-extrabold">
        Software Engineer
      </p>
      <p className="text-gray-300 text-sm">
        Hamado Simean {new Date().getFullYear()} &copy; All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
