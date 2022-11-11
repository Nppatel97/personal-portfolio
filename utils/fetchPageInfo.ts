import { PageInfo } from "../typings";

// const dev = process.env.NODE_ENV !== "production";
// export const server = dev
//   ? "http://localhost:3000"
//   : `https://personal-portfolio-beryl-ten.vercel.app`;

export const fetchPageInfo = async () => {
  const res = await fetch(
    `https://${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
  );
  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;
  // console.log(pageInfo);
  return pageInfo;
};
