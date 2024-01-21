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
          <h3>Software Engineer @Kenigbolo Consulting</h3>
          <h5>Aug 2023 - Present</h5>
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
        <div title="Integrify">
          <h3>Software Engineer @Integrify Software Academy</h3>
          <h5>Aug 2023 - Present</h5>
          <p>
            As a freelance developer for a software academy, I bring diverse
            expertise in programming languages and frameworks. Committed to
            continuous learning and staying updated on industry trends, I
            contribute to innovative software solutions. My goal is not only to
            deliver high-quality code but also to mentor and empower aspiring
            developers through the academy&rsquo;s educational initiatives.
          </p>
        </div>
        <div title="Namespace">
          <h3>Software Engineer @Namespace</h3>
          <h5>Aug 2018 - Present</h5>
          <p>
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
            quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! The quick,
            brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
            Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex
            nymphs. Waltz, bad nymph, for quick jigs vex!
          </p>
        </div>
        <div title="Bolt Operations">
          <h3>Software Engineer @Bolt Operations OÚ</h3>
          <h5>Aug 2020 - 2022</h5>
          <p>
            Responsible for monitoring and managing data operations in a
            ride-hailing company, ensuring timely and reliable information for
            customers. Focused on data analysis, identified operational trends,
            and areas for improvement, contributing to enhanced operational
            efficiency and an optimal ride-hailing experience.
          </p>
        </div>
      </Tabs>
    </div>
  );
};

export default TabsNavigation;
