import React from "react";
import { showcase, vision } from "../assets";
import Vision from "../assets/svg/Vision";

const Showcase = () => {
  return (
    <section
      id="showcase"
      className={`flex flex-col justify-center items-center bg-dark-blue-60`}
    >
      {/* <div className="flex flex-col mt-[120px] mb-10 gap-4 items-center">
        <p className="text-default-0 text-5xl font-normal leading-10">
          Knowledge-centric Platform
        </p>
        <p className="text-default-20 text-xl font-medium leading-8">
          Empowering Knowledge and Connections
        </p>
      </div> */}
      <img src={vision} alt="showcase" className="w-full h-full" />
    </section>
  );
};

export default Showcase;
