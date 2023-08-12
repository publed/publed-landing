import Lottie from "lottie-react";
import { hiw } from "../assets";

const HowItWorks = () => {
  return (
    <section
      id="howitworks"
      className={`flex flex-col justify-center items-center gap-[80px]`}
    >
      <h2 className="font-notosans text-typo-dark-blue text-[72px] font-semibold leading-[72px] mt-[80px]">
        Publed Flow
      </h2>
      <div className="flex justify-center items-center lg:w-[1200px] h-full">
        <Lottie animationData={hiw} loop={true} />
      </div>
    </section>
  );
};

export default HowItWorks;
