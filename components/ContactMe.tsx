import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import { useForm } from "react-hook-form";
import { PageInfo } from "../typings";
type Props = {
  pageInfo: PageInfo;
};

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    window.location.href = `mailto:nisarg.patel97@outlook?subject=${data.subject}&body=(Msg from nisargppatel.com) Hi there, my name is ${data.name}. ${data.message} (${data.email})`;
  });
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left xl:flex-row mx-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-y-scroll">
      <h3 className="absolute top-0 py-5 w-full bg-zinc-800 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 px-5 pt-10 w-screen">
        <h4 className="font-light text-2xl text-center">
          Looking for a professional Developer? Your search ends here.{" "}
          <span className="underline decoration-green-800/80">Let's Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <AiOutlinePhone className="w-7 h-7 text-green-800 animate-pulse" />
            <p className="text-xl">{pageInfo.cellNumber}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <HiOutlineMail className="w-7 h-7 text-green-800 animate-pulse" />
            <p className="text-xl">{pageInfo.email}</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <GoLocation className="w-7 h-7 text-green-800 animate-pulse" />
            <p className="text-xl">{pageInfo.address}</p>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-col-2 w-full mx-auto max-w-xl"
        >
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="E-mail"
            className="contactInput"
            type="email"
          />
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput md:col-span-2"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput md:col-span-2"
            rows={5}
          />
          <button
            type="submit"
            className="bg-green-800/50 px-8 py-4 rounded-md text-white font-semibold uppercase tracking-[10px] md:col-span-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
