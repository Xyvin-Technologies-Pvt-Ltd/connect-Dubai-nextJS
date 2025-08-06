import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-[#ffffff] flex items-center justify-center h-[75px]">
      <header className="w-[1460px] h-[55px] flex items-center justify-between px-6 py-4  text-black">
        {/* Logo / Left Side */}
        <div className="text-xl font-bold">Logo</div>

        {/* Center Nav (Optional) */}
        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Who can Join?
          </a>
          <a href="#" className="hover:underline">
            Why Join Now?
          </a>
          <a href="#" className="hover:underline">
            Upcoming Features
          </a>
        </nav>

        {/* Right Side (e.g., profile or login) */}
        <div className="flex items-center gap-4">
          <button className="text-[#002B21]  border outline-none rounded-full  px-4 py-2  bg-[#ffffff]">
            Join Community
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
