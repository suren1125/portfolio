"use client";

import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "a8a136c1-5cf8-4539-a498-a332e02dd026");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-21 bg-[url(/footer-bg-color.png)] dark:bg-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.1 }}
      >
        Connect with me
      </motion.h4>

      <motion.h2
        className="text-center text-5xl "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.2 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay: 0.25 }}
      >
        I&apos;d love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <div className="my-auto-grid gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            autoComplete="name"
            className="flex-1 p-5 outline-none border-[0.5px] border-gray-400 rounded-2xl bg-white dark:bg-darkHover/30 dark:border-white/90"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="email"
            className="flex-1 p-5 outline-none border-[0.5px] border-gray-400 rounded-2xl bg-white dark:bg-darkHover/30 dark:border-white/90"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Enter your message"
          rows={6}
          required
          className="w-full p-5 outline-none border-[0.5px] border-gray-400 rounded-2xl bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.15 }}
        />

        <motion.button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Submit Now{" "}
          <Image
            src={assets.right_arrow_white}
            alt="right-arrow"
            className="w-4"
          />
        </motion.button>

        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
