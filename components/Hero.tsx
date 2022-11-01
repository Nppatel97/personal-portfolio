import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import profilePic from "../public/profilePic.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const myLoader = () => {
    return `https://photos.app.goo.gl/c57REfpfc7M7EX2b9`;
  };
  const [text, count] = useTypewriter({
    words: [
      "Hello! I'm Nisarg Patel",
      "Full-Stack-Lover.js",
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
          src={profilePic}
          className="relative rounded-full h-32 w-32 mx-auto"
          alt="Nisarg's Profile Picture"
          width={500}
          height={500}
        />
        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
            Software Engineer
          </h2>
          <h1 className="text-5xl lg:6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor />
          </h1>
          <div>
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
