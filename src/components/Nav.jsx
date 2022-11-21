import { useState } from "react";
import { Link } from "react-router-dom";
import { listSection, specialLinks } from "../config.js";

const Nav = ({lgNavbar, navState}) => {
    const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
        className={
          openMenu
            ? "border-t-[1px] lg:border-t-[0px] border-t-gray-300 flex flex-col items-center h-screen absolute top-[46px] w-full z-30 bg-white lg:block lg:relative lg:top-0 lg:h-auto md:mx-2 xl:mx-0"
            : "hidden z-20 bg-white lg:block  md:mx-2 xl:mx-0"
        }
        
      >
        <div className={`${!lgNavbar && "hidden"} ${navState ? "translate-y-0 transition-transform" : "-translate-y-10 transition-transform" } hidden lg:flex z-50 top-0 left-0 fixed  w-full shadow-md bg-white`}>

         <ul className={
            lgNavbar ? "h-[33px] w-full flex justify-between bg-white max-w-[1200px] px-2 m-auto " :
            "grid grid-cols-2 gap-x-16 lg:gap-x-0 p-4 lg:max-w-none lg:p-0 lg:flex lg:px-[20px] lg:h-auto xl:px-[60px] justify-between lg:border-b-[1px] lg:border-t-[1px] border-t-gray-300 border-b-black text-[0.75rem]"
            }>
          <li className="lg:px-[2px] xl:px-2 py-2 lg:py-2 first-letter:uppercase text-[15px] lg:text-[11.5px]">
            <Link to="/"><img src="/nytimes-sm.svg" alt="" className="w-[22px] h-[17px]" /></Link>
          </li>
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
          

        </div>
  )
}
export default Nav