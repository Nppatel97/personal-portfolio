import { Skill } from "../typings";

// const dev = process.env.NODE_ENV !== "production";
// export const server = dev
//   ? "http://localhost:3000"
//   : `https://personal-portfolio-beryl-ten.vercel.app`;

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;
  console.log(skills);
  return skills;
};
