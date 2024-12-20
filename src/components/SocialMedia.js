import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  const links = [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
    { icon: <FaGithub />, url: "https://github.com/yourprofile" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourprofile" },
  ];

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "24px", color: "#000" }}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
