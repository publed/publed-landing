import { useState } from "react";
import { aboutLinks, homeLinks } from "../constants";
import { close, hlogo, menu } from "../assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [active, setActive] = useState<string>("Home");
  const navigate = useNavigate();
  return (
    <div>
      <nav className="w-full flex flex-col py-4 items-center">
        <div className="w-full flex flex-row items-center justify-between">
          <a href="/">
            <img
              src={hlogo}
              alt="publed"
              className="md:w-[177px] xs:w-[140px] xs:h-[40px] sm:h-[36px] md:h-[50px]"
            />
          </a>
          <div className="flex flex-row space-x-2">
            <ul className="list-none md:flex hidden justify-end items-center text-center">
              {active === "Home"
                ? homeLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-notosans font-light cursor-pointer text-[16px] mr-[32px] text-typo-white ${
                        active === nav.title ? "font-extrabold" : "font-light"
                      } ${
                        nav.id === "about" ? "font-extrabold" : "font-light"
                      }`}
                      onClick={() => {
                        setActive("Home");
                        return;
                      }}
                    >
                      {nav.id === "about" ? (
                        <Link to={`/${nav.id}`}>{nav.title}</Link>
                      ) : nav.id === "home" ? (
                        <Link to={`/`}>{nav.title}</Link>
                      ) : (
                        <a href={`#${nav.id}`}>{nav.title}</a>
                      )}
                    </li>
                  ))
                : null}
            </ul>

            <a href="#contactus">
              {" "}
              <button
                className=" px-4 py-2 ss:px-7 ss:py-3 rounded-full button-main text-typo-dark-blue font-medium transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-3 duration-300"
                onClick={() => navigate("/")}
              >
                Join Waitlist
              </button>
            </a>

            <div className="md:hidden flex justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain "
                onClick={() => setToggle((prev) => !prev)}
              />
            </div>
          </div>
        </div>

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } w-full flex-row relative sidebar justify-end
          `}
        >
          <ul className="flex flex-col justify-center items-end h-screen mr-28 ">
            {homeLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-notosans font-normal text-typo-white cursor-pointer text-[16px] leading-8 ${
                  active === nav.title ? "font-semibold" : "font-normal"
                } ${index === homeLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                {nav.id === "about" ? (
                  <a href={`${nav.id}`}>{nav.title}</a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
