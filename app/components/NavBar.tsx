"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

interface NavBarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<NavBarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const sideMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
          isScroll
            ? "bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/10"
            : ""
        }`}
      >
        <a href="#top" title="logo">
          <Image
            src={assets.surenlogo}
            className="w-22 h-22 mr-14 cursor-pointer"
            alt="logo"
          />
        </a>

        {/* desktop menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {["top", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="font-ovo">
                {section === "top"
                  ? "Home"
                  : section === "about"
                  ? "About me"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* dark mode toggle, contact button, mobile menu button */}
        <div className="flex items-center">
          <button
            title="toggle-theme"
            onClick={() => setIsDarkMode((prev) => !prev)}
            className="cursor-pointer"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="theme-icon"
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
            onClick={toggleMenu}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu-icon"
              className="w-6"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-screen w-64 z-50 bg-rose-50 dark:bg-darkHover dark:text-white transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute right-6 top-6" onClick={toggleMenu}>
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="close"
            className="w-5 cursor-pointer"
          />
        </div>

        <ul className="flex flex-col gap-4 px-10 py-20">
          {["top", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              <a href={`#${section}`} className="font-ovo" onClick={toggleMenu}>
                {section === "top"
                  ? "Home"
                  : section === "about"
                  ? "About me"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
