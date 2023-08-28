import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me
          </h2>
        </div>
        <p className="text-2xl mt-15 pt-5 text-center text-white-400">
          Hello ! <br/> 
          I'm Deepak Nishad , a passionate and a dedicated computer science
          student with a curiosity for all things related to tech. <br/>
          Throughout my academic journey, I've honed my skills in various programming languages, algorithms, and software development methodologies. <br/>
          My goal is to leverage my growing expertise in computer
          science to contribute to innovative projects that make a meaningful
          impact. <br/>
          Feel free to explore my portfolio and Join me on this
          exciting expedition through the digital realm, where creativity meets
          technology.
        </p>
      </div>
    </div>
  );
}

export default About;
