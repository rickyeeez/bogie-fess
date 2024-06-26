"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const page = (props: Props) => {
  return (
    <main className="w-full h-full  flex flex-col justify-center items-center">
      <Image
        width={500}
        height={500}
        src={"/boggie_fest.png"}
        alt={""}
        className="lg:top-10 lg:right-5 -top-20   lg:w-auto lg:h-72 absolute"
      ></Image>
      <Image
        width={600}
        height={273}
        src={"/stars.png"}
        alt={""}
        className="top-10 left-20 absolute"
      ></Image>
      <Image
        width={600}
        height={273}
        src={"/stars.png"}
        alt={""}
        className="bottom-10 right-20 absolute"
      ></Image>
      <div className="h-60 w-[600px] flex items-end justify-center  relative">
        <div
          className="w-0 h-0 z-0 absolute -bottom-[160px]  head-env rounded
  border-l-[300px] border-l-transparent
  border-t-[160px] border-[#f2f2f2]
  border-r-[300px] border-r-transparent"
        ></div>
      </div>
      <div className="h-72 w-[600px] flex items-end bg-[#eeeeee] relative ">
        <div className="w-full  h-96 absolute flex justify-center items-center  z-10 slide-up">
          <div className="h-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-[#6A6970] w-[580px] bg-white flex flex-col px-4 py-2">
            <p>From : </p>
            <p>To : </p>
            <TypeAnimation
              sequence={[
                "Kamu tahu nggak? Aku baru sadar kalau kamu itu kayak Wi-Fi,soalnya setiap kamu di dekatku, sinyal cinta aku langsung fullbar!",
              ]}
              wrapper="span"
              cursor={true}
            />
          </div>
        </div>

        {/* LEFT BORDER*/}
        <div
          className="w-0 h-0 z-30
  border-t-[144px] border-t-transparent
  border-l-[300px] border-[#f2f2f2]
  border-b-[144px] border-b-transparent"
        ></div>
        <div
          className="w-0 h-0 z-20 absolute left-0
  border-t-[146px] border-t-transparent
  border-l-[302px] border-[#dbdbdb]
  border-b-[144px] border-b-transparent"
        ></div>

        {/* RIGHT BORDER*/}
        <div
          className="w-0 h-0  z-20 
  border-t-[144px] border-t-transparent
  border-r-[300px] border-[#f2f2f2]
  border-b-[144px] border-b-transparent"
        ></div>
        <div
          className="w-0 h-0  z-10 absolute right-0
  border-t-[146px] border-t-transparent
  border-r-[302px] border-[#dbdbdb]
  border-b-[144px] border-b-transparent"
        ></div>
        {/* BOTTOM BORDER*/}
        <div
          className="w-0 h-0 z-50 absolute bottom-0
  border-l-[300px] border-l-transparent
  border-b-[160px] border-[#f2f2f2]
  border-r-[300px] border-r-transparent"
        ></div>
        <div
          className="w-0 h-0 z-40 absolute bottom-0
  border-l-[300px] border-l-transparent
  border-b-[162px] border-[#dbdbdb]
  border-r-[300px] border-r-transparent"
        ></div>
      </div>
    </main>
  );
};

export default page;
