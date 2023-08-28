import React from "react";
import Section from "./common/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import contact from "../assets/mobile.png";

const Contact = () => {
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
  ];

  return (
    <div name="contact">
      <Section
        title="Contact"
        subtitle="Want to send me some Message. I'd love to hear from you ."
        className="w-full h-screen"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div>
            <img src={contact} alt="contact_info" className=" w-32 h-32" />
          </div>

          <div>
            <p className=" max-w-xs md:max-w-lg font-extralight">
              Please fill the form given below to send me any Message.
            </p>
          </div>

          <div className=" flex w-full items-center justify-evenly text-3xl">
            {Social.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className=" duration-200 ease-in-out hover:text-rose-600"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* form and button */}

          <div className=" p-8 text-left w-full items-center justify-center">
            <form
              action="https://getform.io/f/2c8517b9-0945-4888-a2f9-12c6be833b6a"
              method="POST"
            >
              <div className=" gap-4 w-full">
                <div className=" flex flex-col">
                  <label className=" capitalize text-sm py-2 font-extrabold">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div className=" flex flex-col my-2">
                  <label className=" capitalize text-sm py-2 font-extrabold">
                    phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div className=" flex flex-col my-2">
                  <label className=" capitalize text-sm py-2 font-extrabold">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email "
                    className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div className=" flex flex-col my-2">
                  <label className=" capitalize text-sm py-2 font-extrabold">
                    message
                  </label>
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Enter the message"
                    required
                    className=" border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>

              <div className=" flex items-center justify-center">
                <button className="uppercase my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 rounded-md cursor-pointer tracking-wider hover:scale-110 duration-300">
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
