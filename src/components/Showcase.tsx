import React from "react";

const Showcase = () => {
  const isLargeScreen = window.innerWidth >= 768; // Define your breakpoint for screen size

  return (
    <section
      id="showcase"
      className={`flex flex-col justify-center items-center bg-mroadmap `}
    >
      <div className="h-full w-full"></div>
    </section>
  );
};

export default Showcase;
