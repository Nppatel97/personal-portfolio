import { PageInfo } from "../typings";

const dev = process.env.NODE_ENV !== "production";
export const server = dev
  ? "http://localhost:3000"
  : `${process.env.VERCEL_URL}`;

export const fetchPageInfo = async () => {
  const res = await fetch(`${server}/api/getPageInfo`);
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  console.log(pageInfo);
  return pageInfo;
};
