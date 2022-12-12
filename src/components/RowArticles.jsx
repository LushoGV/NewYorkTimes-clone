import { useEffect, useState } from "react";

const RowArticles = ({ content }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(null);
    setData(content);
  }, [content]);

  return (
    <section className="flex flex-col xl:flex-row xl:border-t-[1px] border-gray-300 w-full xl:max-w-[1200px] xl:mt-6">
      {data !== null &&
        data.map((element, index) => {
          return (
            <a
              href={`${element.short_url}`}
              target="_blank"
              key={index}
              className="hoverTitleUnderline"
            >
              <article
                className={
                  index === 0
                    ? "xl:mt-6 xl:w-[228px] xl:px-5 py-6 xl:py-0 xl:pl-0 flex flex-col border-t-[1px] xl:border-r-[1px] xl:border-y-0 border-gray-300"
                    : index === data.length - 1
                    ? "xl:mt-6 xl:w-[248px] xl:px-5 py-6 xl:py-0 xl:pr-0 flex flex-col"
                    : "xl:mt-6 xl:w-[248px] xl:px-5 py-6 xl:py-0 border-y-[1px] xl:border-y-0 xl:border-r-[1px] border-gray-300 flex flex-col"
                }
              >
                <img
                  src={element.multimedia && element.multimedia[1].url}
                  alt=""
                  className="xl:h-[136.78px] xl:w-[207px] mb-4"
                />
                <h2 className="text-[1.4375rem] xl:text-[15px] font-normal pb-3 md:pb-3 leading-[1.4em] font-timesNewRoman">
                  {element.title}
                </h2>
                <p className="text-base block xl:hidden xl:text-[0.9375rem] font-subtitle text-gray-500 leading-5 tracking-wide">
                  {element.abstract}
                </p>
              </article>
            </a>
          );
        })}
    </section>
  );
};
export default RowArticles;
