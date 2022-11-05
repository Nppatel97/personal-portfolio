import { Experience } from "../typings";

const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : "https://personal-portfolio-two-steel.vercel.app/";

export const fetchExperiences = async () => {
  const res = await fetch(`${server}/api/getExperiences`);
  const data = await res.json();
  const experiences: Experience[] = data.experiences;
  console.log(experiences);
  return experiences;
};
