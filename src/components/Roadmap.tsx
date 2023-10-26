import { lroadmap, sroadmap } from "../assets";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className={`bg-dark-blue-60 flex flex-col items-center justify-center h-full py-20`}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-typo-white text-5xl font-normal leading-[60px]">
          Roadmap
        </h1>
        <img
          src={lroadmap}
          alt="lroadmap"
          className="w-full h-full hidden sm:block"
        />
        <img
          src={sroadmap}
          alt="sroadmap"
          className="w-full h-full block sm:hidden"
        />
      </div>
    </section>
  );
};
export default Roadmap;
