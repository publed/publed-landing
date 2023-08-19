import { arrows, arrowsMd, arrowsSm, circlelogo, hlogo } from "../assets";

const ProbSol = () => {
  return (
    <section
      id="probsol"
      className={`relative flex flex-col items-start self-stretch`}
    >
      <div
        className={`bg-secondary-blue60 flex flex-col justify-between items-center sm:px-10 px-5 py-20 gap-2.5 w-full h-[580px] sm:h-[678px]`}
      >
        <h2 className="font-notosans text-typo-white text-[28px] sm:text-[56px] leading-tight drop-shadow-[0_0.5px_2px_rgba(255,255,255,255)] text-center">
          Traditional System <br /> - Pain Points
        </h2>
      </div>

      <div
        className={`bg-blue-20 flex flex-col justify-end items-center sm:px-10 px-5 py-20 gap-2.5 w-full h-[580px] sm:h-[678px]`}
      ></div>

      {/* Setas LG */}
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen">
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
          <circle className="flex bg-dark-blue-60 bolinha justify-center items-center rounded-full h-20 w-20 md:w-40 md:h-40">
            <img src={circlelogo} alt="logo" className="h-[48px] md:h-[96px]" />
          </circle>
        </div>

        {/* Problems */}
        <div className="flex flex-col items-center h-full w-full font-notosans text-typo-white">
          {/* 1st Row */}
          <div className="flex justify-center mt-[120px] mb-6 sm:mt-[115px] md:mb-16 md:mt-16 xlg:mb-2 xlg:mt-24">
            {/* Monopoly */}
            <ProblemItemCenter
              title={"Centralized Monopoly"}
              desc={"scientific publishing market"}
              accent={"$26B"}
              accentColor={"pink"}
              reversed
            />
          </div>
          {/* 2nd Row */}
          <div className="flex justify-center gap-11 mb-4 md:gap-52 md:mb-20 xlg:gap-[365px]">
            {/* Centralization */}
            <ProblemItem
              title={"Silos"}
              desc={"of papers are not read by anyone else other than authors"}
              accent={"50%"}
              accentColor={"purple"}
            />
            {/* Blindness */}
            <ProblemItem
              title={"Opacity Culture"}
              desc={
                "main authorities(reviewers, authors, middleman) undergo opaque processes"
              }
              accent={"3"}
              accentColor={"red"}
              reversed
            />
          </div>
          {/* 3rd Row */}
          <div className="flex justify-center gap-16 md:gap-60 xlg:gap-[625px]">
            {/* Paywalls */}
            <ProblemItem
              title={"Paywalls"}
              desc={"of scholarly docs have limited access"}
              accent={"75%"}
              accentColor={"blue"}
            />
            {/* Copyrights */}
            <ProblemItem
              title={"Pre-Web format"}
              desc={"paper static format is obsolete"}
              accent={"1600's"}
              accentColor={"yellow"}
              reversed
            />
          </div>
        </div>
        <div className="h-[170px] sm:h-[170px] md:h-[275px] xlg:h-[345px]"></div>
        {/* Solutions */}
        <div className="flex flex-col items-center justify-end h-full w-full font-notosans text-typo-white">
          {/* 1st Row */}
          <div className="grid grid-cols-2 justify-center gap-16 mb-4 sm:mb-16 md:gap-60 md:mb-12 xlg:gap-[620px]">
            {/* Ownership */}
            <SolutionItem
              title={"Democratization"}
              desc={
                "Publed democratizes access to the scientific knowledge by cutting down the middleman costs"
              }
              accentColor={"yellow"}
              reversed
            />
            {/* Transparency */}
            <SolutionItem
              title={"Dynamic Research Objects"}
              desc={
                "Publed combines all artifacts of research (e.g., document, datasets, code, figures, slides, videos) in a Dynamic Multi-Modal Research Object"
              }
              accentColor={"blue"}
            />
          </div>
          {/* 2nd Row */}
          <div className="grid grid-cols-2 justify-center gap-11 mb-6 sm:mb-12 md:gap-52 md:mb-12 xlg:gap-[365px]">
            {/* Democratization */}
            <SolutionItem
              title={"Socializing Science"}
              desc={
                "Publed enables advanced Peer-to-Peer interaction and socialization of science"
              }
              accentColor={"red"}
              reversed
            />
            {/* Decentralization */}
            <SolutionItem
              title={"Transparency"}
              desc={
                "Publed enables transparency and traceability within the scientific publishing process"
              }
              accentColor={"purple"}
            />
          </div>
          {/* 3rd Row */}
          <div className="flex justify-center">
            {/* Monetization and Ownership */}
            <SolutionItemCenter
              title={"Monetization and Ownership"}
              desc={
                "Publed enables the monetization of researchers' genuine work while retaining their IP ownership"
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

const descStyle = "text-[9px] leading-tight md:text-[14px]";

const SolutionItemCenter = ({ title, desc, accentColor }: any) => {
  //@ts-ignore
  const [_, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex flex-col md:flex-row justify-end items-center md:items-baseline gap-1 md:gap-4`}
    >
      <div className={`h-3 w-3 ${bgColor}`} />
      <div className={"text-center md:text-left"}>
        <h2 className="text-default-80 text-xs sm:text-[20px] leading-6 font-medium uppercase md:mb-2">
          {title}
        </h2>

        <p className={`${descStyle} text-default-60 w-44 sm:w-80`}>{desc}</p>
      </div>
    </div>
  );
};
const ProblemItemCenter = ({ title, desc, accent, accentColor }: any) => {
  //@ts-ignore
  const [textColor, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex flex-col-reverse md:flex-row justify-end items-center md:items-baseline gap-2 md:gap-4`}
    >
      <div className={`h-3 w-3 ${bgColor}`} />
      <div
        className={
          "flex flex-col items-center text-center md:text-left md:flex-row md:gap-4"
        }
      >
        <h2 className="text-default-20 text-xs sm:text-[20px] leading-6 font-medium uppercase md:mb-2">
          {title}
        </h2>

        <p className={`${descStyle} text-default-40 w-56`}>
          <span
            className={`text-xs sm:text-base md:text-[24px] leading-none ${textColor}`}
          >
            {accent}
          </span>{" "}
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
      className={`flex flex-col-reverse flex-wrap sm:w-56 gap-2 md:items-center md:gap-4 md:w-96 ${
        reversed
          ? "md:flex-row-reverse justify-start items-start"
          : "md:flex-row justify-end items-end"
      }`}
    >
      <p
        className={`${descStyle} text-default-40 w-30 sm:w-auto flex-1 ${
          reversed ? "text-left ml-6 md:ml-0" : "text-right mr-6 md:mr-0"
        }`}
      >
        <span
          className={`text-xs sm:text-base md:text-[24px] leading-none ${textColor}`}
        >
          {accent}
        </span>{" "}
        {desc}
      </p>

      <div
        className={`flex items-baseline gap-3 ${
          reversed && "flex-row-reverse"
        }`}
      >
        <h2 className="text-default-20 text-xs sm:text-[20px] leading-tight font-medium uppercase">
          {title}
        </h2>
        <div className={`h-3 w-3 ${bgColor}`} />
      </div>
    </div>
  );
};

const SolutionItem = ({ title, desc, accentColor, reversed }: any) => {
  //@ts-ignore
  const [_, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex justify-start items-baseline gap-2 md:gap-4 ${
        reversed && "flex-row-reverse"
      }`}
    >
      <div className={`h-3 w-3 ${bgColor}`} />
      <div className={reversed && "text-right"}>
        <h2 className="text-default-80 text-xs sm:text-[20px] leading-6 font-medium uppercase sm:mb-2">
          {title}
        </h2>

        <p className={`${descStyle} text-default-60 w-30 sm:w-60 md:w-80`}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProbSol;
