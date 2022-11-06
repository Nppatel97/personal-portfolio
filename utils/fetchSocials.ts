import { Social } from "../typings";

// const dev = process.env.NODE_ENV !== "production";
// export const server = dev
//   ? "http://localhost:3000"
//   : `https://personal-portfolio-beryl-ten.vercel.app`;

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);
  const data = await res.json();
  const socials: Social[] = data.socials;
  console.log(socials);
  return socials;
};
