import JfuctMap from "../assests/JFUCT-MAP-1.png";
import founder from "../assests/Founder-JFUCT.jpeg";

const About = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="my-20 mx-14">
          <img src={JfuctMap} alt="JFUCT" className="w-[800px] h-[500px]" />
        </div>
        <div className="w-[490px] h-96 bg-[#012b28] p-12 text-[#ebb42c] rounded-3xl">
          <h1 className=" font-serif text-4xl">About Our Organization</h1>
          <p className="mt-5 text-lg font-serif tracking-wider">
            Jamia Faizul Uloom is a religious educational institution that
            offers courses in Islamic studies. The institution is located in the
            city of Bradford, West Yorkshire, England. The institution was
            established in 1993 and has since grown to become one of the leading
            Islamic education centers in the UK.
          </p>
        </div>
      </div>

      <div className="w-[1200px] mx-auto bg-[#f7e3d2] rounded-3xl py-8">
        <h1 className="text-4xl text-center font-serif font-medium">
          Our Mission
        </h1>
        <p className=" text-lg text-center font-serif pt-5 px-12 tracking-wide">
          Our mission is to provide students with a comprehensive education in
          Islamic studies that is rooted in the teachings of the Quran and
          Sunnah. We aim to equip our students with the knowledge and skills
          they need to become leaders in their communities and to serve the
          needs of the Muslim Ummah. The institution offers a wide range of
          courses in Islamic studies, including courses in Quranic studies,
          Hadith studies, Fiqh, and Islamic history. The institution also offers
          courses in Arabic language and Islamic jurisprudence. The institution
          is committed to providing students with a comprehensive education in
          Islamic studies that is rooted in the teachings of the Quran and
          Sunnah.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[490px] h-96 bg-[#012b28] p-12 text-[#ebb42c] rounded-3xl">
          <h1 className=" font-serif text-4xl">Our Founder</h1>
          <p className="mt-5 text-lg font-serif tracking-wider">
            Jamia Faizul Uloom is a religious educational institution that
            offers courses in Islamic studies. The institution is located in the
            city of Bradford, West Yorkshire, England. The institution was
            established in 1993 and has since grown to become one of the leading
            Islamic education centers in the UK.
          </p>
        </div>
        <div className="my-20 mx-14">
          <img
            src={founder}
            alt="JFUCT"
            className="w-[400px] h-[400px] rounded-full ml-10"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
