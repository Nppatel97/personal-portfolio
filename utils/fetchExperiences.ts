import { Experience } from "../typings";

// const dev = process.env.NODE_ENV !== "production";

// export const server = dev
//   ? "http://localhost:3000"
//   : `https://personal-portfolio-beryl-ten.vercel.app`;

export const fetchExperiences = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log(experiences);
  return experiences;
};
