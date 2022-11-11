import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutPic from "../public/me.jpg";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-0 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-0 py-5 bg-zinc-800 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="flex flex-col mt-28 md:grid-rows-1 md:grid-cols-3 md:gap-0 items-center">
        <motion.div
          className="mt-12 md:mt-0 mx-auto md:mx-0"
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <Image
            src={urlFor(pageInfo?.profileImg).url()}
            alt="My Image"
            width={700}
            height={700}
            className="mb-4 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-auto xl:w-[500px] xl:h-auto"
          />
        </motion.div>

        <div className="col-span-2 space-y-6 px-5 md:px-10 h-2/4 overflow-y-scroll customScrollbar">
          <h4 className="text-4xl font-semibold">
            A <span className="underline decoration-green-800">bit</span> about
            myself
          </h4>
          <p className="text-base">{pageInfo.backgroundInfo}</p>
        </div>
      </div>
    </motion.div>
  );
}
