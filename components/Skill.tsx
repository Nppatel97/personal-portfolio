import { motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import React from "react";
import Sanity from "../public/sanityLogo.webp";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Image
          src={Sanity}
          alt="SanityLogo"
          className="rounded-full border border-gray-500 object-contain h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
