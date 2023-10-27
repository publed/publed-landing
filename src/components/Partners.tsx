import { solanaLogo, solanaUni } from "../assets";

const Partners = () => {
  return (
    <section
      id="partners"
      className={`bg-secondary-blue60 flex flex-col justify-center items-center gap-[80px]`}
    >
      <h2 className="font-notosans text-typo-white text-[28px] sm:text-[56px] leading-normal font-semibold mt-[80px]">
        Our Partners
      </h2>
      <div className="flex flex-row mb-[120px] justify-center gap-10 flex-wrap items-center">
        <img src={solanaLogo} alt="partner1" className="w-60 md:w-5/12" />
        <img src={solanaUni} alt="partner2" className="w-72 md:w-6/12" />
      </div>
    </section>
  );
};

export default Partners;
