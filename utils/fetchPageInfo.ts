import { PageInfo } from "../typings";

export const fetchPageInfos = async () => {
  const res = await fetch(`${process.env.NEXT_BASE_URL}/api/getPageInfos`);
  const data = await res.json();
  const pageInfos: PageInfo = data.pageInfos;
  console.log(pageInfos);
  return pageInfos;
};
