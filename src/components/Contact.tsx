import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const StyledContact = styled.div`
  padding: 4rem 12vw;
  background: #fafaff;

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
`;

const Contact: React.FunctionComponent = () => {
  return (
    <>
      <h3
        className={css`
          text-align: center;
          font-family: "Josefin Sans", sans serif;
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 500;
          text-transform: uppercase;
          margin-top: 4rem;
        `}
      >
        Contacts
      </h3>
      <StyledContact></StyledContact>
    </>
  );
};

export default Contact;
