import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const LetsConnect = () => {
  return (
    <div className="mt-14 mb-10 px-4">
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1240px] bg-[#F1F5F9] flex flex-col md:flex-row md:h-[338px] rounded-2xl overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
                Let’s Connect.
              </h2>
              <h2 className="mt-4 text-base text-center md:text-left">
                Let’s Build the Connect Dubai Network Together
              </h2>
              <div className="mt-6 flex justify-center md:justify-start">
                <button className="flex items-center gap-3 text-[#002B21] bg-white px-6 py-2 shadow-lg hover:shadow-xl rounded-full hover:bg-[#014438] transition-all duration-300">
                  <span className="font-medium text-base">Book a Call</span>
                  <span className="text-white bg-[#002B21] p-1.5 rounded-full shadow-md">
                    <ArrowRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
            <div className="w-full max-w-[500px] bg-[#A9C3AA] h-[250px] md:h-[300px] rounded-2xl flex items-center justify-center">
              <div className="relative w-[90%] h-[180px] md:h-[270px] rounded-xl overflow-hidden">
                <Image
                  src="/images/GfXEsVUTB92Fh107Arc6r2iW2VQ.png.png"
                  alt="Networking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
