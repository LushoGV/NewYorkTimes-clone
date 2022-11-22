import { useEffect, useState } from "react";
import BigArticle from "./BigArticle";

const GridArticle = ({ content }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    setData(content);
  }, [content]);

  if (data !== null) {
    return (
      <section className="flex flex-col w-full lg:flex-row pt-4 lg:pt-4 lg:border-t-[1px] border-black mt-[2px]">
        <div className="lg:max-w-[622.5px] w-full lg:pr-4">
          <BigArticle content={data[0]} index={0} columnMode={true} />
        </div>
        <a href={`${data[1].short_url}`} className="hoverTitleUnderline">
          <article className="py-8 lg:py-0 lg:px-4 border-y-[1px] lg:border-x-[1px] lg:border-y-[0px] border-gray-200 lg:max-w-[337.5px] flex flex-col">
            <img
              src={data[1].multimedia && data[1].multimedia[1].url}
              alt=""
              className="lg:h-[202px] lg:w-[306px]"
            />
            <span className="font-mini text-mini mb-2 text-gray-500 mt-1 text-right">
              {data[1].multimedia && data[1].multimedia[1].copyright}
            </span>

            <div className="flex flex-col">
              <h2 className="text-[1.4375rem] md:text-2xl font-normal lg:font-semibold pb-3 md:pb-3 leading-[1.15em] lg:leading-[1.2em] tracking-tighter font-timesNewRoman">
                {data[1].title}
              </h2>
              <p className="text-base lg:text-[0.9375rem] font-subtitle text-gray-500 leading-5 tracking-wide">
                {data[1].abstract}
              </p>
            </div>
          </article>
        </a>
        <div className="lg:pl-4 lg:w-1/5 pt-4 lg:py-0">
          <a href={`${data[2].short_url}`} className="hoverTitleUnderline">
            <article className="pb-4">
              <h2 className="text-[1.4375rem] md:text-2xl font-semibold pb-3 md:pb-3 leading-[1.15em] lg:leading-[1.2em] tracking-tighter font-timesNewRoman">
                {data[2].title}
              </h2>
              <div className="">
                <img
                  src={data[2].multimedia && data[2].multimedia[2].url}
                  alt=""
                  className="hidden lg:block w-[85px] h-[75px] pl-4 pb-1 float-right"
                />
                <p className="text-base lg:text-[0.9375rem] font-subtitle text-gray-500 leading-5 tracking-wide">
                  {data[2].abstract}
                </p>
              </div>
            </article>
          </a>
          <a href={`${data[3].short_url}`} className="hoverTitleUnderline">
            <article className="border-t-[1px] border-gray-300 py-4">
              <h2 className="text-[1.4375rem] md:text-2xl font-semibold pb-3 md:pb-3 leading-[1.15em] lg:leading-[1.2em] tracking-tighter font-timesNewRoman">
                {data[3].title}
              </h2>
              <div className="">
                <img
                  src={data[3].multimedia && data[3].multimedia[2].url}
                  alt=""
                  className="hidden lg:block w-[85px] h-[75px] pl-4 pb-1 float-right"
                />
                <p className="text-base lg:text-[0.9375rem] font-subtitle text-gray-500 leading-5 tracking-wide">
                  {data[3].abstract}
                </p>
              </div>
            </article>
          </a>
        </div>
      </section>
    );
  }
};
export default GridArticle;
