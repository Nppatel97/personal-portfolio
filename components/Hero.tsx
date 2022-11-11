import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi! I'm ${pageInfo?.name}`,
      "Full-Stack-Dev.js",
      "♪ Music Lover",
      "#LifeLongLearner",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden object-cover">
      <BackgroundCircles />
      <div className="z-10">
        <Image
          src={urlFor(pageInfo?.profileImg).url()}
          className="relative rounded-full h-32 w-32 mx-auto"
          alt="Nisarg's Profile Picture"
          width={500}
          height={500}
        />
        <div className="overflow-visible w-screen px-5">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
            {pageInfo?.role}
          </h2>
          <h1 className="text-3xl md:text-5xl lg:6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor />
          </h1>
          <div className="grid grid-cols-2 md:inline">
            <Link href="#experience">
              <button className="heroBtn">Experience</button>
            </Link>
            <Link href="#projects">
              <button className="heroBtn">Projects</button>
            </Link>
            <Link href="#skills">
              <button className="heroBtn">Skills</button>
            </Link>
            <Link href="#about">
              <button className="heroBtn">About</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
