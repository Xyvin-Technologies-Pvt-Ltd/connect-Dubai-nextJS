import React from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaFour = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400"], // 👈 Only include 700 for bold
  variable: "--font-plus-jakarta",
});
const jakartaSeven = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"], // 👈 Only include 700 for bold
  variable: "--font-plus-jakarta",
});
const ModernNetworking = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col md:flex-row items-cente gap-10 px-4 md:px-12">
        {/* Left: Image */}
        <div className="w-full flex justify-center md:w-1/2">
          <div className="w-[540px] bg-[#F0FFF0] h-[650px]">
            <div className=" rounded-xl p-4 md:p-10">
              <div className="relative w-[450px] h-[568px] md:h-[568px] rounded-xl overflow-hidden">
                <Image
                  src="/Rectangle 161125244.png"
                  alt="Networking"
                  fill
                  className="object-fit"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          {/* Tag */}
          <div className="mt-4 inline-block">
            <div className="flex items-center gap-2 border-2 px-4 py-1 border-dashed border-[#E6E6E6] rounded-full">
              <Image src="/Icon.png" width={14} height={14} alt="Icon" />
              <p
                style={{ letterSpacing: "-.32px" }}
                className={`${jakartaFour.variable} text-gray-700   text-sm`}
              >
                Modern Networking
              </p>
            </div>
          </div>

          {/* Headings */}
          <h2  style={{ letterSpacing: "-1.5px" }} className={`${jakartaSeven.variable} mt-4 text-3xl sm:text-4xl `}>
            Connect Dubai NFC
          </h2>
          <h2  style={{ letterSpacing: "-1.5px" }} className={`${jakartaSeven.variable} mt-2 text-3xl sm:text-4xl  bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent`}>
            Business Card – Your
          </h2>
          <h2  style={{ letterSpacing: "-1.5px" }} className={` ${jakartaSeven.variable} mt-2 text-3xl sm:text-4xl  bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent leading-snug`}>
            Digital Identity
          </h2>

          {/* Description */}
          <p className="mt-4 text-base text-gray-700">
            A quick overview of how we work together to make your edit best in
            class!
          </p>

          {/* Features */}
          <ul className="mt-4 space-y-3">
            {[
              "Share your digital profile with just one tap",
              "Add to phone contacts instantly",
              "Track visits and interactions",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/Icon Box.png"
                  width={20}
                  height={20}
                  alt="icon"
                  className="object-contain"
                />
                <p className="font-semibold text-sm">{text}</p>
              </li>
            ))}
          </ul>

          {/* Call to action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 border-2 border-dashed border-[#E6E6E6] rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <Image
                src="/Group 8.png"
                width={16}
                height={16}
                alt="Used Icon"
              />
              <p className="text-gray-700 font-semibold text-sm">
                Already used by early vendors
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Group 9.png"
                width={16}
                height={16}
                alt="Order Icon"
              />
              <p className="text-gray-700 font-semibold text-sm">
                Order yours from our team today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernNetworking;
