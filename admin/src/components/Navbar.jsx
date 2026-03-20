import React from "react";
import { assets } from "../assets";

function Navbar({setToken}) {
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full -mt-2 sm:-mt-12">
      <img className="w-[max(12%,80px)]" src={assets.amlogo} alt="logo" />

      <button onClick={() => setToken('')} className="bg-gray-600 text-white px-5 py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
