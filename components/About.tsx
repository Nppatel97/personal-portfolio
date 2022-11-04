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
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-3 md:gap-0 items-center">
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
            src={aboutPic}
            alt="My Image"
            width={700}
            height={700}
            className="mb-4 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-auto xl:w-[500px] xl:h-auto"
          />
        </motion.div>

        <div className="col-span-2 space-y-6 px-0 md:px-10">
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
            inventore consequatur ducimus ex fugiat quisquam repellat minus enim
            a dignissimos eius repudiandae magni? Aliquam, commodi.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
