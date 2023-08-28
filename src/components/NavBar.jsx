import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";


export default function NavBar() {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  // use state hook for nav icon of open to close

  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white">
      <div>
        <h1 className="text-5xl font-signature ml-2">Deepak</h1>
      </div>
      {/* for desktop versions */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="flex cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-300 px-4"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      {/*  for mobile versions */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* showing the nav bar item if the icon is clicked otherwise not */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="cursor-pointer px-4 py-6 hover:scale-105 duration-200 text-4xl capitalize"
            >
              <Link to={link} smooth duration={500} onClick={() => setNav(!nav)}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
