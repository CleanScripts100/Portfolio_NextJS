import React from "react";
import styled from "@emotion/styled";

const StyledAbout = styled.div`
  padding: 4rem 12vw;
  background: #fafaff;
  display: grid;
  grid-template-columns: 0.8fr 40vw;
  margin: 2rem 0;

  h2 {
    font-family: "Josefin Sans", sans serif;
    font-size: clamp(30px, 4vw, 40px);
    text-transform: uppercase;
    font-weight: 700;
    color: #3b4754;
    padding-left: 15rem;

    @media (max-width: 767.98px) {
      padding-left: 0;
    }
  }

  span {
    font-weight: 400;
    font-size: clamp(20px, 1.8vw, 28px);
    line-height: 1.5;
    opacity: 0.7;
  }

  span {
    display: inline-block;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    padding: 2rem 3rem;
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>About me</h2>
      <span>
        As a passionate Software Developer, I have immersed myself in coding for
        the last two years, driven by a desire for challenges and alignment with
        my inherent traits. Holding a masters in E-Governance Technologies and
        Services from Tallinn University of Technology, along with software
        development diplomas from Helsinki Business College and Integrify
        Software Academy, I not only enjoy coding but also thrive in exploring
        new technologies and collaborating with business development teams to
        generate innovative ideas.
      </span>
    </StyledAbout>
  );
};

export default About;
