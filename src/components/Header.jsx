import logo from "../assests/Logo-JFUCT.png";

const Header = () => {
  return (
    <div className="bg-[#012b28] flex justify-between items-center space-x-10">
      <div className="flex ml-12 ">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <div className="flex flex-col justify-center ml-2 tracking-wide">
          <h1 className="text-[#ebb42c] text-2xl">JAMIA FAIZUL ULOOM</h1>
          <h1 className="text-[#ebb42c] text-1xl">
            CHARITABLE TRUST (Regd. No. 4455)
          </h1>
        </div>
      </div>
      <div>
        <ul className="flex items-center space-x-10 text-[#ebb42c] text-xl p-5 mr-8 cursor-pointer">
          <li>
            <a href="#home" className="hover:text-[#fff6ef]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#fff6ef]">
              About
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-[#fff6ef]">
              Events
            </a>
          </li>
          <li>
            <a href="#media" className="hover:text-[#fff6ef]">
              Media
            </a>
          </li>
          <li>
            <a href="#donate" className="hover:text-[#fff6ef]">
              Donate
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
