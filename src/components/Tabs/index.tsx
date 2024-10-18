import React from "react";
import Tabs from "./Tabs";
import { css } from "@emotion/css";

const TabsNavigation = () => {
  return (
    <div
      className={css`
        padding: 4rem 12vw;

        @media (max-width: 767.98px) {
          padding: 2rem 1rem;
        }
      `}
    >
      <h3
        className={css`
          font-family: "Josefin Sans", sans serif;
          font-size: clamp(30px, 4vw, 40px);
          text-transform: uppercase;
          font-weight: 700;
          color: #3b4754;
          margin-bottom: 5rem;
          padding-left: 15rem;

          @media (max-width: 767.98px) {
            padding-left: 2rem;
          }
        `}
      >
        {" "}
        Where I&apos;ve worked
      </h3>
      <Tabs>
        <div title="Kenigbolo Consulting">
          <h3>Front-End Engineer @Kenigbolo Consulting</h3>
          <h5>Mar 2023 - Present</h5>
          <p>
            Collaborating cross-functionally, I transformed core frameworks with
            proficiency in React and TypeScript, ensuring consistent design
            across platforms, adapting to emerging technologies, and emphasizing
            comprehensive browser testing. I integrated front-end components,
            contributed to database design, and implemented responsive design
            principles to optimize website speed, participating in code reviews
            for quality assurance and stability.
          </p>
        </div>
        <div title="Integrify Software Academy">
          <h3>Front-End Engineer @Integrify Software Academy</h3>
          <h5>Aug 2022 - Mar 2023</h5>
          <p>
            As a freelance developer for a software academy, I bring diverse
            expertise in programming languages and frameworks. Committed to
            continuous learning and staying updated on industry trends, I
            contribute to innovative software solutions. My goal is not only to
            deliver high-quality code but also to mentor and empower aspiring
            developers through the academy&rsquo;s educational initiatives.
          </p>
        </div>
        <div title="HBC Full-Stack Dev">
          <h3>Full-Stack Dev Student @Helsinki Business College</h3>
          <h5>Jan 2021 - 2022</h5>
          <p>
            As a full-stack web development student at Helsinki Business
            College, I work with technologies like React, Typescript, Jest, PHP,
            Symfony, Docker, and SQL. React helps me build dynamic user
            interfaces, while PHP and Symfony handle back-end logic. Docker
            ensures consistent environments, and SQL enables efficient database
            management. This experience has strengthened my ability to develop
            scalable full-stack applications.
          </p>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsNavigation;
