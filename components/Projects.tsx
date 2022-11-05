import { motion } from "framer-motion";
import React from "react";
import meImg from "../public/me.jpg";
import Image from "next/image";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <div className="h-screen relative  flex overflow-hidden  flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-mandatory snap-x z-20 scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-green-800">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
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
                key={project._id}
                src={meImg}
                alt="Spotify Clone Image"
                width={500}
                height={500}
                className="overflow w-36 h-auto"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-light text-center">
                <span className="font-semibold ">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.summary.split(".")[0]}
              </h4>
              <div className="flex items-center justify-center space-x-3">
                {project.technologies.map((tech) => (
                  <Image
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt={`${tech.title} logo`}
                    width={500}
                    height={500}
                    className="h-10 w-10 rounded-full"
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[calc(50%-(350px/2))] md:top-[calc(50%-200px)] bg-green-800/20 left-0 h-[350px] md:h-[400px] -skew-y-12"></div>
    </div>
  );
}
