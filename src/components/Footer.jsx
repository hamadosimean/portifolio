import React from "react";

function Footer() {
  return (
    <footer className="py-10 space-y-4 flex flex-col items-center justify-center  bg-slate-900/20 backdrop-blur-md border-t border-slate-800">
      <p className="text-gray-300 text-7xl md:text-9xl font-extrabold">
        Software Engineer
      </p>
      <p className="text-gray-300 text-xl">
        Hamado Simean {new Date().getFullYear()} &copy; All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
