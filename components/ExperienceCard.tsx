import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="text-left flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[115%] mt-28 md:w-[600px] xl:w-[900px] snap-center bg-zinc-700 p-10">
      {/* <motion.div>
        <Image
          src=""
          alt=""
          height={400}
          width={400}
          className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        />
      </motion.div> */}
      <div className="px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl font-light">Front-end Developer</h4>
        <p className="font-bold text-lg md:text-2xl mt-1">
          EPIC Semiconductors
        </p>
        <div className="flex space-x-2 my-2">{/* Tech Used */}</div>
        <p className="uppercase py-5 text-gray-300 text-sm">
          Started:000 - Ended:000
        </p>
        <ul className="list-disc space-y-4 ml-5 text-md">
          <li>This tet is the reperesent of nonsense. Will this wok</li>
          <li>This tet is the reperesent of nonsense</li>
          <li>This tet is the reperesent of nonsense</li>
          <li>This tet is the reperesent of nonsense</li>
          <li>This tet is the reperesent of nonsense</li>
        </ul>
      </div>
    </article>
  );
}
