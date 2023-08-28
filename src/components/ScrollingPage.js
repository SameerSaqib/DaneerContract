import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3"; // Import Section3 with a distinct name
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import Section10 from "./Section10";

const ScrollingPage = () => {
  return (
    <div className="scrolling-page">
      <Section1 />
      <Section2 />
      <Section3 /> {/* Use the distinct name when using the component */}
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      {/* Include other sections */}
    </div>
  );
};

export default ScrollingPage;
