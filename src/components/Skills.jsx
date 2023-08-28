import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
// import nextjs from "../assets/nextjs.png";
// import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import python from "../assets/python.png";
import Cpp from "../assets/C++.png";
import algorithms from "../assets/algorithms.png";
import data_structures from "../assets/data_structures.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Cpp,
      title: "C++ ",
      style: "shadow-white",
    },
    {
      id: 2,
      src: python,
      title: "Python",
      style: "shadow-sky-400",
    },
    {
      id: 3,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: data_structures,
      title: "Data Structures",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: algorithms,
      title: "Algorithms",
      style: "shadow-green-400",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
  ];

  return (
    <div
      name="skills"
      className=" mt-10 w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full text-white h-screen">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Skills
          </p>
          <p className="py-6 font-light text-gray-500">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;