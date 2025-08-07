import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "700", // 👈 Only include 700 for bold
  variable: "--font-plus-jakarta",
});
const jakartaFive = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500"], // 👈 Only include 700 for bold
  variable: "--font-plus-jakarta",
});
const Body = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full max-w-[1440px] px-4 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center items-start">
          <div className="max-w-2xl">
            <h1
              style={{ letterSpacing: "-4px" }}
              className={`${jakarta.variable}  text-4xl sm:text-5xl md:text-6xl`}
            >
              Connect. Grow. Trade
            </h1>
            <div className="flex items-center">
              <h1
                style={{ letterSpacing: "-4px" }}
                className={`${jakarta.variable} mt-4 font-sans text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent`}
              >
                All in One
              </h1>
              <Image
                src="/images/Icon Stack → Icon 1 (1).png"
                width={70}
                height={60}
                className="object-contain pt-6"
              />
            </div>
            <div className="flex mt-4 flex-wrap items-center">
              <h1
                style={{ letterSpacing: "-4px" }}
                className={`${jakarta.variable} text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent`}
              >
                Dubai-Based
              </h1>
              <span
                style={{ letterSpacing: "-4px" }}
                className={`${jakarta.variable} text-4xl sm:text-5xl md:text-6xl ml-2`}
              >
                Platform
              </span>
            </div>
            <h4
              style={{ letterSpacing: "-.18px", fontSize: "18px" }}
              className={`${jakartaFive.variable} mt-6 text-base sm:text-lg`}
            >
              A powerful community + commerce platform for UAE’s business
              ecosystem.
            </h4>
            <h4
              style={{ letterSpacing: "-.18px", fontSize: "18px" }}
              className={`${jakartaFive.variable} text-base sm:text-lg`}
            >
              Now onboarding vendors, service providers, and associations.
            </h4>
            <button className="flex mt-4 items-center gap-1  bg-[#002B21] text-white px-3 py-2  rounded-full  ">
              <span
                style={{ letterSpacing: "-1px", fontSize: "18px" }}
                className={`${jakartaFive.variable} shadow-xl text-base`}
              >
                Become a Vendour
              </span>
              <span className="text-[#002B21] bg-[#FFFFFF] p-1.5 rounded-full ">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/Rectangle.png"
            alt="Banner"
            width={350}
            height={300}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
