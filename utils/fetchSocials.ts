import { Social } from "../typings";

// const dev = process.env.NODE_ENV !== "production";
// export const server = dev
//   ? "http://localhost:3000"
//   : "https://personal-portfolio-two-steel.vercel.app";

export const fetchSocials = async () => {
  const res = await fetch(`http://localhost:3000/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;
  console.log(socials);
  return socials;
};
