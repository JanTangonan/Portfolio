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
      <footer>
        <SocialMedia />
        <p>© 2024 Jumba</p>
      </footer>
    </div>
  );
}

export default App;