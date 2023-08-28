import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import disease from "../assets/p2.jpg";
import editor from "../assets/editor.png";
import p3 from "../assets/portfolio.png";
import p4 from "../assets/p4.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: disease,
      title: "HealthCure",
      github:
        "https://github.com/deepak040302/Disease-Prediction-Using-Machine-Learning.git",
      demo: "https://github.com/deepak040302/Disease-Prediction-Using-Machine-Learning.git",
    },
    {
      id: 2,
      image: editor,
      title: "Basic Image Editor using Numpy ",
      github:
        "https://github.com/deepak040302/Basic-Image-Manipulation-using-Numpy.git",
      demo: "https://github.com/deepak040302/Basic-Image-Manipulation-using-Numpy.git",
    },
    {
      id: 3,
      image: p3,
      title: "Portfolio Website",
      github: "https://github.com/deepak040302/My-Portfolio-Website.git",
      demo: "https://github.com/deepak040302/My-Portfolio-Website.git",
    },
    {
      id: 4,
      image: p4,
      title: "BestApp",
      github: "https://www.google.com",
      demo: "https://www.google.com",
    },
  ];

  return (
    <div name="projects">
      <Section
        title="Projects"
        subtitle="Below are the some of my Projects on which i have worked upon."
      >
        <div className=" grid gap-8 lg:gap-14 lg:grid-cols-2">
          {projects.map(({ id, image, title, github, demo }) => (
            <div
              key={id}
              className=" max-w-lg flex shadow-lg shadow-blue-800 rounded-2xl overflow-hidden"
            >
              <img src={image} alt="" className="w-2/3" />
              <div className="w-1/3 flex flex-col justify-evenly items-center p-1">
                <h2 className=" text-1xl">{title}</h2>

                <a
                  href={github}
                  className=" text-lg md:text-xl lg:text-2xl cursor-pointer  hover:scale-110 duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href={github}
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer  hover:scale-110 duration-150"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
