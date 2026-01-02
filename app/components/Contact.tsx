"use client";

import React, { useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setResult("Sending message...");

    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "a8a136c1-5cf8-4539-a498-a332e02dd026");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Message sent successfully! I'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResult("Network error. Please check your connection.");
    }
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
        Let&apos;s Collaborate
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
        I&apos;m currently open to new opportunities and collaborations. Whether
        you have a question or just want to say hi, my inbox is always open!
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {/* Anti-Spam Honeypot (Hidden from humans, visible to bots) */}
        <label htmlFor="botcheck" className="hidden">
          Leave this unchecked if you are human
          <input
            id="botcheck"
            type="checkbox"
            name="botcheck"
            className="hidden"
            autoComplete="off"
            tabIndex={-1}
          />
        </label>

        <div className="my-auto-grid gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="name"
            className="flex-1 p-5 outline-none border-[0.5px] border-gray-400 rounded-xl bg-white dark:bg-darkHover/30 dark:border-white/90"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="email"
            className="flex-1 p-5 outline-none border-[0.5px] border-gray-400 rounded-xl bg-white dark:bg-darkHover/30 dark:border-white/90"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25, delay: 0.1 }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="How can I help you?"
          rows={6}
          required
          className="w-full p-5 outline-none border-[0.5px] border-gray-400 rounded-xl bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.15 }}
        />

        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-300 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {status === "loading" ? "Sending..." : "Send Message"}

          <Image
            src={assets.right_arrow_white}
            alt="right-arrow"
            className="w-4"
          />
        </motion.button>

        <motion.p
          className={`mt-6 text-center font-medium ${
            status === "success"
              ? "text-green-600 dark:text-green-400"
              : status === "error"
              ? "text-red-600 dark:text-red-400"
              : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {result}
        </motion.p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
