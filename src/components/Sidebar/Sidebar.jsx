import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex">
      <aside
        className="flex sticky top-0 bottom-0 left-0 w-[60px] lg:w-72 flex-col space-y-2 border-r-2 bg-[#091928] text-white font-medium p-3"
        style={{ height: "100vh" }}
        x-show="asideOpen"
      >
        <a
          href="/"
          className="flex items-center space-x-1 rounded-md px-0 py-2 lg:px-2 lg:py-3"
        >
          <span className="text-2xl">
            <i className="bx bx-home"></i>
          </span>
          <img src="/logo.png" className="block w-[22px] -pl-2 pt-1 lg:pt-0" />
          <span className="pl-[1.5px] hidden lg:inline">Clerkie Challenge</span>
        </a>
        <Link
          href="/"
          className="flex items-center space-x-1 rounded-md px-0 py-2 lg:px-2 lg:py-3 hover:bg-[#424242]"
        >
          <span className="text-2xl">
            <i className="bx bx-home"></i>
          </span>
          <img src="/homeIcon.png" className="inline w-[24px] -pl-2" />
          <span className="pl-[1.5px] hidden lg:inline">Home</span>
        </Link>

        <Link
          href="/friends"
          className="flex items-center space-x-1 rounded-md px-0 py-2 lg:px-2 lg:py-3 hover:bg-[#424242]"
        >
          <span className="text-2xl">
            <i className="bx bx-cart"></i>
          </span>
          <img src="/friendIcon.png" className="inline w-[24px] -pl-2" />
          <span className="pl-[1.5px] hidden lg:inline">Friends</span>
        </Link>
      </aside>
    </div>
  );
};

export default Sidebar;
