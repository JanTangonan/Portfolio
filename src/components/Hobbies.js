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
      name: "Traveling",
      img: "/images/travel.jpg",
      description: "Exploring new places and experiencing different cultures",
      stats: "10+ countries visited"
    },
    {
      name: "Photography",
      img: "/images/photography.jpg",
      description: "Capturing life's beautiful moments through my lens",
      stats: "1000+ photos taken"
    },
    {
      name: "Gaming",
      img: "/images/gaming.jpg",
      description: "Enjoying strategic gameplay and virtual adventures",
      stats: "500+ gaming hours"
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

        <Box sx={{ maxWidth: "900px", mx: "auto" }}>
          <Slider {...settings}>
            {hobbies.map((hobby, index) => (
              <Box key={index} sx={{ p: 2 }}>
                <Card
                  sx={{
                    backgroundColor: darkMode ? "#333" : "#fff",
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="400"
                    image={hobby.img}
                    alt={hobby.name}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        color: darkMode ? "#fff" : "#333",
                        fontWeight: "bold",
                      }}
                    >
                      {hobby.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 2,
                        color: darkMode ? "#ddd" : "#666",
                      }}
                    >
                      {hobby.description}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#2196F3",
                        fontWeight: "bold",
                      }}
                    >
                      {hobby.stats}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Hobbies;
