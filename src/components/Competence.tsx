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
    text: "I specialize in creating visually engaging and user-friendly web applications with a commitment to user-centric design. Proficient in UI/UX, I ensure responsive interfaces, meticulous attention to detail, and seamless collaboration with fellow designers, aiming to elevate the overall user experience.",
  },
  {
    id: 2,
    icon: <Icon2 />,
    background: "#F3F3F3",
    title: "ADAPTABILITY",
    text: "I navigate and thrive in a dynamic technological landscape, seamlessly adapting to new tools, methodologies, and project requirements. As an adaptable developer, I embrace change with enthusiasm and pivot gracefully to meet evolving demands, leveraging my diverse skillset in response to shifting priorities or emerging technologies.",
  },
  {
    id: 3,
    icon: <Icon3 />,
    background: "#F9F9FF",
    title: "TEST DRIVEN DEVELOPMENT",
    text: "As a TDD-proficient web developer, I follow the disciplined TDD cycle, create comprehensive tests for early regression detection, and maintain evolving test suites. Experienced in integration testing and collaborative QA engagement, I embrace the Red-Green-Refactor philosophy by prioritizing failing tests, minimal code for passing tests, and confident refactoring.",
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
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 500;
          text-transform: uppercase;
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
