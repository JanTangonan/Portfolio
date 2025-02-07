import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hobbies = () => {
  const { darkMode } = useTheme();

  const hobbies = [
    {
        name: "Gaming",
        img: "/images/gaming.jpg",
        description: "Enjoying strategic gameplay and immersive virtual adventures",
        stats: "500+ gaming hours"
    },
    {
        name: "Photography",
        img: "/images/photography.jpg",
        description: "Capturing life's beautiful moments through my lens",
        stats: "1000+ photos taken"
    },
    {
        name: "Singing",
        img: "/images/singing.jpg",
        description: "Expressing emotions and creativity through music",
        stats: "Performed at multiple events"
    },
    {
        name: "Playing the Guitar",
        img: "/images/guitar.jpg",
        description: "Strumming melodies and learning new tunes",
        stats: "5+ years of playing experience"
    },
    {
        name: "Running",
        img: "/images/running.jpg",
        description: "Staying active and pushing my limits",
        stats: "Completed several 5K runs"
    },
    {
        name: "Working Out",
        img: "/images/workout.jpg",
        description: "Building strength and staying fit",
        stats: "Consistently training 4-5 times a week"
    }
];


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Box
      id="hobbies"
      sx={{
        py: 10,
        backgroundColor: darkMode ? "#1a1a1a" : "#f5f7fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          My Hobbies
        </Typography>
        <Slider {...settings}>
          {hobbies.map((hobby, index) => (
            <Card key={index} sx={{ maxWidth: 345, mx: "auto", mb: 4 }}>
              <CardMedia
                component="img"
                height="140"
                image={hobby.img}
                alt={hobby.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {hobby.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {hobby.description}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {hobby.stats}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Hobbies;