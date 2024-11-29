import React from "react";
import Slider from "react-slick";

const Hobbies = () => {
  const hobbies = [
    { name: "Traveling", img: "/images/travel.jpg" },
    { name: "Photography", img: "/images/photography.jpg" },
    { name: "Gaming", img: "/images/gaming.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="hobbies">
      <h2>Hobbies</h2>
      <Slider {...settings}>
        {hobbies.map((hobby, index) => (
          <div key={index}>
            <img src={hobby.img} alt={hobby.name} style={{ width: "100%" }} />
            <h3>{hobby.name}</h3>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hobbies;
