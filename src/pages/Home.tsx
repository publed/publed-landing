import styles from "../styles";
import { arrow } from "../assets";
import ProbSol from "../components/ProbSol";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Partners from "../components/Partners";
import ContactUs from "../components/ContactUs";

import { useNavigate } from "react-router-dom";
import Showcase from "../components/Showcase";
import Testimonials from "../components/Testimonials";
import Problems from "../components/Problems";
import { useIsVisible } from "../hooks/useIsVisible";
import { LegacyRef, createRef, useRef } from "react";

const Home = () => {
  const navigate = useNavigate();

  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);
  const ref4 = useRef<HTMLDivElement>(null);
  const isVisible4 = useIsVisible(ref4);
  const ref5 = useRef<HTMLDivElement>(null);
  const isVisible5 = useIsVisible(ref5);
  const ref6 = useRef<HTMLDivElement>(null);
  const isVisible6 = useIsVisible(ref6);
  const ref7 = useRef<HTMLDivElement>(null);
  const isVisible7 = useIsVisible(ref7);
  const ref8 = useRef<HTMLDivElement>(null);
  const isVisible8 = useIsVisible(ref8);

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-345% md:bg-cover xs:bg-bp-xs ss:bg-bp-ss sm:bg-bp-sm md:bg-[45%] lg:bg-[35%] flex flex-col justify-center h-screen w-full">
        <section
          ref={ref1}
          id="Hero"
          className={` flex flex-col items-start w-full h-screen justify-center transition-opacity ease-in duration-1000 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
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
                    Bringing Knowledge from Web0 to{" "}
                    <span className=" font-notosans sm:text-[24px] text-[18px] font-normal leading-[1em] text-regular-blue-40">
                      Web3
                    </span>
                  </span>
                </p>
                <span className="font-notosans xs:text-[47px] ss:text-[52px] sm:text-[52px] md:text-[76px] lg:text-[88px] xl:text-[88px] font-normal leading-[1em]  text-typo-white capitalize">
                  Democratizing
                  <br /> & Socializing Knowledge
                </span>
              </div>

              <div className="flex items-baseline flex-row gap-2">
                <rect className="w-3 h-3 bg-regular-blue-60"></rect>
                <span className="flex-1 font-notosans md:text-[16px] text-[12px] font-normal sm:leading-6 leading-5 text-typo-white sm:w-[680px] w-[336px]">
                  Empower your knowledge!{" "}
                  <strong>Monetize and be recognized! </strong> Unlock the
                  potential of your expertise with our decentralized,
                  transparent, and collaborative knowledge-sharing platform.
                </span>
              </div>
            </div>
            <div className="flex flex-row w-full items-start">
              <a href="https://app.publed.io">
                <button className=" px-4 py-2 ss:px-7 ss:py-3 rounded-full button-main text-typo-dark-blue font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-inherit hover:text-typo-white duration-300 border border-dark-blue-60 ring-dark-blue-60">
                  Join Now!
                </button>
              </a>
            </div>
          </div>
        </section>

        <a href="#showcase" className="mb-2">
          <div className="flex flex-row justify-center items-center">
            <img src={arrow} alt="arrow" width={30} />
            <div className="font-notosans text-typo-white text-lg animate-pulse">
              Scroll Down
            </div>
          </div>
        </a>
      </div>
      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div
            ref={ref2}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Showcase />
          </div>
          <div
            ref={ref3}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Testimonials />
          </div>
          <div
            ref={ref4}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible4 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Problems />
          </div>
          <div
            ref={ref5}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible5 ? "opacity-100" : "opacity-0"
            }`}
          >
            <HowItWorks />
          </div>
          <div
            ref={ref6}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible6 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Roadmap />
          </div>
          <div
            ref={ref7}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible7 ? "opacity-100" : "opacity-0"
            }`}
          >
            <ContactUs />
          </div>
          <div
            ref={ref8}
            className={`transition-opacity ease-in duration-1000 ${
              isVisible8 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Partners />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
