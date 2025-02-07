import React from "react";
import { Container, Grid, Box, Typography, Paper } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-scroll";

const About = () => {
  const { darkMode } = useTheme();

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: darkMode ? "#1a1a1a" : "#f5f7fa",
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/askeladd2.PNG"
              alt="Profile"
              sx={{
                width: "100%",
                maxWidth: 800,
                height: "auto",
                objectFit: "cover",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                }
              }}
            />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 4,
                background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              About Me
            </Typography>

            <Typography variant="h5" sx={{ mb: 3, color: darkMode ? "#fff" : "#333" }}>
              A passionate Adventurer based in Tarlac Philippinese
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: darkMode ? "#ddd" : "#666" }}>
              From the very beginning, Arvin has embraced the philosophy of continuous growth and relentless pursuit of excellence. Starting as a passionate learner with a curious mind, Arvin transformed challenges into opportunities, building a career that reflects dedication, adaptability, and innovation.
            </Typography>

            <Grid container spacing={2}>
              {[
                { label: "Experience", value: "2 yrs" },
                { label: "Projects", value: "4" },
                { label: "Clients", value: "3" },
              ].map((stat, index) => (
                <Grid item xs={4} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      backgroundColor: darkMode ? "#333" : "#fff",
                      color: darkMode ? "#fff" : "#333",
                    }}
                  >
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2">{stat.label}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
