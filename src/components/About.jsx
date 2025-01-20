import JfuctMap from "../assests/JFUCT-MAP-1.png";
import founder from "../assests/Founder-JFUCT.jpeg";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="my-20 mx-14">
          <img src={JfuctMap} alt="JFUCT" className="w-[800px] h-[500px]" />
        </div>
        <div className="w-[520px] h-[580px] bg-[#012b28] p-12 text-[#ebb42c] rounded-3xl my-20">
          <h1 className="text-4xl font-serif">About Our Organization</h1>
          <p className="mt-6 text-lg font-serif tracking-wider leading-relaxed">
            Jamia Faizul Uloom is a religious educational institution that
            offers courses in Islamic studies, Computer and Hindi. The
            institution is located in Nizampur, distt. Nuh. The institution was
            established in 2011 and has since grown to become one of the leading
            Islamic education centers in the Mewat. The institute was founded in
            accordance with the will of Mr. Iqbal's (founder) father, Mr.
            Shahbuddin, and with the unwavering support and guidance of his
            mother, Mrs. Majida, who played a pivotal role in its establishment.
          </p>
          <button className="border border-[#ebb42c] px-3 py-2 mt-5 hover:bg-[#ebb42c] hover:text-[#012b28]">
            Read More
          </button>
        </div>
      </div>

      <div className="w-[1200px] mx-auto bg-[#f7e3d2] rounded-3xl py-8">
        <h1 className="text-4xl text-center font-serif font-medium">
          Our Mission
        </h1>
        <p className=" text-lg text-center font-serif pt-5 px-12 tracking-wide leading-relaxed">
          Our mission is to provide students with a comprehensive education in
          Islamic studies that is rooted in the teachings of the Quran and
          Sunnah. We aim to equip our students with the knowledge and skills
          they need to become leaders in their communities and to serve the
          needs of the Muslim Ummah. The institution offers a wide range of
          courses in Islamic studies, including courses in Quranic studies,
          Hadith studies, Fiqh, and Islamic history. Along with this we also
          teach hindi and computer courses. The institution is committed to
          providing students with a comprehensive education in Islamic studies
          that is rooted in the teachings of the Quran and Sunnah.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[490px] h-[560px] bg-[#012b28] p-12 text-[#ebb42c] rounded-3xl my-16">
          <h1 className=" font-serif text-4xl">Our Founder</h1>
          <p className="mt-6 text-lg font-serif tracking-wider leading-relaxed">
            Our founder, Mr. Mohd. Iqbal, established Jamia Faizul Uloom in 2011
            with a vision to provide quality education in Islamic studies, along
            with modern subjects like Computer and Hindi. His dedication and
            commitment have been instrumental in the growth and success of the
            institution. Mr. Iqbal's vision was deeply influenced by the values
            instilled in him by his parents. Their unwavering support and
            guidance played a crucial role in shaping his commitment to
            education and community service.
          </p>
          <div className="flex space-x-6 mt-6">
            <a
              href="mailto:mohdipbal81@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ebb42c] text-3xl hover:text-red-500"
            >
              <SiGmail />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61571923330735&sk=friends"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ebb42c] text-3xl hover:text-blue-500"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.youtube.com/@mohdipbal8410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ebb42c] text-3xl hover:text-red-500"
            >
              <SiYoutube />
            </a>
            <a
              href="https://x.com/MohdIpbal179921?t=yZ0M1pHm1w6vSFgT00-dgw&s=08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ebb42c] text-3xl hover:text-gray-500"
            >
              <BsTwitterX />
            </a>
          </div>
        </div>

        <div className="my-20 mx-14">
          <img
            src={founder}
            alt="JFUCT"
            className="w-[400px] h-[400px] rounded-full ml-10 border-4 border-[#dbcba1]"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
