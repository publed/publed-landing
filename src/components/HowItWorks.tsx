import Lottie from "lottie-react";
import { hiw, howItWorksStatic } from "../assets";

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className={`flex flex-col justify-center items-center gap-[80px]`}
    >
      <h2 className="font-notosans text-typo-dark-blue text-[28px] sm:text-[56px] leading-normal font-semibold  mt-[80px]">
        How It Works
      </h2>
      <div className="flex justify-center items-center lg:w-[1200px] h-screen">
        <img src={howItWorksStatic} alt="howitworks" />
        {/* <Lottie animationData={hiw} loop={true} /> */}
      </div>
    </section>
  );
};

export default HowItWorks;
