import { useState } from "react";
import { Link } from "react-router-dom";
import { listSection, specialLinks } from "../config.js";

const Nav = ({ navState }) => {
  return (
    <div
      className={`${
        navState
          ? "translate-y-0 transition-transform"
          : "-translate-y-10 transition-transform"
      } hidden lg:flex z-50 top-0 left-0 fixed  w-full shadow-md bg-white`}
    >
      <ul className="h-[33px] w-full flex justify-between bg-white max-w-[1200px] px-2 m-auto ">
        <li className="lg:px-[2px] xl:px-2 py-2 lg:py-2 first-letter:uppercase text-[15px] lg:text-[11.5px]">
          <Link to="/">
            <img src="/nytimes-sm.svg" alt="new york times logo" className="w-[22px] h-[17px]" />
          </Link>
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
  );
};
export default Nav;
