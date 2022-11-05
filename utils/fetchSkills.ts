import { Skill } from "../typings";

const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : `${process.env.VERCEL_URL}`;

export const fetchSkills = async () => {
  const res = await fetch(`${server}/api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;
  console.log(skills);
  return skills;
};
