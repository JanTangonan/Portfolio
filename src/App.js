import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import { useTheme } from "./context/ThemeContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Container, Grid, Typography } from '@mui/material';

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div 
      style={{
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#ffffff' : '#121212',
        transition: 'all 0.3s ease-in-out',
        minHeight: '100vh'
      }}
    >
      <Navbar />
      <IconButton
        onClick={toggleTheme}
        sx={{
          position: 'fixed',
          right: 20,
          top: 80,
          zIndex: 1000,
          backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
          '&:hover': {
            backgroundColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)',
          }
        }}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      <Home />
      <About />
      <Hobbies />
      <Contact />
      <footer style={{
        backgroundColor: '#1976d2',
        color: 'white',
        padding: '2rem 0',
        marginTop: 'auto'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} alignItems="center" justifyContent="space-between">
            <Grid item>
              <SocialMedia />
            </Grid>
            <Grid item>
              <Typography variant="body1" sx={{ 
                fontWeight: 500,
                letterSpacing: 1
              }}>
                © {new Date().getFullYear()} Jumba | All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </div>
  );
}

export default App;


