import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="z-10 flex flex-col justify-between items-start mx-4 max-w-[1200px] lg:m-auto">
        <Outlet />
      </main>
      <footer className="md:w-full border-t-[2px] md:border-t-[1px] mx-4 md:mx-0 border-gray-300 mt-4 text-center">
        <h3 className="font-timesNewRoman my-2 text-xs text-gray-500">
          Copyright (c) 2022 The New York Times Company. All Rights Reserved.
        </h3>
      </footer>
    </>
  );
};
export default Layout;
