import React from "react";
import Image from "next/image";

const About = () => {
  const cards = [
    {
      heading: "Connect with industry Associations (B2B)",
      description:
        "Build strong business partnerships within the UAE ecosystem.",
      image: "/Icon Content.png",
    },
    {
      heading: "Sell to Customers (B2C – via App & Web)",
      description:
        "Reach a wider audience and grow sales through our digital marketplace.",
      image: "/Icon Content (1).png",
    },
    {
      heading: "Offer Bookable Services",
      description: "Let customers schedule appointments or services with ease.",
      image: "/Icon Content (2).png",
    },
    {
      heading: "Use NFC-Enabled  Digital Cards",
      description: "Share your profile and offerings instantly with a tap.",
      image: "/Icon Content (3).png",
    },
    {
      heading: " Manage Sales, Payments & Visibility",
      description:
        "Track performance, handle transactions, and boost your online presence.",
      image: "/Icon Content (4).png",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-8 px-4">
      <div className="w-full max-w-[1200px] flex flex-col items-center">
        {/* About button */}
        <button className="border-2 border-[#E6E6E6] justify-center gap-2 flex items-center border-dashed rounded-full px-4 py-2 text-sm sm:text-base">
          <Image
            src="/Icon.png"
            alt="About Icon"
            width={18}
            height={18}
            className="object-contain"
          />
          <span>About</span>
        </button>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="font-extrabold font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            A Smart Digital Platform for{" "}
            <span className="bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
              UAE-
            </span>
          </h1>
          <h1 className="font-bold font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
            Based Businesses
          </h1>
        </div>

        {/* Subheading */}
        <p className="mt-6 text-center font-light text-base sm:text-lg md:text-xl max-w-3xl">
          Connect Dubai is a digital-first ecosystem where businesses,
          communities, and customers meet. Whether you sell products or offer
          services, our platform helps you:
        </p>

        {/* Cards */}
        <div className="p-4 mt-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-24 w-full">
                  <Image
                    src={card.image}
                    alt={card.heading}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-md text-center font-semibold">
                    {card.heading}
                  </h2>
                  <p className="text-gray-600 text-center text-sm mt-2">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info Section */}
        <div className="mt-10 border-2 border-dashed border-[#E6E6E6] rounded-full px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <Image src="/Calendar.png" alt="Calendar" width={26} height={26} />
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Launch Expected: 08/2025
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/Magnifier.png" alt="Magnifier" width={26} height={26} />
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Currently under active development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
