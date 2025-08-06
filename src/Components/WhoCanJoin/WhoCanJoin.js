import React from "react";
import Image from "next/image";
const WhoCanJoin = () => {
  return (
    <div className="mt-20 flex items-center justify-center w-full text-center">
      <div className="flex md:px-28 flex-col md:flex-row md:items-cente md:gap-20 p-6">
        {/* Left Section with 3 boxes */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Box 1 */}
          <div className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-white">
            <div className="shadow-md rounded-lg">
              <Image
                src="/bag_12271743 1.png"
                width={40}
                height={6}
                className="object-cover"
              />
            </div>
            <div className="flex items-start  flex-col">
              <span className="text-gray-700 font-semibold">
                Retail Vendors
              </span>

              <div className="flex gap-2">
                <Image
                  src="/background.png"
                  width={5}
                  height={6}
                  className="object-cover py-2"
                />
                <span className="text-sm">Local food, garments, décor</span>
                <Image
                  src="/background.png"
                  width={5}
                  height={6}
                  className="object-cover py-2"
                />
                <span className="text-sm">Handmade & ethnic goods</span>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex items-center bg-[#F5F7FA] gap-4 p-4 shadow-md rounded-lg ">
            <div className="shadow-md rounded-lg">
              <Image
                src="/images/image.png"
                width={40}
                height={6}
                className="object-cover"
              />
            </div>
            <div className="flex items-start  flex-col">
              <span className="text-gray-700 font-semibold">
                Retail Vendors
              </span>

              <div className="flex gap-2">
                <Image
                  src="/background.png"
                  width={5}
                  height={6}
                  className="object-cover py-2"
                />
                <span className="text-sm">Local food, garments, décor</span>
                <Image
                  src="/background.png"
                  width={5}
                  height={6}
                  className="object-cover py-2"
                />
                <span className="text-sm">Handmade & ethnic goods</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex items-center gap-4 p-4 shadow-md rounded-lg bg-white">
            {/* <FaDatabase className="text-purple-600 text-3xl" /> */}
            <span className="text-gray-700 font-semibold">MongoDB</span>
          </div>
        </div>

        {/* Right Section with only one text */}
        <div className="w-full md:w-1/2">
          <p className="text-gray-800 border border-dashed border-gray-400 p-4 rounded-md">
            This is the right section with only one text. On small screens, it
            appears below the boxes. On larger screens, it stays to the right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoin;
