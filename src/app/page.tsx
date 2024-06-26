"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bars } from "react-loader-spinner";
import { verifyCaptcha } from "./lib/verifyCaptcha";

export default function Home() {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [messageText, setMessageText] = useState("");
  const [sended, setSended] = useState(false);
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsverified] = useState<boolean>(false);

  const wordCount = messageText.trim().split(/\s+/).length;

  async function handleCaptchaSubmission(token: string | null) {
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false));
  }

  function validateInputs() {
    const numberOnlyRegex = /^\d+$/;

    if (
      numberOnlyRegex.test(fromText.trim().replace(/\s+/g, "")) ||
      numberOnlyRegex.test(toText.trim().replace(/\s+/g, ""))
    ) {
      toast.warning("Form fields cannot contain only numbers.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return false;
    }

    if (wordCount < 3) {
      toast.warning("Message must contain at least 5 words.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return false;
    }

    return true;
  }

  function handlePost() {
    if (!validateInputs()) {
      return;
    }

    // Uncomment the following lines to enable CAPTCHA validation
    // if (!isVerified) {
    //   return toast.warning("Captcha Harus Diisi Terlebih Dahulu", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     transition: Bounce,
    //   });
    // }

    setLoading(true);
    axios
      .post("/api/", {
        text: messageText,
        from: fromText === "" ? "Anonymous" : fromText,
        to: toText === "" ? "Anonymous" : toText,
      })
      .then(function (response) {
        toast.success("📨 Pesan Telah Berhasil Dikirim !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setSended(true);
      })
      .catch(function (error) {
        toast.error(` ${error.response.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <ToastContainer />
      <Image
        width={500}
        height={500}
        src={"/boggie_fest.png"}
        alt={""}
        className="lg:top-10 lg:right-5 -top-20   lg:w-auto lg:h-72 absolute"
      ></Image>
      <div className="container w-full h-full parent flex flex-col lg:justify-center items-center px-8 py-8 lg:py-0 lg:px-0 relative">
        <Image
          width={40}
          height={40}
          src={"/Star 2.png"}
          alt={""}
          className="top-10 left-20 absolute"
        ></Image>
        <Image
          width={40}
          height={40}
          src={"/Star 2.png"}
          alt={""}
          className="bottom-10 right-20 absolute"
        ></Image>
        <div className="w-11/12 h-5/6 lg:w-1/2 lg:h-2/3 bg-white rounded-[20px] lg:rounded-[60px] blur-[1px] absolute -z-10">
          <span className="lg:w-8 lg:h-14 w-6 h-12 bg-[#FBD4A6] lg:left-32 left-12 rounded -top-4 absolute "></span>
          <span className="lg:w-8 lg:h-14 w-6 h-12 bg-[#FBD4A6] lg:right-32 right-12 rounded -top-4 absolute "></span>
        </div>

        <div className="lg:w-1/2 lg:h-2/3 w-full h-full flex rounded-[60px] px-6 lg:px-8 py-8 flex-col">
          {!sended ? (
            <>
              <h3 className="text-center text-[#6A6970] lg:visible invisible font-semibold text-2xl">
                Bogie Fess 4.0
              </h3>
              <small className="text-center text-[#6A6970] lg:visible invisible font-semibold text-[9px]">
                You Can Confess To Your Crush 😁
              </small>
              <div className="grid-cols-1 lg:grid-cols-2 bg-white shadow-[0px_0px_30px_0px_#CAC4E6] mt-8 rounded-2xl grid w-full">
                <div className="px-4 py-2 flex flex-col">
                  <h3 className="text-[#6A6970] font-semibold">From :</h3>
                  <p className="text-[9px] text-[#6A6970] py-0.5">
                    Your identity remains confidential and will be revealed.
                  </p>
                  <input
                    autoComplete="off"
                    type="text"
                    name="from_text"
                    id="from_text"
                    placeholder="optional"
                    onChange={(e) => setFromText(e.target.value)}
                    className="border-[1px] text-[#6A6970] font-normal text-sm border-[#CAC4E6] mt-2 mb-2 px-2.5 rounded-lg py-1.5 outline-none focus:ring-1 focus:ring-[#CAC4E6]"
                    value={fromText}
                  />
                </div>
                <div className="px-4 lg:py-2 mt-0 flex flex-col">
                  <h3 className="text-[#6A6970] font-semibold">To :</h3>
                  <p className="text-[9px] text-[#6A6970] py-0.5">
                    Write your message for someone
                  </p>
                  <input
                    type="text"
                    autoComplete="off"
                    name="to_text"
                    placeholder="optional"
                    id="to_text"
                    onChange={(e) => setToText(e.target.value)}
                    className="border-[1px] text-[#6A6970] font-normal text-sm border-[#CAC4E6] mt-2 mb-2 px-2.5 rounded-lg py-1.5 outline-none focus:ring-1 focus:ring-[#CAC4E6]"
                    value={toText}
                  />
                </div>
              </div>

              <textarea
                name=""
                className="border-[1px] text-[#6A6970] font-normal text-sm border-[#CAC4E6] mb-2 px-2.5 bg-white shadow-[0px_0px_30px_0px_#CAC4E6] mt-8 rounded-2xl resize-none w-full h-48 py-1.5 outline-none focus:ring-1 focus:ring-[#CAC4E6]"
                rows={5}
                cols={5}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Your Messages"
                value={messageText}
                required
                id=""
              ></textarea>
              <small className="text-[#6A6970] py-0.5">
                Word count: {wordCount}
              </small>
              <div className="flex flex-col justify-center items-center">
                {/* <ReCAPTCHA
                  sitekey={"6LfegAEqAAAAALN9jKDPREMiyUr99G1aLRCi-OBI"}
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                /> */}
                <button
                  onClick={handlePost}
                  className="h-8 mt-4 text-white flex justify-center items-center outline-none rounded-[15px] hover:bg-[#917BB0]/80 w-32 active:border-2 border-white bg-[#917BB0]"
                  disabled={loading}
                >
                  {loading ? (
                    <Bars
                      height="25"
                      width="25"
                      color="#fff"
                      ariaLabel="bars-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </>
          ) : (
            <div className="h-full w-full flex flex-col justify-center items-center">
              <h3 className="text-center text-[#917BB0] font-semibold text-3xl mb-3">
                Thank You!
              </h3>
              <h3 className="text-center text-[#917BB0] font-regular text-xl">
                Confess Kamu Sudah Kami Terima , Semoga Dibaca ya nantinya !!!{" "}
                <br /> Goodluck
              </h3>
              <button
                onClick={() => {
                  location.href = "https://google.com";
                }}
                className="h-8 mt-12 text-white outline-none rounded-[15px] hover:bg-[#917BB0]/80 w-32 active:border-2 border-white bg-[#917BB0]"
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
