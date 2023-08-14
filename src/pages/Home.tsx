import styles from "../styles";
import { arrow } from "../assets";
import ProbSol from "../components/ProbSol";
import HowItWorks from "../components/HowItWorks";
import Roadmap from "../components/Roadmap";
import Partners from "../components/Partners";
import ContactUs from "../components/ContactUs";
// import HowItWorks from "../../components/HowItWorks";
// import Roadmap from "../../components/Roadmap";
// import Partners from "../../components/Partners";
// import ContactUs from "../../components/ContactUs";

// xs: "380px",  52 56 | 18 18 | 14 20
// ss: "620px",  52 56 | 18 18 | 14 20
// sm: "768px",  76 76 | 24 24 | 14 20
// md: "1060px", 76 76 | 24 24 | 16 24
// lg: "1200px", 88 96 | 24 24 | 16 24
// xl: "1700px", 88 96 | 24 24 | 16 24
const Home = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-345% md:bg-cover xs:bg-bp-xs ss:bg-bp-ss sm:bg-bp-sm md:bg-[45%] lg:bg-[35%] flex flex-col justify-center h-screen w-full">
        <section
          id="Hero"
          className={` flex flex-col items-start w-full h-screen justify-center`}
        >
          {/* Text */}
          <div
            className={`${styles.flexStart} flex-col items-center sm:px-5 px-4 gap-16`}
          >
            {/* Heading */}
            <div className={`${styles.flexStart} flex-col gap-16`}>
              <div className="flex flex-col items-start gap-2">
                <p>
                  <span className="font-notosans sm:text-[24px] text-[18px] font-normal leading-[1em] text-typo-white">
                    Bringing Science from Web0 to{" "}
                    <span className=" font-notosans sm:text-[24px] text-[18px] font-normal leading-[1em] text-primary-blue-3">
                      Web3
                    </span>
                  </span>
                </p>
                <span className="font-notosans xxs:text-[42px] xs:text-[52px] ss:text-[52px] sm:text-[52px] md:text-[76px] lg:text-[88px] xl:text-[88px] font-normal leading-[1em]  text-typo-white capitalize">
                  Decentralizing
                  <br /> Scientific Publishing
                </span>
              </div>

              <div className="flex items-baseline flex-row gap-2">
                <rect className="w-3 h-3 bg-blue-3"></rect>
                <span className="flex-1 font-notosans md:text-[16px] text-[14px] font-normal sm:leading-6 leading-5 text-typo-white sm:w-[710px] w-[336px]">
                  Take control of your scientific contributions! Unlock the
                  potential of your research with our decentralized,
                  transparent, and collaborative platform
                </span>
              </div>
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
