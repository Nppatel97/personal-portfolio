import { motion } from "framer-motion";
import React from "react";
import meImg from "../public/me.jpg";
import Image from "next/image";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative  flex overflow-hidden  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{
                y: 75,
                opacity: 0,
              }}
              transition={{ duration: 0.7 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                key={i}
                src={meImg}
                alt="Spotify Clone Image"
                width={500}
                height={500}
                className="overflow w-36 h-auto"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-light text-uppercase tracking-widest text-center">
                <span className="text-base tracking-normal font-semibold">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Spotify Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat architecto, doloremque, earum animi neque alias, at
                suscipit in molestiae tempore error pariatur aliquid quisquam
                quidem? Distinctio vel ratione maiores rerum.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[calc(50%-(350px/2))] bg-green-800/20 left-0 h-[350px] -skew-y-12"></div>
    </div>
  );
}
