/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useEffect, useState } from "react";
import Heart from "./component/_heart";
import Image from "next/image";
import axios from "axios";
import { TypeAnimation } from "react-type-animation";

export interface ItemsData {
  data: Data[];
}

export interface Data {
  _id: string;
  from: string;
  to: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
const page = () => {
  const [listData, setListData] = useState<ItemsData>();
  const [envelopeData, setEnvelopeData] = useState<Data>();
  const [isOpen, setIsOpen] = useState(false);
  function handleClick(propsData: Data) {
    setEnvelopeData(propsData);
    setIsOpen(true);
  }
  function getData() {
    axios
      .get("/api/")
      .then(function (response) {
        setListData(response.data);
      })
      .catch(function (error) {});
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {!isOpen ? (
        <>
          <div className="w-full h-full px-12 py-12 flex flex-col ">
            <h3 className="drop-shadow-lg text-center font-semibold text-2xl mb-8 text-[#FFFFFF]">
              Unlock my message, please!
            </h3>

            <Image
              width={40}
              height={40}
              src={"/Star 2.png"}
              alt={""}
              className="right-[36%] top-10 absolute"
            ></Image>

            <Image
              width={40}
              height={40}
              src={"/Star 2.png"}
              alt={""}
              className="left-[36%] top-10 absolute"
            ></Image>
            <Image
              width={30}
              height={30}
              src={"/Star 2.png"}
              alt={""}
              className="right-[34%] top-20 absolute"
            ></Image>

            <Image
              width={30}
              height={30}
              src={"/Star 2.png"}
              alt={""}
              className="left-[34%] top-20 absolute"
            ></Image>

            <div className="grid grid-cols-4 gap-y-12 mt-12">
              {listData?.data.map((item, index) => (
                <Heart
                  data={item}
                  key={index}
                  handleClick={() => handleClick(item)}
                ></Heart>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
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
                  <p>From : {envelopeData?.from}</p>
                  <p>To : {envelopeData?.to}</p>
                  <TypeAnimation
                    sequence={[envelopeData?.text || ""]}
                    wrapper="span"
                    cursor={true}
                    speed={75}
                  />
                </div>
                <div className="w-full flex justify-center items-center bottom-50 absolute">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="h-8 mt-4 text-white flex justify-center items-center outline-none rounded-[15px] hover:bg-[#917BB0]/80 w-32 active:border-2 border-white bg-[#917BB0]"
                  >
                    Close
                  </button>
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
        </>
      )}
    </>
  );
};

export default page;
