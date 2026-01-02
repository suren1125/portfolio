"use client";

import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-21"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Section Heading */}
      <motion.h4
        className="text-center mb-2 text-lg "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        My portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-5xl "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        My projects
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      {/* Project Cards */}
      <motion.div
        className="my-auto-grid my-10 gap-5 dark:text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {workData.map((project, index) => (
          <Link href={project.link} key={index} target="_blank">
            <motion.div
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-2xl relative border border-gray-300 dark:border-none hover:shadow-lg cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-black/5 group-hover:bg-black/20 transition-all duration-300" />
              <div className="bg-white/90 backdrop-blur-sm w-11/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between duration-300 group-hover:bottom-7 group-hover:bg-white shadow-md">
                <div>
                  <h2 className="font-bold text-gray-900">{project.title}</h2>
                  <p className="text-xs text-gray-600 mt-1">
                    {project.description}
                  </p>
                </div>
                <div className="border rounded-full border-black w-10 h-10 flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <Image
                    src={assets.send_icon}
                    alt="send-icon"
                    className="w-4 group-hover:invert"
                  />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
