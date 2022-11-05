import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Experience, Technology } from "../typings";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
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
        <h4 className="text-2xl md:text-4xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-lg md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-2">
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
        <ul className="list-disc space-y-4 text-md h-64 p-5 pt-0 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-green-800">
          {experience.descPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
