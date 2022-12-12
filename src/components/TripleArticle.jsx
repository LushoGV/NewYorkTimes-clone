import { useState, useEffect } from "react";

const TripleArticle = ({ content }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(content);
  }, [content]);

  return (
    <>
      {data !== null && (
        <section className="flex flex-col md:pl-4 md:mr-4 lg:mr-0 border-t-[2px] md:border-t-[0px] border-black pb-6">
          <a
            href={`${data[0].short_url}`}
            target="_blank"
            className="hoverTitle"
          >
            <article className="text-right flex flex-col py-4 md:p-0">
              <img src={data[0].multimedia[1].url} alt="" />
              <div className="py-2 text-left mb-2">
                <h2 className="font-timesNewRoman text-lg lg:text-[1.5rem] font-semibold lg:font-[300] leading-6">
                  {data[0].title}
                </h2>
                <p className="font-subtitle text-sm mt-2 text-gray-500 leading-5 tracking-wide">
                  {data[0].abstract}
                </p>
              </div>
            </article>
          </a>
          <div className="flex border-t-[2px] md:border-t-[1px] border-gray-200">
            <a
              href={`${data[1].short_url}`}
              target="_blank"
              className="hoverTitle"
            >
              <article className="mt-4 pr-4 border-r-[2px] md:border-r-[1px] border-gray-200">
                <img src={data[1].multimedia[1].url} alt="" />
                <h2 className="font-timesNewRoman font-semibold lg:text-sm mt-2 leading-5">
                  {data[1].title}
                </h2>
              </article>
            </a>
            <a
              href={`${data[2].short_url}`}
              target="_blank"
              className="hoverTitle"
            >
              <article className="pt-4 pl-4 ">
                <img src={data[2].multimedia[1].url} alt="" />
                <h2 className="font-timesNewRoman font-semibold lg:text-sm mt-2 leading-5">
                  {data[2].title}
                </h2>
              </article>
            </a>
          </div>
        </section>
      )}
    </>
  );
};
export default TripleArticle;
