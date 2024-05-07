import Link from 'next/link';
import Logo from '../icons/Logo';
import Publed from '../icons/Publed';
import LogoAlternative from '../icons/LogoAlternative';
import X from '../icons/X';
import Linkedin from '../icons/Linkedin';
import Discord from '../icons/Discord';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-regular-blue-20 p-6 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:gap-3">
        <div className="flex items-center justify-center md:justify-start md:gap-3">
          <LogoAlternative className="h-10 w-24 fill-current text-black" />
          <Publed className="h-10 w-24 fill-current text-black" />
        </div>
        <div className="mt-3 flex gap-3 md:mt-0">
          <Link href={'/'}>
            <X />
          </Link>
          <Link href={'/'}>
            <Linkedin />
          </Link>
          <Link href={'/'}>
            <Discord />
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
            <span>About Us</span>
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
