import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="h-screen flex relative text-center md:text-left xl:flex-row mx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-0 py-5 uppercase tracking-[20px] text-gray-500 text-2xl bg-zinc-800">
        Skills
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5 mt-10 h-4/5 overflow-y-scroll customScrollbar px-5">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill
            key={skill._id}
            image={urlFor(skill.image).url()}
            title={skill.title}
          />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill
            key={skill._id}
            image={urlFor(skill.image).url()}
            title={skill.title}
            directionLeft
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
