import React from "react";
import { SiLinkedin } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-row items-center space-x-4 socialIcons p-5"
      >
        <SiLinkedin />
        <SiLinkedin />
        <SiLinkedin />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex  items-center text-gray-400 cursor-pointer p-5"
      >
        <HiOutlineMail className="socialIcons" />
        <p className="uppercase hidden md:inline-flex">Get In Touch</p>
      </motion.div>
    </header>
  );
}
