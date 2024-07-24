import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="shadow-xl bg-white fixed top-0 left-0 w-full z-[99] px-4 md:px-0">
      <div className="container mx-auto flex items-center justify-between py-5">
        <div>
          <img
            src="/images/logo.png"
            alt="#"
            className="w-[60px] h-[60px] object-contain"
          />
        </div>
        <div>
          {nav ? (
            <XMarkIcon
              className="h-9 block md:hidden"
              onClick={() => setNav(!nav)}
            />
          ) : (
            <Bars3Icon
              className="h-9 block md:hidden"
              onClick={() => setNav(!nav)}
            />
          )}
        </div>
        <div className="hidden md:flex gap-4">
          <a
            href="#about"
            className="uppercase tracking-wide font-semibold hover:text-[#378c35] transition-all ease-in-out duration-300"
          >
            about
          </a>
          <a
            href="#products"
            className="uppercase tracking-wide font-semibold hover:text-[#378c35] transition-all ease-in-out duration-300"
          >
            product
          </a>
          <a
            href="#contact"
            className="uppercase tracking-wide font-semibold hover:text-[#378c35] transition-all ease-in-out duration-300"
          >
            contact
          </a>
        </div>
      </div>
      <div
        className={`md:hidden transition-all ease-in-out duration-500 flex gap-4 absolute bg-white flex-col w-full left-0 items-center py-6 ${
          nav ? "top-[100%]" : "-top-[400%]"
        }`}
      >
        <a
          href="#about"
          className="uppercase tracking-wide font-semibold hover:text-[#378c35] transition-all ease-in-out duration-300"
          onClick={() => setNav(false)}
        >
          about
        </a>
        <a
          href="#products"
          className="uppercase tracking-wide font-semibold hover:text-[#378c35] transition-all ease-in-out duration-300"
          onClick={() => setNav(false)}
        >
          product
        </a>
        <a
          href="#contact"
          className="uppercase tracking-wide font-semibold hover:text-[#378c35] transition-all ease-in-out duration-300"
          onClick={() => setNav(false)}
        >
          contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
