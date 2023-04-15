import React from "react";
import { FaTruck } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";

function Nav() {
  return (
    <div className="bg-slate-900 p-3 font-serif">
      <ul className="flex flex-row justify-evenly">
        <li className="flex gap-2 items-center">
          <span className="text-3xl text-indigo-500"><FaTruck /></span>
          <h1 className="text-white font-mono font-bold text-xl">SENDIT</h1>
        </li>
        <li className="text-white">Home</li>
        <li className="text-white">About</li>
        <li className="text-white">Contact Us</li>
        <li className="text-white">Help</li>
        <li className="text-white text-3xl">
          <BiUserCircle />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
