import Link from 'next/link';
import Logo from '../icons/Logo';
import Publed from '../icons/Publed';
import LogoAlternative from '../icons/LogoAlternative';
import X from '../icons/X';
import Linkedin from '../icons/Linkedin';
import Discord from '../icons/Discord';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-regular-blue-20 p-6 transition-all duration-300 ease-in-out md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:gap-3">
        <Link
          href={'/'}
          className="flex items-center justify-center md:justify-start md:gap-3"
        >
          <LogoAlternative className="h-10 w-24 fill-current text-black" />
          <Publed className="h-10 w-24 fill-current text-black" />
        </Link>

        <div className="mt-3 flex gap-3 md:mt-0">
          <Link href={'https://twitter.com/publed_official'}>
            <X className="fill-[#4D6983] transition-colors duration-300 hover:fill-gray-600" />
          </Link>
          <Link href={'https://www.linkedin.com/company/publ3d/'}>
            <Linkedin className="fill-[#4D6983] transition-colors duration-300 hover:fill-gray-600" />
          </Link>
          <Link href={'https://discord.gg/xaFDCKqV'}>
            <Discord className="fill-[#4D6983] transition-colors duration-300 hover:fill-gray-600" />
          </Link>
        </div>
        <div className="mt-3 flex h-full items-center justify-center md:mt-0">
          <span className="text-center font-sans font-light text-default-100">
            © {new Date().getFullYear()} Publed. All rights reserved.
          </span>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:justify-center md:gap-8">
          <div className="flex flex-col items-center justify-center font-sans font-light text-default-100 md:items-start md:justify-center md:gap-4">
            <Link href="/about/">
              <span className="transition-colors duration-300 hover:text-gray-600 hover:underline">
                About Us
              </span>
            </Link>
            <span>Team</span>
          </div>
          <div className="flex flex-col items-center justify-center font-sans font-light text-default-100 md:items-start md:justify-center md:gap-4">
            <span>Docs</span>
            <span>Whitepaper</span>
          </div>
          <div className="flex flex-col items-center justify-center font-sans font-light text-default-100 md:items-start md:justify-center md:gap-4">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
