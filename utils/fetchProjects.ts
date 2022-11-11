import { Project } from "../typings";

// const dev = process.env.NODE_ENV !== "production";
// export const server = dev
//   ? "http://localhost:3000"
//   : `https://personal-portfolio-beryl-ten.vercel.app`;

export const fetchProjects = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
  );
  const data = await res.json();
  console.log(data.projects);
  const projects: Project[] = data.projects;
  console.log(projects);
  return projects;
};
