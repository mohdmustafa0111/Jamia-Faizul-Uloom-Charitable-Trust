import logo from "../assests/Logo-JFUCT.png";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#012b28] flex justify-between items-center md:space-x-10">
      <div className="flex ml-2 md:ml-12 ">
        <img src={logo} alt="Logo" className="w-14 md:w-20 h-14 md:h-20" />
        <div className="flex flex-col justify-center ml-0 md:ml-2 tracking-wide">
          <h1 className="text-[#ebb42c] text-sm md:text-2xl">
            JAMIA FAIZUL ULOOM
          </h1>
          <h1 className="text-[#ebb42c] text-xs md:text-xl">
            CHARITABLE TRUST {""}
            <span className="hidden md:inline-block">(Regd. No. 4455)</span>
          </h1>
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-[#ebb42c] focus:outline-none absolute top-4 right-8"
        >
          {isMenuOpen ? (
            <IoMdClose className="w-6 h-6" />
          ) : (
            <RxHamburgerMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div>
        <ul className="hidden md:flex md:items-center md:space-x-7 text-[#ebb42c] md:text-xl cursor-pointer md:mr-12">
          <li>
            <a
              href="#home"
              className="py-2 px-3 hover:text-[#fff6ef] md:inline"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="py-2 px-3 hover:text-[#fff6ef] md:inline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#events"
              className="py-2 px-3 hover:text-[#fff6ef] md:inline"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="#media"
              className="py-2 px-3 hover:text-[#fff6ef] md:inline"
            >
              Media
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="py-2 px-3 hover:text-[#fff6ef] md:inline"
            >
              Donate
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 bg-[#012b28] z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-8 text-[#ebb42c] focus:outline-none z-50"
        >
          <IoMdClose className="w-6 h-6" />
        </button>

        {/* Menu Items */}
        <div>
          <ul className="text-[#ebb42c] py-5 text-2xl cursor-pointer">
            <li className="py-4">
              <a
                href="#home"
                className="hover:text-[#fff6ef]"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li className="py-4">
              <a
                href="#about"
                className="hover:text-[#fff6ef]"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li className="py-4">
              <a
                href="#events"
                className="hover:text-[#fff6ef]"
                onClick={toggleMenu}
              >
                Events
              </a>
            </li>
            <li className="py-4">
              <a
                href="#media"
                className="hover:text-[#fff6ef]"
                onClick={toggleMenu}
              >
                Media
              </a>
            </li>
            <li className="py-4">
              <a
                href="#donate"
                className="hover:text-[#fff6ef]"
                onClick={toggleMenu}
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
