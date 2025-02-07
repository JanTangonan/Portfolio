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
import Projects from "./components/Projects";

function App() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div 
      style={{
        backgroundColor: darkMode ? '#2e2e2e' : '#ffffff',
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
      <Projects />
      <Hobbies />
      <Contact />
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <SocialMedia />
        </div>
        <p style={{ margin: 0 }}>© 2024 Jumba. All rights reserved.</p>
        <p style={{ margin: 0 }}>
          <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Privacy Policy</a> | 
          <a href="/terms-of-service" style={{ color: '#fff', textDecoration: 'none', margin: '0 10px' }}>Terms of Service</a>
        </p>
      </footer>
    </div>
  );
}

export default App;


