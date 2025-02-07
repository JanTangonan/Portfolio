import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: darkMode ? "#1a1a1a" : "#f5f7fa",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container component="section" maxWidth="sm">
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
          Contact Me
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            autoFocus
            sx={{
              backgroundColor: darkMode ? "#333" : "#fff",
              borderRadius: "5px",
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            sx={{
              backgroundColor: darkMode ? "#333" : "#fff",
              borderRadius: "5px",
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="message"
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            sx={{
              backgroundColor: darkMode ? "#333" : "#fff",
              borderRadius: "5px",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
              color: "white",
            }}
          >
            Submit
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;