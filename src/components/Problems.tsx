import React from "react";
import { circlelogo } from "../assets";

const Problems = () => {
  return (
    <section id="problems" className={`relative grid grid-cols-2`}>
      <div
<<<<<<< Updated upstream
        className={`bg-dark-blue-60 flex flex-col justify-center items-center w-full gap-12 py-12 px-5 ss:py-16 ss:pr-15 ss:pl-10`}
=======
        className={`bg-dark-blue-60 flex flex-col justify-center items-center md:w-full gap-1 md:gap-12 md:py-20 md:pl-60 md:pr-36`}
>>>>>>> Stashed changes
      >
        <p className="text-default-0 text-2xl md:text-5xl leading-[60px] font-normal">
          Problems
        </p>
<<<<<<< Updated upstream
        <div className="flex flex-col gap-6 w-full">
          <div className="bg-dark-blue-110 py-4 px-6 rounded-lg flex flex-col h-[131px]">
=======
        <div className="flex flex-col gap-6">
          <div className="bg-dark-blue-110 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col md:md:h-[131px]">
>>>>>>> Stashed changes
            <ProblemItemCenter
              title={"Access Barriers"}
              desc={" - the rise in textbooks prices since 1977"}
              accent={"1041%"}
              accentColor={"pink"}
              reversed
            />
          </div>
          <div className="bg-dark-blue-110 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col md:h-[131px]">
            <ProblemItemCenter
              title={"Silos"}
              desc={"Social Media Platforms for Knowledge"}
              accent={"0"}
              accentColor={"purple"}
              reversed
            />
          </div>
          <div className="bg-dark-blue-110 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col md:h-[131px]">
            <ProblemItemCenter
              title={"Knowledge Fragmentation"}
              desc={"of fragmented data expected by 2025"}
              accent={"180ZB"}
              accentColor={"red"}
              reversed
            />
          </div>
          <div className="bg-dark-blue-110 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col md:h-[131px]">
            <ProblemItemCenter
              title={"Obsolete Format"}
              desc={"static format is obsolete"}
              accent={"1600's"}
              accentColor={"blue"}
              reversed
            />
          </div>
          <div className="bg-dark-blue-110 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col md:h-[131px]">
            <ProblemItemCenter
              title={"Lack of Incentives"}
              desc={
                "hours spent reviewing research and no incentives to share knowledge"
              }
              accent={"100M"}
              accentColor={"yellow"}
              reversed
            />
          </div>
        </div>
      </div>
      <div className="hidden ss:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <circle className="flex bg-dark-blue-60 bolinha justify-center items-center rounded-full h-20 w-20 md:w-40 md:h-40">
          <img src={circlelogo} alt="logo" className="h-[48px] md:h-[96px]" />
        </circle>
      </div>
      <div
<<<<<<< Updated upstream
        className={`bg-blue-20 flex flex-col justify-center items-center w-full gap-12 py-12 px-5 ss:py-16 ss:pl-15 ss:pr-10`}
=======
        className={`bg-blue-20 flex flex-col justify-center items-center md:w-full gap-1 md:gap-12 md:py-20 md:pl-60 md:pr-36`}
>>>>>>> Stashed changes
      >
        <p className="text-dark-blue-60 text-2xl md:text-5xl leading-[60px] font-normal">
          Solutions
        </p>
<<<<<<< Updated upstream
        <div className="flex flex-col gap-6 w-full">
          <div className="bg-regular-blue-30 py-4 px-6 rounded-lg flex flex-col h-[131px]">
=======
        <div className="flex flex-col gap-6">
          <div className="bg-regular-blue-30 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col h-[140px]">
>>>>>>> Stashed changes
            <SolutionItemCenter
              title={"Democratizing of Knowledge"}
              desc={
                "Publed democratizes access to the knowledge by cutting down the middleman costs"
              }
              accentColor={"pink"}
            />
          </div>
          <div className="bg-regular-blue-30 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col h-[140px]">
            <SolutionItemCenter
              title={"Socialization of Knowledge"}
              desc={
                "Publed offers a decentralized Social Media for Knowledge sharing"
              }
              accentColor={"purple"}
            />
          </div>
          <div className="bg-regular-blue-30 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col h-[140px]">
            <SolutionItemCenter
              title={"Aggregation of Knowledge"}
              desc={
                "Publed provides aggregation and agglomeration of Knowledge"
              }
              accentColor={"red"}
            />
          </div>
          <div className="bg-regular-blue-30 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col h-[140px]">
            <SolutionItemCenter
              title={"Obsolete Format"}
              desc={
                "Publed packages all artifacts including datasets, code, figures, slides, videos, into a Digital and Dynamic Knowledge Object."
              }
              accentColor={"blue"}
            />
          </div>
          <div className="bg-regular-blue-30 py-2 px-3 md:py-4 md:px-6 rounded-lg flex flex-col h-[140px]">
            <SolutionItemCenter
              title={"Monetization and Ownership"}
              desc={
                "Publed enables the monetization of Knowledge while retaining IP ownership"
              }
              accentColor={"yellow"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;

const colorMap = {
  purple: ["text-secondary-purple", "bg-secondary-purple"],
  pink: ["text-secondary-pink", "bg-secondary-pink"],
  red: ["text-secondary-red", "bg-secondary-red"],
  yellow: ["text-secondary-yellow", "bg-secondary-yellow"],
  blue: ["text-primary-blue-3", "bg-blue-3"],
};

const descStyle = "text-[9px] leading-tight md:text-[14px]";

const ProblemItemCenter = ({ title, desc, accent, accentColor }: any) => {
  //@ts-ignore
  const [textColor, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex flex-col justify-end items-center md:items-baseline gap-2 md:gap-4`}
    >
      <div className="flex flex-row items-center gap-1">
        <div className={`h-3 w-3 ${bgColor}`} />

        <h2 className="text-default-20 text-[10px] sm:text-[20px] leading-6 font-medium uppercase">
          {title}
        </h2>
      </div>
      <div
        className={
          "flex flex-col items-center text-center md:text-left md:gap-4"
        }
      >
<<<<<<< Updated upstream
        <p className={`${descStyle} text-default-40 max-w-56`}>
=======
        <p className={`${descStyle} text-default-40 w-24 sm:w-56`}>
>>>>>>> Stashed changes
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

const SolutionItemCenter = ({ title, desc, accentColor }: any) => {
  //@ts-ignore
  const [_, bgColor] = colorMap[accentColor];

  return (
    <div
      className={`flex flex-col md:flex-row justify-end items-center md:items-baseline gap-1 md:gap-4`}
    >
      <div className={`h-3 w-3 ${bgColor}`} />
      <div className={"text-center md:text-left"}>
        <h2 className="text-default-80 text-[10px] sm:text-[20px] leading-6 font-medium uppercase md:mb-2">
          {title}
        </h2>

<<<<<<< Updated upstream
        <p className={`${descStyle} text-default-60 max-w-44 sm:max-w-80`}>
          {desc}
        </p>
=======
        <p className={`${descStyle} text-default-60 w-24 sm:w-80`}>{desc}</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
