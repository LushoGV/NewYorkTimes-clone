import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import TripleArticle from "../components/TripleArticle";
import { errorLinks, KEY } from "../config.js";
import Home from "../pages/Home";

const Layout = () => {
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  // const { section } = useParams();

  // let url = section
  //   ? `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${KEY}`
  //   : `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${KEY}`;

  // const getData = async () => {
  //   let res = await axios.get(url);

  //   const dataWithImage = res.data.results.filter(
  //     (element) => element.title !== "" && element.multimedia !== null
  //   );
  //   setData(dataWithImage);
  //   console.log(res);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 5);
  // };

  // useEffect(() => {
  //   setIsLoading(true);
  //   setData(null);
  //   getData();
  // }, [section]);

  return (
    <>
      <Navbar />
      <main className="z-10 flex flex-col justify-between items-start mx-4 md:mx-2 xl:mx-0">
        {/* <section className="flex md:mx-0 flex-col-reverse lg:flex-row-reverse border-t-[0px] lg:border-t-[1px] border-t-black mt-[2px] w-full">
          <div className="flex flex-col-reverse lg:flex-col w-full lg:w-[30%] lg:mt-4">
            {section && !errorLinks.includes(section) ? (
              isLoading ? (
                <Loader type={"asideWithImage"} />
              ) : (
                <Aside section={section} />
              )
            ) : isLoading ? (
              <Loader type={"tripleArticle"} />
            ) : (
              <TripleArticle content={data.slice(8, 11)} />
            )}

            {!isLoading && <Aside />}
          </div>
          <section className="flex flex-col w-full lg:w-3/4 lg:pr-4 md:border-r-[1px] border-gray-300 md:mt-4">
            {isLoading ? <Loader type={"home"} /> : <Home content={data} />}
          </section>
        </section> */}
        <Outlet/>
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
