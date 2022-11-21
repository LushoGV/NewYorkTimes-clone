import { useEffect } from "react";
import { useQuery } from "react-query";
import { getHomeData } from "../api.js";
import Aside from "../components/Aside.jsx";
import BigArticle from "../components/BigArticle.jsx";
import Loader from "../components/Loader.jsx";
import OpinionSection from "../components/OpinionSection.jsx";
import TripleArticle from "../components/TripleArticle.jsx";

const Home = () => {
  const { isLoading, data } = useQuery("homeData", () => getHomeData(), {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <section className="flex md:mx-0 flex-col-reverse lg:flex-row-reverse border-t-[0px] lg:border-t-[1px] border-t-black mt-[2px] w-full">
        <div className="flex flex-col-reverse lg:flex-col w-full lg:w-[30%] lg:mt-4">
          {isLoading ? (
            <Loader type={"tripleArticle"} />
          ) : (
            <TripleArticle content={data.slice(8, 11)} />
          )}

          {!isLoading && <OpinionSection />}
          <hr className="lg:hidden lg:mt-6 border-[1px] lg:border-b-0 border-black mb-6" />
          {!isLoading && <Aside />}
        </div>
        <section className="flex flex-col w-full lg:w-3/4 lg:pr-4 lg:border-r-[1px] border-gray-300 md:mt-4">
          {isLoading ? (
            <Loader type={"home"} />
          ) : (
            <>
              {data !== null &&
                data.map((element, index) => (
                  <article key={index}>
                    <BigArticle content={element} index={index} />
                  </article>
                ))}
            </>
          )}
        </section>
      </section>
    </>
  );
};

export default Home;
