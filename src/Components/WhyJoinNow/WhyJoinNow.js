import React from "react";
import Image from "next/image";

const WhyJoinNow = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 mt-14  w-full">
      <div className="flex w-full flex-col">
        {/* Tag */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 border-2 px-4 py-1 border-dashed border-[#E6E6E6] rounded-full">
            <Image src="/Icon.png" width={10} height={14} alt="Icon" />
            <p className="text-gray-700 font-medium text-sm">Who Join Now?</p>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold font-sans">
          Be Part of Our{" "}
          <span className="bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
            Launch Community
          </span>
        </h2>

        {/* Description */}
        <p className="mt-2 text-base text-center text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We are in the onboarding & partner setup phase. Early members will benefit from:
        </p>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row gap-4 bg-[#FBFAF9] rounded-lg p-4">
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto">
              <Image
                src="/images/Image → KssYJ5XQiMWvCPFVF4ruEHpqr8.jpg (1).png"
                width={278}
                height={346}
                className="w-full h-full object-fit rounded-md"
                alt="Early Access"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-xl font-semibold text-gray-800">Early Access</h1>
              <p className="text-sm text-gray-700 mt-2">
                Get exclusive early access to all app features before public launch, helping you stay ahead in the market.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row gap-4 bg-[#FBFAF9] rounded-lg p-4">
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto">
              <Image
                src="/images/Image → qI7iCkveONKaBdYHAAAIBXThNCI.jpg.png"
                width={278}
                height={346}
                className="w-full h-full object-fit rounded-md"
                alt="Free Promotion"
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-xl font-semibold text-gray-800">Free Promotion</h1>
              <p className="text-sm text-gray-700 mt-2">
                Enjoy complimentary promotional opportunities as part of our launch campaign to boost your visibility.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 bg-[#FBFAF9] rounded-lg p-4">
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-xl font-semibold text-gray-800">Priority Listing</h1>
              <p className="text-sm text-gray-700 mt-2">
                Secure a top spot in product/service listings and reach more potential customers from day one.
              </p>
            </div>
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto">
              <Image
                src="/images/Image → eGfW4Q8EGTzt2Y8zClrpCPEVp1A.jpg.png"
                width={278}
                height={346}
                className="w-full h-full object-fit rounded-md"
                alt="Priority Listing"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col-reverse sm:flex-row gap-4 bg-[#FBFAF9] rounded-lg p-4">
            <div className="flex flex-col justify-between w-full">
              <h1 className="text-xl font-semibold text-gray-800">Dedicated Support</h1>
              <p className="text-sm text-gray-700 mt-2">
                Receive personal assistance during onboarding to ensure smooth setup and optimized performance.
              </p>
            </div>
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto">
              <Image
                src="/images/Image → 0WdpgC5pAmebfFpm0m5eBN9hQ.jpg.png"
                width={278}
                height={346}
                className="w-full h-full object-fit rounded-md"
                alt="Dedicated Support"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinNow;
