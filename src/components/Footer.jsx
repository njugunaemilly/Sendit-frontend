import React from "react";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-slate-900 p-4 font-serif space-y-4  text-white">
      <div>
        <ul className="flex justify-evenly gap-3">
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Partners</li>
          <li>Administrator</li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-evenly gap-3">
          <li><AiOutlineInstagram/></li>
          <li><BsFacebook/></li>
          <li><BsTwitter/></li>
          <li><AiOutlineGithub/></li>
        </ul>
      </div>
      <div className="flex justify-center">
        <p>&copy; 2023 SENDIT. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
