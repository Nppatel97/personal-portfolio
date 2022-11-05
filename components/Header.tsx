import React from "react";
import { SocialIcon } from "react-social-icons";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      <Link href={"#contact"}>
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
          <div className=" flex space-x-2 group transition-all duration-200 ease-in-out">
            <HiOutlineMail className="socialIcons group-hover:text-green-800 transition-all duration-200 ease-in-out" />
            <p className="uppercase hidden md:inline-flex group-hover:text-white transition-all duration-200 ease-in-out">
              Get In Touch
            </p>
          </div>
        </motion.div>
      </Link>
    </header>
  );
}
