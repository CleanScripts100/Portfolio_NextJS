import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  background: #3b4754; /* Change this to your desired footer color */
  color: white;
  padding: 0, 5rem;
  text-align: center;
  transition: transform 0.3s ease;
  transform: translateY(100%); /* Initially hide the footer */

  &.visible {
    transform: translateY(0); /* Show the footer when it becomes visible */
  }
`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Check if the user is within 100px of the bottom of the page
    if (scrollY + windowHeight >= documentHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FooterContainer className={isVisible ? "visible" : ""}>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
