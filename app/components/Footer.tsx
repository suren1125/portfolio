import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.surenlogo}
          alt=""
          className="w-22 h-22 mx-auto mb-2"
        />
        <h1 className="font-lusitana text-lg w-36 mx-auto mb-2">
          Suren Shrestha
        </h1>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail-icon"
            className="w-6"
          />
          saintsrs1125@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Suren Shrestha. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="flex items-center">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/suren1125"
              className="flex items-center gap-1"
            >
              <Image src="/github.svg" alt="github" width="25" height="25" />
              Github
            </a>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://linkedin.com/in/suren-shrestha"
              className="flex items-center gap-1"
            >
              {" "}
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width="25"
                height="25"
              />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
