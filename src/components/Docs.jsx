import Slider from "react-slick";
import Doc1 from "../assests/Docs/Doc-1.jpeg";
import Doc2 from "../assests/Docs/Doc-2.jpeg";
import Doc3 from "../assests/Docs/Doc-3.jpeg";
import Doc4 from "../assests/Docs/Doc-4.jpeg";
import Doc5 from "../assests/Docs/Doc-5.jpeg";
import Doc6 from "../assests/Docs/Doc-6.jpeg";
import Doc7 from "../assests/Docs/Doc-7.jpeg";
import Doc8 from "../assests/Docs/Doc-8.jpeg";
import Doc9 from "../assests/Docs/Doc-9.jpeg";
import Doc10 from "../assests/Docs/Doc-10.jpeg";
import Doc11 from "../assests/Docs/Doc-11.jpeg";
import Doc12 from "../assests/Docs/Doc-12.jpeg";

const Docs = () => {
  const DocImages = [
    Doc1,
    Doc2,
    Doc3,
    Doc4,
    Doc5,
    Doc6,
    Doc7,
    Doc8,
    Doc9,
    Doc10,
    Doc11,
    Doc12,
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
    <div
      id="events"
      className="bg-[#F7E3D2] h-[540px] md:h-[680px] w-full text-center p-10"
    >
      <h1 className="text-xl md:text-3xl bg-[#012b28] text-[#ebb42c] w-fit px-6 py-3 md:px-6 md:py-3 md: mt-1 md:mt-3 m-auto rounded-full">
        Proof of Work (Docs)
      </h1>

      <div className="mt-9 md:mt-14">
        <Slider {...settings}>
          {DocImages.map((image, index) => (
            <div key={index} className="space-x-10">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[350px] md:h-[430px] md:w-[430px] px-8"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Docs;
