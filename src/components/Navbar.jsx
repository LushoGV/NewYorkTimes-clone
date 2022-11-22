import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { days, listSection, months, specialLinks } from "../config.js";
import Nav from "./Nav.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [navState, setNavState] = useState(false);

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset >= 200) setNavState(true);
    else setNavState(false);
  });

  const today = new Date();
  const date = `${days[today.getDay()]}, ${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;

  return (
    <>
      <nav className="sticky top-0 lg:relative z-40 max-w-[1200px] m-auto">
        <header className="flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center lg:justify-between py-1 lg:pt-0 md:mx-2 xl:mx-0 z-20 bg-white">
          <div className="flex flex-col pt-1 lg:py-2 w-full lg:w-1/4 text-sm lg:mb-[5px]">
            <span className="bg-gray-100 border-y-[1px] tracking-tight text-left md:text-center lg:text-left lg:tracking-normal border-gray-300 py-2 px-4 lg:p-0 text-[0.6875rem] md:bg-white lg:border-y-0 lg:block font-bold font-mini lg:text-[12px]">
              {date}
            </span>
            <span className="hidden lg:block font-mini text-[12px]">
              Today’s Paper
            </span>
          </div>
          <div className="flex justify-between lg:justify-center items-center w-full">
            <button
              className={
                !openMenu ? "px-4 py-2 text-lg lg:hidden" : "w-[52px] lg:hidden"
              }
              onClick={() => setOpenMenu(!openMenu)}
            >
              <TbMenu2 className={!openMenu ? "block" : "hidden"} />
            </button>
            <Link to={"/"}>
              <h1 className="text-4xl px-4">
                <img
                  src="/nytimes-wordmark.svg"
                  className="w-[192px] md:w-[228px] lg:w-[430px]"
                  alt=""
                />
              </h1>
            </Link>

            <button
              className={
                openMenu ? "px-4 py-2 text-xl lg:hidden" : "w-[50px] lg:hidden"
              }
              onClick={() => setOpenMenu(!openMenu)}
            >
              <VscChromeClose className={openMenu ? "block" : "hidden"} />
            </button>
          </div>
          <div className="w-1/4 p-2 hidden lg:block"></div>
        </header>
        <div
          className={
            openMenu
              ? "border-t-[1px] lg:border-t-[0px] border-t-gray-300 flex flex-col items-center h-screen absolute top-[46px] w-full z-30 bg-white lg:block lg:relative lg:top-0 lg:h-auto md:mx-2 xl:mx-0"
              : "hidden z-20 bg-white lg:block  md:mx-2 xl:mx-0"
          }
        >
          <ul className="grid grid-cols-2 gap-x-16 lg:gap-x-0 p-4 lg:max-w-none lg:p-0 lg:flex lg:px-[20px] lg:h-auto xl:px-[60px] justify-between lg:border-b-[1px] lg:border-t-[1px] border-t-gray-300 border-b-black text-[0.75rem]">
            {listSection.map((element, index) => {
              return (
                <li
                  key={index}
                  className="lg:px-[2px] xl:px-2 py-2 lg:py-2 first-letter:uppercase text-[15px] lg:text-[11.5px]"
                >
                  <Link
                    to={`/section/${element.link}`}
                    className=" font-mini hover:bg-gray-50 hover:rounded-md"
                    onClick={() => setOpenMenu(false)}
                  >
                    {element.title}
                  </Link>
                </li>
              );
            })}
            {specialLinks.map((element, index) => {
              return (
                <li
                  key={index}
                  className={`${
                    index === 0
                      ? "lg:pl-[10px] xl:pl-4 xl:pr-3 lg:border-l-[1px] border-gray-300 my-2 lg:my-2 ml-1"
                      : "lg:px-[2px] xl:px-2 py-2 lg:py-2"
                  } text-[15px] lg:text-[11.5px] first-letter:uppercase `}
                >
                  <a href={`${element.link}`} className="font-mini">
                    {element.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <Nav navState={navState} />
    </>
  );
};
export default Navbar;
