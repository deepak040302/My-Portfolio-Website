import React from "react";
import Typed from "react-typed";

const App = () => {
  return (
    <div>
      <Typed
        strings={[
          "Programming Enthusiast",
          "Frontend Web Developer",
          "Competative Programmer",
        ]}
        typeSpeed={100}
        backSpeed={60}
        loop
        className="typing text-teal-500 font-bold"
      />
    </div>
  );
};

export default App;
