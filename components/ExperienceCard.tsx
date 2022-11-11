import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="text-left flex flex-col overflow-y-scroll rounded-lg items-center h-[95%] md:h-fit w-screen mt-14 md:w-[600px] xl:w-[900px] snap-center bg-zinc-700 scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-green-800">
      {/* <motion.div>
        <Image
          src=""
          alt=""
          height={400}
          width={400}
          className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover"
        />
      </motion.div> */}
      <div className="flex flex-col justify-evenly px-0 md:px-10">
        <div className="p-6 pb-2 sticky top-0 bg-zinc-700">
          <h4 className="text-2xl md:text-4xl font-light">
            {experience.jobTitle}
          </h4>
          <p className="font-bold text-lg md:text-2xl mt-1">
            {experience.company}
          </p>
          <div className="grid grid-cols-5 md:grid-cols-8 lg:flex lg:space-x-2 gap-2 my-2">
            {experience.technologies.map((tech) => (
              <Image
                src={urlFor(tech.image).url()}
                alt={`${tech.title} logo`}
                width={500}
                height={500}
                className="h-10 w-10 rounded-full"
                key={tech._id}
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300 text-sm">
            {new Date(experience.dateStarted).toDateString()} -{" "}
            {experience.currentlyWorkingHere
              ? "Present"
              : new Date(experience.dateEnded).toDateString()}
          </p>
        </div>

        <ul className="list-disc space-y-4 text-md p-7 ml-4 pt-0">
          {experience.descPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
