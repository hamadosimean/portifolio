import React from "react";

function Footer() {
  return (
    <footer className="py-10 space-y-4 flex flex-col items-center justify-center  bg-slate-900/20 backdrop-blur-md border-t border-slate-800">
      <p className="text-center text-gray-300 text-5xl sm:text-7xl md:text-9xl font-extrabold">
        Software Engineer
      </p>
      <p className="text-center text-gray-300 text-xl sm:text-2xl md:text-3xl">
        Hamado Simean {new Date().getFullYear()} &copy; All rights reserved.{" "}
        <a
          href="mailto:hamadosimean20@gmail.com"
          className="text-blue-500 hover:underline"
        >
          hamadosimean20@gmail.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
