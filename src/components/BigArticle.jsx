import { useEffect, useState } from "react";

const BigArticle = ({ content, index, columnMode }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    setData(content);
  }, [content]);

  if (data !== null) {
    return (
      <a
        href={`${data.short_url}`}
        target="_blank"
        className={columnMode ? "hoverTitleUnderline" : "hoverTitle"}
      >
        <div
          className={
            columnMode
              ? "pt-0 md:pt-0 md:pb-4 flex flex-col-reverse lg:flex-col"
              : index === 0
              ? "pt-0 md:pt-0 md:pb-4 flex flex-col-reverse lg:flex-row-reverse"
              : "pt-4 md:py-4 flex flex-col-reverse lg:flex-row-reverse border-t-[2px] md:border-t-[1px] border-t-black"
          }
        >
          <div
            className={
              columnMode
                ? "w-full flex flex-col pb-4 md:p-0 md:pl-0 text-right"
                : "w-full py-4 md:p-0 lg:pl-2 text-right"
            }
          >
            <img
              src={data.multimedia && data.multimedia[1].url}
              alt=""
              className={
                columnMode
                  ? " md:h-auto lg:h-96 mb-1"
                  : "md:w-full lg:w-full lg:pl-2 md:h-auto"
              }
            />
            <span
              className={
                columnMode
                  ? "font-mini text-mini mb-4 text-gray-500"
                  : "font-mini text-mini mb-2 text-gray-500"
              }
            >
              {data.multimedia && data.multimedia[1].copyright}
            </span>
          </div>
          <div className={!columnMode ? "lg:w-2/4" : ""}>
            <h2
              className={
                index === 0
                  ? columnMode
                    ? "text-3xl md:text-2xl font-semibold pb-2 md:pb-2 lg:mr-0 leading-[1.15em] lg:leading-[1.2em] tracking-tighter font-timesNewRoman"
                    : "text-3xl md:text-2xl font-semibold pb-2 md:pb-2 mr-2 leading-[1.15em] lg:leading-[1.2em] tracking-tighter font-timesNewRoman"
                  : "text-3xl md:text-[1.125rem] font-semibold pb-2 md:pb-2 mr-2 leading-[1.15em] lg:leading-[1.2em] tracking-tighter font-timesNewRoman"
              }
            >
              {data.title}
            </h2>
            <p
              className={
                columnMode
                  ? "pb-4 md:pb-2 pr-2 text-base lg:text-[0.875rem] font-subtitle lg:mr-0 text-gray-500 leading-5 tracking-wide"
                  : "pb-0 md:pb-2 pr-2 text-base lg:text-[0.875rem] font-subtitle md:mr-2 text-gray-500 leading-5 tracking-wide"
              }
            >
              {data.abstract}
            </p>
          </div>
        </div>
      </a>
    );
  }
};
export default BigArticle;
