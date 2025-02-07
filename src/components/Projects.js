import React from "react";
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    {
      name: "Smart Parking System",
      img: "/images/smart-parking.jpg",
      description: "Built and programmed Arduino for input in the smart parking system during college.",
      link: "https://example.com/smart-parking"
    },
    {
      name: "Stratapp",
      img: "/images/stratapp.jpg",
      description: "Responsible for CI/CD and unit testing to achieve total code coverage using ASP.NET and Angular during internship.",
      link: "https://example.com/stratapp"
    },
    {
      name: "Mainframe Programmer",
      img: "/images/mainframe.jpg",
      description: "Programmed jobs for data extraction used in ETL data migration during my first job.",
      link: "https://example.com/mainframe"
    },
    {
      name: "Full Stack Web Developer",
      img: "/images/fullstack.jpg",
      description: "Addressed and fixed issues in the current system using ASP.NET, jQuery, and databases like MS SQL and Oracle during my second job.",
      link: "https://example.com/fullstack"
    }
  ];

  return (
    <Box
      id="projects"
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
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, mx: "auto", mb: 4 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={project.img}
                  alt={project.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ mt: 2 }}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      View Project
                    </a>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;