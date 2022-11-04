import React from "react";

type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative text-center md:text-left xl:flex-row mx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Let's Talk
      </h3>
    </div>
  );
}

export default ContactMe;
