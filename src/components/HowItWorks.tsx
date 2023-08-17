import Lottie from "lottie-react";
import { hiw, hiwfm, hiwpm, teeny, teenyBlue } from "../assets";
import { useState } from "react";

const HowItWorks = () => {
  const [premiumSelected, setPremiumSelected] = useState(false);
  const [freeSelected, setFreeSelected] = useState(false);
  return (
    <section
      id="howitworks"
      className={`flex flex-col justify-center items-center gap-[80px] p-10`}
    >
      <h2 className="font-notosans text-typo-dark-blue text-[28px] sm:text-[56px] leading-normal font-semibold ">
        How It Works
      </h2>
      <div className="flex flex-row justify-start w-[296px] gap-0">
        <button
          className="bg-dark-blue-60 w-full py-4 px-5 rounded-s flex flex-row gap-1 items-center"
          onClick={() => {
            setPremiumSelected(true);
            setFreeSelected(false);
          }}
        >
          {premiumSelected ? <img src={teeny} alt="teeny" /> : null}
          <p className="font-notosans text-default-0 text-center text-[14px] font-normal leading-[1rem] tracking-[0.28px]">
            PREMIUM
          </p>
        </button>
        <button
          className="bg-blue-20 w-full py-4 px-5 rounded-s flex flex-row gap-1 items-center justify-center"
          onClick={() => {
            setPremiumSelected(false);
            setFreeSelected(true);
          }}
        >
          {freeSelected ? <img src={teenyBlue} alt="teenyblue" /> : null}
          <p className="font-notosans text-default-100 text-center text-[14px] font-normal leading-[1rem] tracking-[0.28px]">
            FREE
          </p>
        </button>
      </div>
      <div className="flex justify-center items-center lg:w-[800px] h-full">
        <div className="flex flex-col justify-center">
          <div className="group h-96 w-96 [perspective:1000px] p-4">
            <div
              className={`flex h-full w-full rounded-xl shadow-xl transition-all duration-500 transform-style:preserve-3d ${
                premiumSelected ? "[transform:rotateY(180deg)]" : ""
              }`}
            >
              <div className="flex  justify-center items center rounded-xl">
                {premiumSelected ? (
                  <Lottie animationData={hiw} loop={true} />
                ) : null}
              </div>
              <div className="flex justify-center items center rounded-xl mb-8 ">
                {freeSelected ? (
                  <Lottie animationData={hiwfm} loop={true} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
