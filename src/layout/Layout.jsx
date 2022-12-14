import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const Layout = () => {
  const { section } = useParams();

  useEffect(() => {
    if (section)
      document.title = `${
        section === "us"
          ? "U.S. News"
          : section === "nyregion"
          ? "New York"
          : section.charAt(0).toUpperCase() + section.slice(1)
      } - The New York Times`;
    else
      document.title =
        "The New York Times - Breaking News, US News, World News and Videos";
  }, [section]);

  return (
    <>
      <ScrollToTop>
        <Header />
        <main className="z-10 flex flex-col justify-between items-start mx-4 max-w-[1200px] xl:m-auto">
          <Outlet />
        </main>
        <footer className="md:w-full border-t-[2px] md:border-t-[1px] mx-4 md:mx-0 border-gray-300 mt-4 text-center max-w-[1200px] xl:m-auto">
          <h3 className="font-timesNewRoman py-1 my-2 text-xs text-gray-500">
            Copyright (c) 2022 The New York Times Company. All Rights Reserved.
          </h3>
        </footer>
      </ScrollToTop>
    </>
  );
};
export default Layout;
