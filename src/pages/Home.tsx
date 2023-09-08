import styles from "../styles";
import { arrow } from "../assets";
import ProbSol from "../components/ProbSol";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Partners from "../components/Partners";
import ContactUs from "../components/ContactUs";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-345% md:bg-cover xs:bg-bp-xs ss:bg-bp-ss sm:bg-bp-sm md:bg-[45%] lg:bg-[35%] flex flex-col justify-center h-screen w-full">
        <section
          id="Hero"
          className={` flex flex-col items-start w-full h-screen justify-center`}
        >
          {/* Text */}
          <div
            className={`${styles.flexStart} flex-col items-center sm:px-5 px-[5px] gap-10`}
          >
            {/* Heading */}
            <div className={`${styles.flexStart} flex-col gap-16`}>
              <div className="flex flex-col items-start gap-2">
                <p>
                  <span className="font-notosans sm:text-[24px] text-[16px] font-normal leading-[1em] text-typo-white">
                    Bringing Science from Web0 to{" "}
                    <span className=" font-notosans sm:text-[24px] text-[18px] font-normal leading-[1em] text-regular-blue-40">
                      Web3
                    </span>
                  </span>
                </p>
                <span className="font-notosans xs:text-[47px] ss:text-[52px] sm:text-[52px] md:text-[76px] lg:text-[88px] xl:text-[88px] font-normal leading-[1em]  text-typo-white capitalize">
                  Democratizing
                  <br /> Scientific Publishing
                </span>
              </div>

              <div className="flex items-baseline flex-row gap-2">
                <rect className="w-3 h-3 bg-regular-blue-60"></rect>
                <span className="flex-1 font-notosans md:text-[16px] text-[12px] font-normal sm:leading-6 leading-5 text-typo-white sm:w-[680px] w-[336px]">
                  Take control of your scientific contributions!{" "}
                  <strong>Monetize, be rewarded! </strong> Unlock the potential
                  of your research with our decentralized, transparent, and
                  collaborative platform.
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full items-start">
              <a href="#joinus">
                <button className=" px-4 py-2 ss:px-7 ss:py-3 rounded-full button-main text-typo-dark-blue font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-3 duration-300">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
        </section>

        <a href="#probsol" className="mt-auto">
          <div className="flex flex-row justify-center">
            <img src={arrow} alt="arrow" />
            <div className="font-notosans text-typo-white">Scroll Down</div>
          </div>
        </a>
      </div>
      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <ProbSol />
          <HowItWorks />
          <Roadmap />
          <Partners />
          <ContactUs />
        </div>
      </div>
    </>
  );
};

export default Home;
