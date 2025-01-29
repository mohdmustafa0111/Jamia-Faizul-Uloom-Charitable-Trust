import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#ebb42c] text-black font-sans p-4 flex items-center flex-col md:flex-row md:text-left md:justify-between text-center">
      <div className="flex space-x-1 md:flex-row md:items-center md:space-x-1 text-base font-medium">
        <p>
          &copy; Copyright 2025 | Jamia Faizul Uloom Charitable Trust | All
          Rights Reserved.
        </p>
      </div>
      <div className="text-base font-medium flex items-center space-x-3 mt-2 md:mt-0">
        <span>Follow Us</span>
        <div className="flex space-x-3 justify-center md:justify-start">
          <a
            href="mailto:mohdipbal81@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-red-500"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571923330735&sk=friends"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-500"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.youtube.com/@mohdipbal8410"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-red-500"
          >
            <SiYoutube />
          </a>
          <a
            href="https://x.com/MohdIpbal179921?t=yZ0M1pHm1w6vSFgT00-dgw&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-500"
          >
            <BsTwitterX />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
