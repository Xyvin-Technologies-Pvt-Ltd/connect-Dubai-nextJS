import React from "react";
import Image from 'next/image';
const Body = () => {
  return (
    <div>
      <div className="w-[1440px] flex items-center justify-center h-[500px] b-emerald-500">
        <div className="w-[1360px] bg-re-500 flex h-[420px]">
          <div className="w-[70%] flex flex-col justify-center items-center">
            <div className="w-[80%] text-cente ">
              <h1 className="font-bold text-cente font-sans text-6xl">
                Connect. Grow. Trade
              </h1>
              <h1 className="font-bold font-sans text-6xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
                All in One
              </h1>
              <div className="flex flex-row">
                {" "}
                <h1 className="font-bold font-sans text-6xl bg-gradient-to-r from-yellow-800 to-yellow-200 bg-clip-text text-transparent">
                  Dubai-Based
                </h1>{" "}
                <span className="font-bold font-sans text-6xl ml-2">
                  Platform
                </span>
              </div>
              <h4>
                A powerful community + commerce platform for UAE’s business
                ecosystem.
              </h4>
              <h4>
                Now onboarding vendors, service providers, and associations.
              </h4>
            </div>
            <div></div>
          </div>
          <div className="w-[30%]">
            <div>
<Image
 src="/Rectangle.png"
  alt="Banner"
  width={800}
  height={400}
/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
