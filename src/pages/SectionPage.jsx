import { useNavigate, useParams } from "react-router-dom";
import { getSectionData } from "../api.js";
import GridArticle from "../components/GridArticle.jsx";
import RowArticles from "../components/RowArticles.jsx";
import { listSection, months } from "../config.js";
import { useState, useEffect } from "react";
import Loader from "../components/Loader.jsx";

const SectionPage = () => {
  const { section } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    setIsLoading(true);
    const res = await getSectionData(section);
    setData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [section]);

  if (isLoading) return <Loader type={"section"} />;

  return (
    <>
      {data !== null && (
        <>
          <GridArticle content={data.slice(0, 4)} />
          <RowArticles content={data.slice(4, 9)} />
          {data.length > 16 && <RowArticles content={data.slice(9, 14)} />}
          <hr className="w-full lg:mt-6 border-[1px] lg:border-b-0 border-black" />
          {data !== null && data.slice(14, data.length).length > 5 && (
            <section>
              {data.slice(14, data.length).map((element, index) => {
                return (
                  <a
                    href={`${element.short_url}`}
                    key={index}
                    className="hoverTitleUnderline"
                  >
                    <article
                      className={
                        index === 0
                          ? "flex flex-col-reverse lg:flex-row justify-between py-6"
                          : "flex flex-col-reverse lg:flex-row justify-between border-t-[1px] border-gray-300 py-6"
                      }
                    >
                      <span className="hidden lg:block text-xs text-gray-500 font-mini mt-[5px]">
                        {months[
                          element.published_date.substring(5, 7) - 1
                        ].substring(0, 3)}
                        . {element.published_date.substring(8, 10)},{" "}
                        {element.published_date.substring(0, 4)}
                      </span>
                      <div className="lg:px-4 lg:mx-12 lg:w-[470px]">
                        <h2 className="text-base font-semibold lg:text-[20px] pb-3 md:pb-2 leading-[1.4em] font-timesNewRoman">
                          {element.title}
                        </h2>
                        <p className="text-sm lg:text-[0.9375rem] font-subtitle text-gray-500 leading-5 tracking-wide">
                          {element.abstract}
                        </p>
                      </div>
                      <img
                        src={element.multimedia && element.multimedia[1].url}
                        alt=""
                        className="mb-4 lg:mb-0 lg:w-[205px] lg:h-[135px]"
                      />
                    </article>
                  </a>
                );
              })}
            </section>
          )}
        </>
      )}
    </>
  );
};
export default SectionPage;
