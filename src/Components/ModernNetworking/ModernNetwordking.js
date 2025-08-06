import React from "react";
import Image from "next/image";
const ModernNetwordking = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col md:flex-row items-cente gap-10 p-6">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 px-20">
          <div className="p-10 bg-[#F0FFF0] rounded-xl">
            <div className="relative w-full h-64 md:h-100">
              <Image
                src="/Rectangle 161125244.png" // image inside /public folder
                alt="Descriptive Alt Text"
                fill
                className="object-fit rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="w-auto ">
          <div className="mt-8 w-full">
            <div className="inline-block  h-10 ">
              <div className="flex h-6 items-center justify-center border-2 px-4 py-1 border-dashed border-[#E6E6E6] rounded-full ">
                <Image
                  src="/Icon.png"
                  width={14}
                  height={6}
                  className="object-fit"
                />
                <p className="text-gray-700 font-medium">Modern Netwoking</p>
              </div>{" "}
            </div>
          </div>
          <div className="mt-3">
            <span className="font-bold text-cente font-sans text-4xl">
              Connect Dubai NFC
            </span>
          </div>
          <div className="mt-3">
            <span className=" font-bold font-sans text-4xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
              Business Card – Your
            </span>
          </div>
          <div className="mt-3">
            <span className=" font-bold font-sans text-4xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
              Digital Identity
            </span>
          </div>
          <div className="mt-3">
            <span className=" font-thin font-sans text-md ">
              A quick overview of how we work together to make your edit best in
              class!
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className=" h-6 ">
              <Image
                src="/Icon Box.png"
                width={26}
                height={10}
                className="object-cover"
              />
            </div>
            <p className=" font-semibold font-sans text-sm ">
              Share your digital profile with just one tap
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className=" h-6 ">
              <Image
                src="/Icon Box.png"
                width={26}
                height={10}
                className="object-cover"
              />
            </div>
            <p className=" font-semibold font-sans text-sm ">
              Add to phone contacts instantly
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className=" h-6 ">
              <Image
                src="/Icon Box.png"
                width={26}
                height={10}
                className="object-cover"
              />
            </div>
            <p className=" font-semibold font-sans text-sm ">
              Track visits and interactions
            </p>
          </div>
          <div className="">
            <div className="mt-3 border-2 gap-4 flex items-center justify-center border-dashed border-[#E6E6E6] rounded-full px-4 py- text-center ">
              <div className="flex items-center">
                <div className=" flex items-center h-6 ">
                  <Image
                    src="/Group 8.png"
                    width={14}
                    height={6}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 font-semibold font-sans text-sm">
                  Already used by early vendors
                </p>
              </div>
              <div className="flex items-center">
                <div className=" flex items-center h-6 ">
                  <Image
                    src="/Group 9.png"
                    // alt={card.title}
                    width={14}
                    height={6}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 font-semibold font-sans text-sm">
                  Order yours from our team today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernNetwordking;
