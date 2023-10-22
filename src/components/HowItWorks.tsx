import Lottie from "lottie-react";
import { howitworks } from "../assets";
import { useState } from "react";

const HowItWorks = () => {
  const [premiumSelected, setPremiumSelected] = useState(true);
  const [freeSelected, setFreeSelected] = useState(false);
  return (
    <section
      id="howitworks"
      className={`flex flex-col justify-center items-center px-10 py-20 gap-8`}
    >
      <h2 className="font-notosans text-typo-dark-blue text-[28px] sm:text-[56px] leading-normal font-semibold ">
        Knowledge Ecossystem
      </h2>
      {/* <div className="flex flex-row justify-start w-[296px] gap-0 mt-[40px]">
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
      </div> */}
      {/* <div className="flex justify-center items-center lg:w-[800px] h-full">
        <div className="flex flex-col justify-center">
          <div className="group h-96 w-96 ss:h-[600px] ss:w-[600px] md:w-[800px] md:h-[800px] [perspective:1000px] p-2">
            <div
              className={`flex h-full w-full rounded-xl  transition-all duration-500 md:p-10 transform-style:preserve-3d ${
                !premiumSelected ? "[transform:rotateY(360deg)]" : ""
              }`}
            >
              <div className="flex justify-center items center rounded-xl">
                {premiumSelected ? (
                  <Lottie animationData={hiw} loop={true} />
                ) : null}
              </div>
              <div className="flex justify-center items center rounded-xl mt-4">
                {freeSelected ? (
                  <>
                    <Lottie
                      animationData={hiwfm}
                      loop={true}
                      className="md:hidden"
                    />
                    <Lottie
                      animationData={hiwpm}
                      loop={true}
                      className="xs:hidden md:flex"
                    />
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex relative justify-center items-center">
        <img src={howitworks} alt="hiw" />
        <a
          href="#joinus"
          className="absolute top-[57%] left-[53%] transform -translate-x-1/2 -translate-y-1/2"
        >
          <button className=" px-4 py-2 ss:px-7 ss:py-3 rounded-full text-typo-white font-medium transition ease-in-out delay-150 bg-dark-blue-60 hover:-translate-y-1 hover:scale-110 hover:bg-inherit hover:text-typo-dark-grey duration-300 border border-dark-blue-60 ring-dark-blue-60">
            <p className="animate-pulse">Join Now!</p>
          </button>
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
