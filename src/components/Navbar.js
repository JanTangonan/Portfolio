import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { title: "Home", id: "home" },
    { title: "About", id: "about" },
    { title: "Hobbies", id: "hobbies" },
    { title: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{
        background: isScrolled 
          ? "rgba(255, 255, 255, 0.95)"
          : "transparent",
        boxShadow: isScrolled ? 1 : "none",
        transition: "all 0.3s ease-in-out",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <Container>
        <Toolbar sx={{ px: { xs: 0 } }}>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              background: isScrolled 
                ? "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)"
                : "linear-gradient(45deg, #fff 30%, #f0f0f0 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Jumba
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                component={Link}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                sx={{
                  color: isScrolled ? "#333" : "#fff",
                  fontWeight: 500,
                  "&:hover": {
                    background: "transparent",
                    color: "#2196F3",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { md: "none" }, 
              color: isScrolled ? "#333" : "#fff" 
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem key={item.id}>
              <Button
                fullWidth
                component={Link}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleDrawerToggle}
                sx={{ color: "#333" }}
              >
                {item.title}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;