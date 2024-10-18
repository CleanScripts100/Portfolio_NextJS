import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import Icon1 from "../imgs/icon-1.svg";
import Icon2 from "../imgs/icon-2.svg";
import Icon3 from "../imgs/icon-3.svg";

const arr = [
  {
    id: 1,
    icon: <Icon1 />,
    background: "#F2F7F6",
    title: "DESIGN ORIENTED",
    text: "Proficiency in front-end development is driven by a design-oriented approach, ensuring visually appealing, responsive, and user-friendly interfaces. Skills in React, TypeScript, and Next.js enable the translation of design concepts into functional applications. Tools like Webpack and Browsersync are utilized to optimize performance and ensure seamless cross-browser compatibility, with a focus on enhancing user experience through responsive design.",
  },
  {
    id: 2,
    icon: <Icon2 />,
    background: "#F3F3F3",
    title: "ADAPTABILITY",
    text: "Experience working in full-stack environments highlights adaptability in integrating front-end components with backend services using technologies such as REST APIs, Redux, and MongoDB. Strong collaboration skills enable effective communication across teams, ensuring alignment between design, functionality, and business goals. Flexibility in learning and applying new technologies further supports an agile development process.",
  },
  {
    id: 3,
    icon: <Icon3 />,
    background: "#F9F9FF",
    title: "TEST DRIVEN DEVELOPMENT",
    text: "A focus on test-driven development ensures high-quality, reliable code. Proficiency with tools like Jest for unit testing and collaboration with QA teams for integration testing ensures code functionality and scalability. This approach identifies and resolves issues early, supporting continuous improvement and delivering robust applications that meet performance standards.",
  },
];

const Wrapper = styled.div`
  margin: 4rem 0;
`;
const CardsWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(3, 500px);
  gap: 1rem;
  justify-content: center;

  h3 {
    text-align: center;
  }

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
`;
const ItemCard = styled.div`
  padding: 3rem;

  @media (max-width: 767.98px) {
  }
`;
const Text = styled.span`
  font-size: 1.25rem;
  line-height: 1.4;
  opacity: 0.8;
`;

const Competence: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <h3
        className={css`
          text-align: center;
          font-family: "Josefin Sans", sans serif;
          font-size: clamp(30px, 4vw, 40px);
          text-transform: uppercase;
          font-weight: 700;
          color: #3b4754;

          @media (max-width: 767.98px) {
          padding-left: 0;
        `}
      >
        Competence
      </h3>
      <CardsWrapper>
        {arr.map(({ id, icon, text, title, background }) => (
          <ItemCard
            key={id}
            className={css`
              box-shadow: ${id === 2
                ? `0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)`
                : `0`};
            `}
          >
            <div
              className={css`
                width: 70px;
                height: 70px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50px;
                background-color: ${background};
                margin-bottom: 1rem;
              `}
            >
              {icon}
              {/* <div>{title}</div> */}
            </div>
            <Text>{text}</Text>
          </ItemCard>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Competence;
