import React from "react";
import Image from "next/image";

const UpcomingFeatures = () => {
  return (
    <div className="mt-14 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Content */}
        <div className="w-full md:w-1/2">
          {/* Dashed Tag */}
          <div className="inline-block">
            <div className="flex items-center gap-2 border-2 px-4 py-1 border-dashed border-[#E6E6E6] rounded-full">
              <Image src="/Icon.png" width={14} height={14} alt="Icon" />
              <p className="text-gray-700 font-medium text-sm">
                Upcoming Features
              </p>
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">
            What’s Coming Next to{" "}
            <span className="bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
              Connect Dubai?
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 text-base text-gray-700 leading-relaxed">
            Smarter tools are on the way — from a powerful vendor dashboard to
            secure payments and instant WhatsApp alerts, all in one platform to
            grow your business.
          </p>

          {/* Features List */}
          <ul className="mt-4 space-y-3">
            {[
              "Vendor & Association Dashboard",
              "Product & Service Listings",
              "Booking Calendar",
              "Secure UAE Payment Integration",
              "WhatsApp Notifications",
              "Reviews & Ratings",
              "Digital Card Analytics",
            ].map((text, index) => (
              <li key={index} className="flex items-start gap-2">
                <Image
                  src="/Icon Box.png"
                  width={20}
                  height={20}
                  alt="icon"
                  className="object-contain mt-1"
                />
                <p className="font-semibold text-sm text-gray-800">{text}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-[#F0FFF0] rounded-xl p-4 w-full max-w-md">
            <div className="relative w-full h-64 md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/images/image → btADrUjPQQxFkgxGRglZy4zvIY.webp.png"
                alt="Networking"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
