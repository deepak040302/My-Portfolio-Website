import React, { useEffect } from 'react';
import Typed from 'typed.js';

const App = () => {
  useEffect(() => {
    const options = {
      strings: ["Programming Enthusiast", "Competitive Programming","Frontend Web Devloper"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      showCursor: false, // Show the cursor
      cursorChar: '|',  // Set the cursor character
    };

    const typed = new Typed('.typing', options);

    return () => {
      // Cleanup function to destroy the Typed instance when the component unmounts
      typed.destroy();
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div>
      <p className="typing text-teal-500"></p>
    </div>
  );
};

export default App;
