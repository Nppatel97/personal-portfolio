import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello! I'm Nisarg Patel",
      "Front-End lover",
      "Full-stack learner",
      "UI/UX creator",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center ">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor />
      </h1>
    </div>
  );
}
