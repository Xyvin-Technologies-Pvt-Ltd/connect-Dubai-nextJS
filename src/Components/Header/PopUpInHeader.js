import React from "react";
import Image from "next/image";
const PopUpInHeader = () => {
  return (
    <div className=" w-full bg-[#002B21] md:h-[75px] h-10 flex items-center justify-center ">
      <div className="flex items-center justify-center">
         <Image
                  src="/images/Vector.png"
                  alt="Networking"
                  width={18}
                  height={10}
                  className="object-cover"
                />
        <h1 className="text-sm font-inter font-normal sm:text-base md:text-lg lg:text-lg text-white font-boldtext-center px-4">
          Explore your next move with Connect Dubai !
        </h1>
      </div>
    </div>
  );
};

export default PopUpInHeader;
