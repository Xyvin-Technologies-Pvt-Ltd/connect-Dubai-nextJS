import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const Footer = () => {
  return (
    <div className="mt-14">
      <div className="w-full pt-18 bg-[#002B21] flex items-center flex-col px-4">
        {/* Scrolling Text Row */}
        <div className="flex flex-wrap justify-center gap-4 max-w-[1253px] w-full">
          {Array(7)
            .fill(0)
            .map((_, i) => (
              <React.Fragment key={i}>
                <Image
                  src="/images/Vector.png"
                  alt="Networking"
                  width={18}
                  height={10}
                  className="object-cover"
                />
                <span className="bg-gradient-to-r text-md from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
                  Connect Dubai
                </span>
              </React.Fragment>
            ))}
        </div>

        {/* Let's Connect Section */}
        <div className="max-w-[1317px] w-full mt-14 flex items-center flex-col text-center">
          <div className="max-w-[633px] w-full">
            <div className="flex gap-6 md:gap-10 items-center justify-center">
              <div className="h-[1px] w-[140px] bg-gradient-to-r from-white/10  to-white/20"></div>
              <h2 className="text-white whitespace-nowrap">Let&apos;s Connect</h2>
              <div className="h-[1px] w-[140px] bg-gradient-to-r from-white/10  to-white/20"></div>
            </div>
            <h1 className="font-jakarta text-[32px] md:text-[40px] font-medium text-white mt-4">
              Let&apos;s build
            </h1>
            <h1 className="font-jakarta text-[32px] md:text-[40px] font-medium text-white">
              Dubai&apos;s future, together.
            </h1>
            <p className="font-jakarta text-[12px] font-thin text-white mt-2">
              We&apos;re empowering UAE-based businesses with digital tools that
              connect, grow, and thrive
            </p>
            <p className="font-jakarta text-[12px] font-thin text-white">
              Let&apos;s talk about how Connect Dubai can support your vision.
            </p>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="max-w-[633px] w-full flex flex-col sm:flex-row items-center mt-10 justify-center gap-1">
          <div className="h-[1px] w-[140px] bg-gradient-to-r from-white/10  to-white/20"></div>
          <button className="flex  outline-2 outline-white/10 outline-offset-4 items-center gap-3 text-[#002B21] bg-white px-6 py-2 shadow-lg hover:shadow-xl rounded-full hover:bg-[#014438] transition-all duration-300">
            <span className=" font-jakarta text-[12px] font-medium text-black">
              Contact Us
            </span>
          </button>
          <div className="h-[1px] w-[140px] bg-gradient-to-r from-white/10  to-white/20"></div>
        </div>

        {/* Footer Bottom Section */}
        <div className="w-full max-w-[1237px] flex flex-col mt-20">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 w-full">
            {/* Left Logo and Socials */}
            <div className="flex-1">
              <Image
                src="/images/connect_dubai_golden_logo-01[1] 1.png"
                alt="Networking"
                width={48}
                height={10}
                className="object-cover"
              />
              <p className="text-white text-[12px] font-jakarta font-normal mt-2">
                Streamline your workflow, boost sales,
              </p>
              <p className="text-white text-[12px] font-jakarta font-normal">
                and grow smarter.
              </p>
              <div className="mt-2 flex gap-3 items-center">
                <FaInstagram className="text-white" size={16} />
                <Image
                  src="/images/Link - Desktop → SVG.png"
                  alt="Networking"
                  width={12}
                  height={10}
                  className="object-cover"
                />
                <Image
                  src="/images/Link - Desktop → SVG (1).png"
                  alt="Networking"
                  width={12}
                  height={10}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Product Links */}
            <div className="flex-1">
              <h1 className="font-jakarta font-bold text-white">Product</h1>
              {[
                "Home",
                "About Us",
                "Who Can Join?",
                "Why Join Now?",
                "Upcoming Features",
              ].map((item, idx) => (
                <h1
                  key={idx}
                  className="font-jakarta text-[12px] mt-1 font-normal text-white"
                >
                  {item}
                </h1>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex-1 lg:items-center flex flex-col">
              <h1 className="font-jakarta font-bold text-white">Legal</h1>
              <h1 className="font-jakarta text-[12px] mt-1 font-normal text-white">
                Terms of Service
              </h1>
              <h1 className="font-jakarta text-[12px] mt-1 font-normal text-white">
                Privacy Policy
              </h1>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-10 w-full text-white pb-10 flex justify-center lg:justify-end">
            <p className="font-inter font-normal text-sm text-center lg:text-right">
              © 2025 Connect Dubai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
