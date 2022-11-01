import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutPic from "../public/me.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
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
          src={aboutPic}
          alt="My Image"
          width={700}
          height={700}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A <span className="underline decoration-green-800">bit</span> about
          myself
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          suscipit nostrum fuga ex, explicabo cumque quam hic facilis quisquam
          repellat dolorem neque? Reprehenderit voluptas eligendi quod aut
          culpa, perferendis atque? Quia nulla vel ipsam aut illum non
          temporibus voluptas placeat, dicta delectus similique praesentium
          inventore consequatur ducimus ex fugiat quisquam repellat minus enim a
          dignissimos eius repudiandae magni? Aliquam, commodi.
        </p>
      </div>
    </motion.div>
  );
}
