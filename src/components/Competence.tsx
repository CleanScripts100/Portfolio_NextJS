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
    text: "I specialize in developing visually engaging and user-friendly web applications with a commitment to user-centric design principles. Proficient in UI/UX, I guarantee responsive interfaces, meticulous attention to detail, and smooth collaboration with fellow designers. My goal is to elevate the overall user experience by integrating coding expertise with a keen focus on aesthetic and usability elements.",
  },
  {
    id: 2,
    icon: <Icon2 />,
    background: "#F3F3F3",
    title: "ADAPTABILITY",
    text: "I possess the ability to navigate and thrive in an ever-changing technological landscape, seamlessly adjusting to new tools, methodologies, and project requirements. I am an adaptable developer that embraces change with enthusiasm, understanding that technology evolves rapidly. When faced with shifting priorities or emerging technologies, I pivot gracefully, leveraging diverse skillset to meet the demands.",
  },
  {
    id: 3,
    icon: <Icon3 />,
    background: "#F9F9FF",
    title: "TEST DRIVEN DEVELOPMENT",
    text: "A web developer proficient in Test-Driven Development (TDD), adhering to the disciplined TDD cycle, crafting comprehensive tests, and automating testing processes to detect regressions early. I excel in integration testing, collaborate seamlessly with QA teams, and maintain test suites as the codebase evolves. I embrace the Red-Green-Refactor philosophy, and prioritise writing failing tests, implementing minimal code for passing tests, and confidently refactoring code.",
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
        {arr.map(({ id, icon, text, background }) => (
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
            </div>
            <Text>{text}</Text>
          </ItemCard>
        ))}
      </CardsWrapper>
    </Wrapper>
  );
};

export default Competence;
