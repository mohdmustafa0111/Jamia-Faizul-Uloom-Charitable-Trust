import Slider from "react-slick";
import EventImage1 from "../assests/Events/Event 1.jpg";
import EventImage2 from "../assests/Events/Event 2.jpg";
import EventImage3 from "../assests/Events/Event 3.jpg";
import EventImage4 from "../assests/Events/Event 4.jpg";
import EventImage5 from "../assests/Events/Event 5.jpg";
import EventImage6 from "../assests/Events/Event 6.jpg";
import EventImage7 from "../assests/Events/Event 7.jpg";
import EventImage8 from "../assests/Events/Event 8.jpg";
import EventImage9 from "../assests/Events/Event 9.jpg";
import EventImage10 from "../assests/Events/Event 10.jpg";
import EventImage11 from "../assests/Events/Event 11.jpg";
import EventImage12 from "../assests/Events/Event 12.jpg";
import EventImage13 from "../assests/Events/Event 13.jpg";
import EventImage14 from "../assests/Events/Event 14.jpg";
import EventImage15 from "../assests/Events/Event 15.jpg";
import EventImage16 from "../assests/Events/Event 16.jpg";
import EventImage17 from "../assests/Events/Event 17.jpg";
import EventImage18 from "../assests/Events/Event 18.jpg";
import EventImage19 from "../assests/Events/Event 19.jpeg";
import EventImage20 from "../assests/Events/Event 20.jpg";

const Events = () => {
  const EventImages = [
    EventImage1,
    EventImage2,
    EventImage3,
    EventImage4,
    EventImage5,
    EventImage6,
    EventImage7,
    EventImage8,
    EventImage9,
    EventImage10,
    EventImage11,
    EventImage12,
    EventImage13,
    EventImage14,
    EventImage15,
    EventImage16,
    EventImage17,
    EventImage18,
    EventImage19,
    EventImage20,
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
    <div id="events" className="bg-[#F7E3D2] h-[730px] w-full text-center p-10">
      <h1 className="text-3xl bg-[#012b28] text-[#ebb42c] w-52 p-4 mt-3 m-auto rounded-full">
        Past Events
      </h1>

      <div className="mt-12">
        <Slider {...settings}>
          {EventImages.map((image, index) => (
            <div key={index} className="space-x-10">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[500px] px-8"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
