import { discord, github, h2logo, twitter } from "../assets";

const Footer = () => {
  return (
    <section id="Footer" className={`bg-blue-1 flex flex-row justify-between`}>
      {/* Content */}
      <div className="flex flex-col px-10 py-10 gap-20 w-full">
        {/* Nav */}
        <div className="flex flex-row flex-wrap justify-between gap-y-10 gap-x-20 sm:pr-20 md:pr-30">
          {/* links */}
          <div className="flex flex-col gap-4 items-center">
            {/* logo */}
            <img src={h2logo} alt="publed" className="h-[30px]" />
            {/* social media */}
            <div className="flex flex-row gap-4">
              <img src={twitter} alt="twitter" />
              <img src={github} alt="github" />
              <img src={discord} alt="discord" />
            </div>
          </div>
          {/* navlinks */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-20 font-notosans text-[16px] font-light text-typo-black">
            <a href="#">About Us</a>
            <a href="#">Team</a>
            <a href="#">Docs</a>
            <a href="#">Whitepaper</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        {/* © */}
        <div className="flex justify-start">
          © 2023 Publed.All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
