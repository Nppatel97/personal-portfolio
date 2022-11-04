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
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
      >
        <Image
          src={Sanity}
          alt="SanityLogo"
          className="rounded-full border border-gray-500 object-contain h-20 w-20 md:h-22 md:w-22 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:h-22 md:w-22 xl:w-28 xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-semibold text-black opacity-100">
            Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
