import { roadmapIcon } from "../assets";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      // className={`bg-mobile-roadmap md:bg-linear-gradient bg-center bg-auto bg-no-repeat relative flex flex-col items-center h-[850px] md:h-[674px]`}
      className={`bg-mroadmap md:bg-droadmap bg-center bg-auto md:bg-100% bg-no-repeat relative flex flex-col items-center h-[850px] md:h-[674px]`}
    >
      <div className="flex flex-col justify-center items-center h-full w-full">
        <h2 className="font-notosans text-typo-dark-blue xl:text-[72px] md:text-[64px] xs:text-[42px] font-normal leading-[72px] mt-6">
          Roadmap
        </h2>

        <div className="hidden md:flex flex-row items-center w-full h-full grow mr-[65px]">
          <div className="grid grid-rows-2 items-center justify-center gap-44 ml-[27vw]">
            <div className="flex flex-col"></div>
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step1" className="animate-pulse" />
            </div>
          </div>
          <div className="grid grid-rows-2 items-center justify-center gap-14 ml-[6vw]">
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step2" />
              <div className="flex flex-col"></div>
            </div>
          </div>

          <div className="grid grid-rows-2 items-center justify-center gap-44 ml-[7vw]">
            <div className="flex flex-col"></div>
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step3" />
            </div>
          </div>
          <div className="grid grid-rows-2 items-center justify-center gap-14 ml-[6vw]">
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step4" />
            </div>
            <div className="flex flex-col"></div>
          </div>

          <div className="grid grid-rows-2 items-center justify-center gap-44  ml-[7vw]">
            <div className="flex flex-col"></div>
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step5" />
            </div>
          </div>
          <div className="grid grid-rows-2 items-center justify-center gap-14  ml-[6vw]">
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step6" />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>

        {/* Mobile Screen */}
        <div className="md:hidden flex flex-col justify-center items-center w-full h-full grow gap-6 mb-[142px]">
          <div className="grid grid-cols-2 items-center justify-center gap-14 -mb-4 mt-4">
            <div className="flex flex-col"></div>
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step1" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-14 mb-4 -mt-4">
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step2" />
            </div>
            <div className="flex flex-col"></div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-14">
            <div className="flex flex-col"></div>
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step3" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-14 -mb-4 mt-4">
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step4" />
            </div>
            <div className="flex flex-col"></div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-14 -mb-4 mt-4">
            <div className="flex flex-col"></div>
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step5" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-14 -mb-10 mt-10">
            <div className="flex flex-col items-center">
              <div>Q1 2022</div>
              <div>Start</div>
              <img src={roadmapIcon} alt="step6" />
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Roadmap;
