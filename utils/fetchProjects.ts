import { Project } from "../typings";

const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : `${process.env.VERCEL_URL}`;

export const fetchProjects = async () => {
  const res = await fetch(`${server}/api/getProjects`);
  const data = await res.json();
  const projects: Project[] = data.projects;
  console.log(projects);
  return projects;
};
