import logo from "../assests/Final logo.png";

const Header = () => {
  return (
    <div className="bg-[#012b28] flex justify-between space-x-10">
      <div className="flex ml-12 ">
        <img src={logo} alt="Logo" className="w-20 h-20" />
        <div className="flex flex-col justify-center ml-2 font-serif">
          <h1 className="text-[#ebb42c] text-2xl">JAMIA FAIZUL ULOOM</h1>
          <h1 className="text-[#ebb42c] text-1xl">
            CHARITABLE TRUST (Regd. No. 4455)
          </h1>
        </div>
      </div>
      <div>
        <ul className="flex space-x-10 text-[#ebb42c] text-xl p-5 mr-8">
          <li className="hover:text-[#fff6ef]">Home</li>
          <li className="hover:text-[#fff6ef]">About</li>
          <li className="hover:text-[#fff6ef]">Events</li>
          <li className="hover:text-[#fff6ef]">Media</li>
          <li className="hover:text-[#fff6ef]">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
