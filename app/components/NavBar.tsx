"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const NavBar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    if (sideMenuRef.current)
      sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${
          isScroll
            ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/10 "
            : ""
        }
         `}
      >
        <a href="#top" title="logo">
          <Image
            src={assets.surenlogo}
            className="w-22 mr-14 h-22 cursor-pointer"
            alt="logo"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              About me
            </a>
          </li>

          <li>
            <a href="#projects" className="font-ovo">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex">
          <button
            title="moon-icon"
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon-icon"
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full ml-4 dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="arrow-icon"
              className="w-3"
            />
          </a>

          <button
            title="menu-icon"
            className="block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu-icon"
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="md:hidden flex flex-col gap-4 px-10 py-20 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About me
            </a>
          </li>

          <li>
            <a href="#projects" className="font-ovo" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
