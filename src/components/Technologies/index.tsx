import React from "react";
import { css } from "@emotion/css";
import Technology from "./Technology";
import Docker from "../../imgs/docker.svg";
import ReactIcon from "../../imgs/react.svg";
import SQL from "../../imgs/SQL.svg";
import Jest from "../../imgs/jest.svg";
import Teact from "../../imgs/react.svg";
import NodeIcon from "../../imgs/node.svg";
import OCLIF from "../../imgs/OCLIF.svg";
import JSIcon from "../../imgs/javascript.svg";
import Tailwind from "../../imgs/tailwind-css-wordmark.svg";
import Redux from "../../imgs/redux.svg";
import Saas from "../../imgs/sass-1.svg";
import MySQL from "../../imgs/mysql-logo.svg";
import GraphQL from "../../imgs/graphql-logo-2.svg";
import CSharp from "../../imgs/c--4.svg";
import Azure from "../../imgs/azure-1.svg";
import AWS from "../../imgs/aws-2.svg";
import Mongo from "../../imgs/Mongo.svg";

const arr = [
  {
    id: 1,
    title: "Docker",
    icon: <Docker />,
  },
  {
    id: 2,
    title: "React(Native)",
    icon: <ReactIcon />,
  },
  {
    id: 3,
    title: "SQL",
    icon: <SQL />,
  },
  {
    id: 4,
    title: "Jest & Mocha",
    icon: <Jest />,
  },
  {
    id: 5,
    title: "React",
    icon: <Teact />,
  },
  {
    id: 6,
    title: "Node",
    icon: <NodeIcon />,
  },
  {
    id: 7,
    title: "OCLIF & Commander",
    icon: <OCLIF />,
  },
  {
    id: 8,
    title: "Javascript/TS",
    icon: <JSIcon />,
  },
  {
    id: 9,
    title: "Redux",
    icon: <Redux />,
  },
  {
    id: 10,
    title: "RESTAPI",
    icon: <OCLIF />,
  },
  {
    id: 11,
    title: "GraphQL",
    icon: <GraphQL />,
  },
  {
    id: 12,
    title: "Tailwind",
    icon: <Tailwind />,
  },
  {
    id: 13,
    title: "SASS",
    icon: <Saas />,
  },
  {
    id: 14,
    title: "MYSQL",
    icon: <MySQL />,
  },
  {
    id: 15,
    title: "AWS",
    icon: <AWS />,
  },
  {
    id: 16,
    title: "AZURE",
    icon: <Azure />,
  },
  {
    id: 17,
    title: "C-SHARP",
    icon: <CSharp />,
  },
  {
    id: 18,
    title: "Mongo",
    icon: <Mongo />,
  },
  {
    id: 19,
    title: "PHP",
    icon: <OCLIF />,
  },
];

const Technologies = () => {
  return (
    <>
      <h3
        className={css`
          text-align: center;
          font-family: "Josefin Sans", sans serif;
          font-size: 1.5rem;
          line-height: 1;
          font-weight: 600;
          text-transform: uppercase;
        `}
      >
        Technologies
      </h3>
      <div
        className={css`
          display: grid;
          grid-template-columns: repeat(4, minmax(100px, 309px));
          grid-template-rows: repeat(2, 1fr);
          justify-content: center;
          gap: 20px;
          align-items: center;

          @media (max-width: 767.98px) {
            grid-template-columns: repeat(2, minmax(100px, 309px));
          }
        `}
      >
        {arr.map(({ id, title, icon }) => (
          <Technology key={id} title={title} icon={icon} />
        ))}
      </div>
    </>
  );
};

export default Technologies;
