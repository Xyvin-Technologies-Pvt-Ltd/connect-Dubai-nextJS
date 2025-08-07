import React from "react";
import Image from "next/image";

const WhoCanJoin = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col md:flex-row items-start gap-10 px-4 md:px-12">
        {/* Left: 3 Boxes */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Reusable Box Component */}
          {[
            {
              icon: "/bag_12271743 1.png",
              title: "Retail Vendors",
              items: ["Local food, garments, décor", "Handmade & ethnic goods"],
            },
            {
              icon: "/images/image.png",
              title: "Service Providers",
              items: ["Service Providers", "Housekeeping, AC service"],
            },
            {
              icon: "/images/image (2).png",
              title: "Business Associations",
              items: ["Tailors’ union, traders' forum", "Community support groups"],
            },
          ].map((box, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 shadow-md rounded-lg bg-white"
            >
              <div className="p-2 bg-gray-100 rounded-lg">
                <Image
                  src={box.icon}
                  alt="icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-700 font-semibold text-lg">{box.title}</span>
                <div className="flex flex-col sm:flex-row flex-wrap gap-2 mt-1">
                  {box.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <Image
                        src="/background.png"
                        alt="dot"
                        width={8}
                        height={8}
                        className="object-contain"
                      />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2">
          {/* Tag */}
          <div className="mt-4 inline-block">
            <div className="flex items-center gap-2 border-2 px-4 py-1 border-dashed border-[#E6E6E6] rounded-full">
              <Image src="/Icon.png" width={14} height={14} alt="Icon" />
              <p className="text-gray-700 font-medium text-sm">Who Can Join?</p>
            </div>
          </div>

          {/* Headings */}
          <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold font-sans">
            Built to Include
          </h2>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold font-sans bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent leading-snug">
            Everyone
          </h2>

          {/* Description */}
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Whether you’re a small shop owner, a freelancer, or part of a local
            business group—Connect Dubai gives you the tools to grow, connect,
            and thrive in the UAE market.
          </p>

          {/* Features */}
          <ul className="mt-4 space-y-3">
            {[
              "Easy Onboarding",
              "One Profile, Multiple Services",
              "Community-Driven Ecosystem",
            ].map((text, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src="/Icon Box.png"
                  width={20}
                  height={20}
                  alt="icon"
                  className="object-contain"
                />
                <p className="font-semibold text-sm text-gray-700">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
