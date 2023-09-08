import { Link } from "react-router-dom";
import { DiscordLogo, LinkedinLogo, TwitterLogo, h2logo } from "../assets";

const Footer = () => {
  return (
    <section id="Footer" className={`bg-blue-20 flex flex-row justify-between`}>
      {/* Content */}
      <div className="flex flex-col px-10 py-10 gap-20 w-full">
        {/* Nav */}
        <div className="flex flex-row flex-wrap justify-between gap-y-10 gap-x-20 sm:pr-20 md:pr-30">
          {/* links */}
          <div className="flex flex-col gap-4 items-start">
            {/* logo */}
            <img
              src={h2logo}
              alt="publed"
              className="h-[38.2px] md:h-[45px] md:w-[170px]"
            />
            {/* social media */}
            <div className="flex flex-row gap-4">
              <a href="https://twitter.com/publed_official" target="__blank">
                <TwitterLogo fill="#4d6983" />
              </a>
              <a
                href="https://www.linkedin.com/company/publ3d/"
                target="__blank"
              >
                <LinkedinLogo fill="#4d6983" />
              </a>
              <DiscordLogo fill="#4d6983" />
            </div>
          </div>
          {/* navlinks */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-20 font-notosans text-[16px] font-light text-typo-black">
            <Link to="/about">About Us</Link>
            <Link to="/about#team">Team</Link>
            {/* <a href="/about#vision">Vision</a> */}
            {/* <a href="/about#team">Team</a>
            <a href="https://publed.gitbook.io/introduction/" target="__blank">
              Docs
            </a> */}
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
        {/* © */}
        <div className="flex justify-start">
          © 2023 Publed. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
