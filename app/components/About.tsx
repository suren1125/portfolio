"use client";

import React from "react";
import Image from "next/image";
import { infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";

const About = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-21"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.1 }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.2 }}
      >
        About me
      </motion.h2>

      <motion.div
        className="flex w-full flex-col lg:flex-row items-center gap-10 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p className="mb-10 text-center">
            I am a final-year{" "}
            <strong>B.Sc.CSIT student at Bhaktapur Multiple Campus </strong>
            with a passion for frontend engineering. I thrive on turning
            creative designs into high-performance web applications using modern
            frameworks like Next.js 16.
          </p>

          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-3xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            className="my-6 dark:text-white/80 text-center text-xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.35 }}
          >
            Tools I use
          </motion.h4>

          <motion.ul
            className="flex items-center justify-center gap-3 sm:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-2xl cursor-pointer hover:-translate-y-1 duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
