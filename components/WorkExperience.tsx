import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../typings";
import ExperienceCard from "./ExperienceCard";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="h-screen md:h-fit w-full flex space-x-5 overflow-x-scroll overflow-y-hidden py-9 snap-x snap-mandatory scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-green-800">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
}
