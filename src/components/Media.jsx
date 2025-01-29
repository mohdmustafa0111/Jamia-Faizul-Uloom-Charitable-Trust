import Slider from "react-slick";
import PrintMedia1 from "../assests/Print Media/Print 1.jpg";
import PrintMedia2 from "../assests/Print Media/Print 2.jpg";
import PrintMedia3 from "../assests/Print Media/Print 3.jpg";
import PrintMedia4 from "../assests/Print Media/Print 4.jpg";
import PrintMedia5 from "../assests/Print Media/Print 5.jpg";
import PrintMedia6 from "../assests/Print Media/Print 6.jpg";
import PrintMedia7 from "../assests/Print Media/Print 7.jpg";
import PrintMedia8 from "../assests/Print Media/Print 8.jpg";
import PrintMedia9 from "../assests/Print Media/Print 9.jpg";
import PrintMedia10 from "../assests/Print Media/Print 10.jpeg";

const Media = () => {
  const PrintMedia = [
    PrintMedia1,
    PrintMedia2,
    PrintMedia3,
    PrintMedia4,
    PrintMedia5,
    PrintMedia6,
    PrintMedia7,
    PrintMedia8,
    PrintMedia9,
    PrintMedia10,
  ];

  const videos = [
    "https://www.youtube.com/embed/DAKDwhAzOik?si=dUcrK_nFn8lh_bOI",
    "https://www.youtube.com/embed/ZT_6FXYKe9Y?si=bxWBQizqTjxaXMnI",
    "https://www.youtube.com/embed/ntb2Gf5w9k4?si=98YVNfVkP06tj8Dw",
    "https://www.youtube.com/embed/NboIt4cIabw?si=SsHE9ixczf78-KPF",
    "https://www.youtube.com/embed/YlaFj5wFbU8?si=Fu3Wq6i7Wd1ZbCJs",
    "https://www.youtube.com/embed/cUrHQsIhffA?si=mWSAcH48JtBPiHwE",
  ];

  const settings = {
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed (in milliseconds)
    slidesToShow: 3, // Default for large screens (wider than 1024px)
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024, // For large screens (e.g., desktops)
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // For small screens (e.g., mobile phones)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="media">
      {/* Print Nedia */}

      <div className="h-[570px] md:h-[700px] w-full text-center p-10 mt-3">
        <h1 className="text-xl md:text-3xl bg-[#012b28] text-[#ebb42c] w-fit px-6 py-3 md:px-6 md:py-3 m-auto rounded-full">
          Print Media
        </h1>

        <div className="mt-10 md:mt-12">
          <Slider {...settings}>
            {PrintMedia.map((image, index) => (
              <div key={index} className="space-x-10">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[380px] md:h-[480px] px-8"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Digital Nedia */}

      <div className="h-[600px] md:h-[650px] w-full text-center p-10 bg-[#F7E3D2]">
        <h1 className="text-xl md:text-3xl bg-[#012b28] text-[#ebb42c] w-fit px-6 py-3 md:px-6 md:py-3 mt-5 m-auto rounded-full">
          Digital Media
        </h1>

        <div className="w-full mx-auto mt-8 md:mt-10">
          <Slider {...settings}>
            {videos.map((video, index) => (
              <div key={index}>
                <div>
                  <iframe
                    className="w-[500px] h-[380px] md:px-10 mt-3"
                    src={video}
                    title={`YouTube video ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Media;
