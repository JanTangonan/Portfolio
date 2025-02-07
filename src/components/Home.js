import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <Box
      id="home"
      sx={{
        py: 10,
        background: darkMode 
          ? "linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)" 
          : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hi, I'm Arviiiiiiin
          </Typography>
          
          <Typography variant="h4" sx={{ mb: 3, color: darkMode ? "#ddd" : "#555" }}>
            Try Hard Dev | Fullstacker Web Dev
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, color: darkMode ? "#bbb" : "#666", maxWidth: "600px", mx: "auto" }}>
            I'm passionate(about 6/10 atleast lol) about creating innovative solutions through code. 
            Specializing in web development and bringing ideas to life.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Link to="projects" smooth={true} duration={500}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  mr: 2,
                  background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                  color: "white",
                  px: 4,
                }}
              >
                View Projects
              </Button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ px: 4 }}
              >
                Contact Me
              </Button>
            </Link>
          </Box>

          <SocialMedia />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;