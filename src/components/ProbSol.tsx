import { arrows, arrowsMd, arrowsSm, hlogo } from "../assets";

const ProbSol = () => {
  return (
    <section
      id="probsol"
      className={`relative flex flex-col items-start self-stretch`}
    >
      <div
        className={`bg-secondary-blue60 flex flex-col justify-between items-center sm:px-10 px-5 py-20 gap-2.5 w-full h-[618px]`}
      >
        <h2 className="font-notosans text-typo-white text-[28px] sm:text-[56px] font-normal leading-[56px] drop-shadow-[0_0.5px_2px_rgba(255,255,255,255)] text-center">
          Traditional Scientific Publishing
        </h2>
      </div>

      <div
        className={`bg-blue-1 flex flex-col justify-end items-center sm:px-10 px-5 py-20 gap-2.5 w-full h-[618px]`}
      >
        <h2 className="font-notosans text-typo-dark-blue text-[28px] sm:text-[56px] font-normal leading-[1rem] drop-shadow-[0_2px_2px_rgb(0,74,172)]">
          Solutions
        </h2>
      </div>

      {/* Setas LG */}
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={arrows} alt="arrows" className="hidden xlg:block" />
          <img src={arrowsSm} alt="arrows" className="pt-[108px] md:hidden" />
          <img
            src={arrowsMd}
            alt="arrows"
            className="hidden md:block xlg:hidden"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <circle className="flex bg-blue-4 bolinha justify-center items-center rounded-full h-20 w-20 md:w-40 md:h-40">
            <img src={hlogo} alt="logo" />
          </circle>
        </div>

        {/* Problems */}
        <div className="flex flex-col items-center h-full w-full font-notosans text-typo-white">
          {/* 1st Row */}
          <div className="flex justify-center mt-[170px] mb-5 md:mb-20 md:mt-16 xlg:mb-8 xlg:mt-28">
            {/* Monopoly */}
            <ProblemItem
              title={"Monopoly"}
              desc={"scientific publishing market"}
              accent={"$26B"}
              accentColor={"pink"}
              reversed
            />
          </div>
          {/* 2nd Row */}
          <div className="flex justify-center gap-11 mb-9 md:gap-52 md:mb-20 xlg:gap-[365px]">
            {/* Centralization */}
            <ProblemItem
              title={"Centralization"}
              desc={"belongs to the top 5 publishers"}
              accent={"50%"}
              accentColor={"purple"}
            />
            {/* Blindness */}
            <ProblemItem
              title={"Opacity Culture"}
              desc={"of non-reproduceable"}
              // desc={"of non-reproduceable research - Replication Crisis"}
              accent={"70%"}
              accentColor={"red"}
              reversed
            />
          </div>
          {/* 3rd Row */}
          <div className="flex justify-center gap-16 md:gap-60 xlg:gap-[625px]">
            {/* Paywalls */}
            <ProblemItem
              title={"Paywalls"}
              desc={"of academic docs have limited access"}
              accent={"75%"}
              accentColor={"blue"}
            />
            {/* Copyrights */}
            <ProblemItem
              title={"Pre-Web format"}
              desc={"paper static format"}
              // desc={"paper static format is obsolete"}
              accent={"1600s"}
              accentColor={"yellow"}
              reversed
            />
          </div>
        </div>
        <div className="h-[190px] md:h-[270px] xlg:h-[345px]"></div>
        {/* Solutions */}
        <div className="flex flex-col items-center justify-end h-full w-full font-notosans text-typo-white">
          {/* 1st Row */}
          <div className="flex justify-center gap-16 mb-9 md:gap-60 md:mb-8 xlg:gap-[625px]">
            {/* Ownership */}
            <SolutionItem
              title={"Ownership"}
              desc={
                "Leveraging Web3 technologies, Publed ensures that authors retain ownership of their research objects"
              }
              accentColor={"yellow"}
              reversed
            />
            {/* Transparency */}
            <SolutionItem
              title={"Transparency"}
              desc={
                "Publed enables transparency and traceability within the scientific publishing process, since all actions can be publicly accessed and audited"
              }
              accentColor={"blue"}
            />
          </div>
          {/* 2nd Row */}
          <div className="flex justify-center gap-11 mb-6 md:gap-52 md:mb-4 xlg:gap-[365px]">
            {/* Democratization */}
            <SolutionItem
              title={"Democratization"}
              desc={
                "Publed enables a democratic access to sciencitific knowledge by cutting down the middleman costs"
              }
              accentColor={"red"}
              reversed
            />
            {/* Decentralization */}
            <SolutionItem
              title={"Decentralization"}
              desc={
                "Blockchain technology to distribute content across a network of nodes"
              }
              accentColor={"purple"}
            />
          </div>
          {/* 3rd Row */}
          <div className="flex justify-center">
            {/* Incentivization */}
            <SolutionItemCenter
              title={"Incentivization"}
              desc={
                "Publed empowers researchers enabling the monetization of their genuine work through crypto-economic incentives"
              }
              accentColor={"pink"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const colorMap = {
  purple: ["text-secondary-purple", "bg-secondary-purple"],
  pink: ["text-secondary-pink", "bg-secondary-pink"],
  red: ["text-secondary-red", "bg-secondary-red"],
  yellow: ["text-secondary-yellow", "bg-secondary-yellow"],
  blue: ["text-primary-blue-3", "bg-blue-3"],
};

const SolutionItemCenter = ({ title, desc, accentColor }: any) => {
  //@ts-ignore
  const [_, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex flex-col md:flex-row justify-end items-center md:items-baseline gap-1 md:gap-4`}
    >
      <rect className={`h-3 w-3 ${bgColor}`} />
      <div className={"text-center md:text-left"}>
        <h2 className="font-notosans text-default-80 text-xs sm:text-[20px] leading-6 font-medium uppercase md:mb-2">
          {title}
        </h2>

        <p className="font-notosans text-[9px] md:text-[14px] font-normal leading-tight w-80 text-default-60">
          {desc}
        </p>
      </div>
    </div>
  );
};

const SolutionItem = ({ title, desc, accentColor, reversed }: any) => {
  //@ts-ignore
  const [_, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex justify-end items-baseline gap-2 md:gap-4 ${
        reversed && "flex-row-reverse"
      }`}
    >
      <rect className={`h-3 w-3 ${bgColor}`} />
      <div className={reversed && "text-right"}>
        <h2 className="font-notosans text-default-80 text-xs sm:text-[20px] leading-6 font-medium uppercase md:mb-2">
          {title}
        </h2>

        <p className="font-notosans text-[9px] md:text-[14px] font-normal leading-tight w-30 sm:w-60 md:w-80 text-default-60">
          {desc}
        </p>
      </div>
    </div>
  );
};

const ProblemItem = ({ title, desc, accent, accentColor, reversed }: any) => {
  //@ts-ignore
  const [textColor, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex flex-col-reverse w-56 gap-2 md:items-center md:gap-4 md:w-96 ${
        reversed
          ? "md:flex-row-reverse justify-start items-start"
          : "md:flex-row justify-end items-end"
      }`}
    >
      <p className="font-notosans text-xs md:text-sm text-default-40">
        <span className={`text-base md:text-[24px] leading-none ${textColor}`}>
          {accent}
        </span>{" "}
        {desc}
      </p>

      <div
        className={`flex items-baseline gap-3 ${
          reversed && "flex-row-reverse"
        }`}
      >
        <h2 className="font-notosans text-default-20 text-[20px] leading-6 font-medium uppercase w-min">
          {title}
        </h2>
        <rect className={`h-3 w-3 ${bgColor}`}></rect>
      </div>
    </div>
  );
};

export default ProbSol;
