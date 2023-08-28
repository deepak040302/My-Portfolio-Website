import React from "react";
import { FaGithub, FaLinkedin, FaArrowDown, FaInstagram } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import avatar from "../assets/avatar.png";
import TypingAnimation from "./TypingAnimation";
// import TypingAnimation from "../components/TypingAnimation";

const Home = () => {
  const Social = [
    {
      id: 1,
      link: "https://github.com/deepak040302",
      icon: <FaGithub />,
    },
    {
      id: 2,
      link: "mailto:er.deepak040302@gmail.com",
      icon: <MdAttachEmail />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/deepak040302/",
      icon: <FaLinkedin />,
    },
    {
      id: 4,
      link: "https://www.instagram.com/deepak_04.03/",
      icon: <FaInstagram />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 200) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section
      name="home"
      className="min-h-screen flex flex-col items-center p-5 text-center"
    >
      <h1 className="text-2xl  text-rose-600 font-bold">Hi There , I'm</h1>
      <h1 className=" text-5xl  text-rose-600 font-bold font-signature mt-2">
        Deepak Nishad
      </h1>
      <h2 className=" pt-3 text-3xl font-bold">
        I am a
        <TypingAnimation/>
      </h2>

      {/* social icons */}

      <div className="flex p-8 justify-evenly lg:p-8 text-3xl w-full md:w-1/3">
        {Social.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer hover:text-rose-600 hover:scale-125 duration-300"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* image and resume section */}

      <div>
        <img
          src={avatar}
          alt="avatar"
          className=" w-72 h-72 md:w-72 md:h-72 object-cover object-top rounded-xl"
        />

        <a
          href="/Resume_Deepak.pdf"
          download={true}
          className="flex justify-center items-center mt-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white rounded-lg py-2  hover:scale-110 duration-300"
        >
          Resume
        </a>
      </div>

      {/* down arrrow animation */}
      <div className="mt-10 down-arrow cursor-pointer">
        <FaArrowDown className=" text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Home;
