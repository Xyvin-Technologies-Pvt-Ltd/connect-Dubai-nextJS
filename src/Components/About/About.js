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
    <div>
      <div className="w-full flex flex-col items-center pt-8 justify-cente ">
        <div className="w-[1100px] flex flex-col items-center ">
          <div>
            <button className="border-2 border-[#E6E6E6] justify-center gap-1 flex items-center border-dashed rounded-full px-4 py-2">
              <Image
                src="/Icon.png"
                alt="Banner"
                width={15}
                height={15}
                //  fill
                className=" object-cover"
              />{" "}
              <span> About</span>
            </button>
          </div>
          <div className="mt-3">
            <span className="font-extrabold text-cente font-sans text-6xl">
              A Smart Digital Platform for
            </span>
            <span className="px-6 font-bold mt-4 font-sans text-6xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
              UAE-
            </span>
          </div>
          <div className="mt-3">
            <span className="px-6 font-bold mt-4 font-sans text-6xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
              Based Businesses
            </span>
          </div>
          <div className="mt-3">
            <h1 className="text-center font-light text-2xl">
              Connect Dubai is a digital-first ecosystem where businesses,
              communities, and customers meet. Whether you sell products or
              offer services, our platform helps you:
            </h1>
          </div>{" "}
          <div>
            <div className="p-4 mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl  overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative  h-20 flex items-center justify-center w-full">
                      <Image
                        src={card.image}
                        // alt={card.title}
                        width={60}
                        height={10}
                        className="object-cover"
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
          </div>
          <div className="">
            <div className="mt-8 border-2 gap-4 flex items-center justify-center border-dashed border-[#E6E6E6] rounded-full px-4 py-2 text-center ">
              <div className="flex items-center">
                <div className=" flex items-center h-10 ">
                  <Image
                    src="/Calendar.png"
                    // alt={card.title}
                    width={26}
                    height={10}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 font-medium">
                  Launch Expected: 08/ 2025
                </p>
              </div>
              <div className="flex items-center">
                <div className=" flex items-center h-10 ">
                  <Image
                    src="/Magnifier.png"
                    // alt={card.title}
                    width={26}
                    height={10}
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 font-medium">
                  Currently under active development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
