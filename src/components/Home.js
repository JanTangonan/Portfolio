import React from "react";
import SocialMedia from "./SocialMedia";
import { Box, Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
            py: 8,
          }}
        >
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
            Hi, I'm [Your Name]
          </Typography>
          
          <Typography variant="h4" sx={{ mb: 3, color: "#555" }}>
            [Your Role] | [Your Specialty]
          </Typography>

          <Typography variant="h6" sx={{ mb: 4, color: "#666", maxWidth: "600px", mx: "auto" }}>
            I'm passionate about creating innovative solutions through code. 
            Specializing in web development and bringing ideas to life.
          </Typography>

          <Box sx={{ mb: 4 }}>
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
            <Button 
              variant="outlined" 
              size="large"
              sx={{ px: 4 }}
            >
              Contact Me
            </Button>
          </Box>

          <SocialMedia />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;