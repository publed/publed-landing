"use client";
import Link from 'next/link';
import Logo from '../icons/Logo';
import Publed from '../icons/Publed';
import LogoAlternative from '../icons/LogoAlternative';
import X from '../icons/X';
import Linkedin from '../icons/Linkedin';
import Discord from '../icons/Discord';


const Footer = () => {


  return (
    <section
      id="Footer"
      className="bg-regular-blue-20 flex flex-row justify-between"
    >
      {/* Content */}
      <div className="flex flex-col px-10 py-10 gap-20 w-full">
        {/* Nav */}
        <div className="flex flex-row flex-wrap justify-between gap-y-10 gap-x-20 sm:pr-20 md:pr-30">
          {/* links */}
          <div className="flex flex-col gap-4 items-start">
            {/* logo */}
            <Link href="/" className="flex items-center justify-center md:justify-start md:gap-3" passHref>
              <LogoAlternative className="h-10 w-24 fill-current text-black" />
              <Publed className="h-10 w-24 fill-current text-black" />
            </Link>
            {/* social media */}
            <div className="flex flex-row gap-4">
              {/* If DiscordLogo, LinkedinLogo, and TwitterLogo are SVG components, ensure they are wrapped in 'a' tags for external links */}
              <Link href={'https://twitter.com/publed_official'}>
                <X className="fill-[#4D6983] transition-colors duration-300 hover:fill-gray-600" />
              </Link>
              <Link href={'https://www.linkedin.com/company/publ3d/'}>
                <Linkedin className="fill-[#4D6983] transition-colors duration-300 hover:fill-gray-600" />
              </Link>
              <Link href={'https://discord.gg/EWXt4ksYPs'}>
                <Discord className="fill-[#4D6983] transition-colors duration-300 hover:fill-gray-600" />
              </Link>
            </div>
          </div>
          {/* navlinks */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-20 font-notosans text-base font-light text-gray-800">
            <Link href="/about">About Us</Link>
            <Link href="/about">Team</Link>
            {/* External links remain within 'a' tags */}
            <Link href="/blog">
              Docs
            </Link>
            <Link href="/about">Privacy Policy</Link>
            <Link href="/about">Terms & Conditions</Link>
          </div>
        </div>
        {/* © */}
        <div className="flex justify-start">
          © {new Date().getFullYear()} Publed. All rights reserved.
        </div>
      </div>
    </section>
  )
};

export default Footer;
