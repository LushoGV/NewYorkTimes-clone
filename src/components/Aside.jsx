import { useQuery } from "react-query";
import { getAsideData } from "../api.js";
import { months } from "../config.js";

const Aside = () => {
  const { isLoading, data } = useQuery("asideData", () => getAsideData());

  if (isLoading) return;

  return (
    <>
      <aside className=" pb-4 pt-3 md:p-0 lg:pl-4 border-t-[2px] border-black md:border-l-0 lg:border-t-0 lg:border-gray-300 md:pb-14">
        <h2 className="pt-1 text-base font-bold lg:text-sm font-mini md:p-0 md:pt-3 md:border-t-[1px] border-t-black">
          In Case You Missed It
        </h2>
        <span className="italic font-timesNewRoman text-sm">
          Top picks from The Times, recommended for you
        </span>
        <ul className="">
          {data !== null &&
            data.slice(0, 5).map((element, index) => {
              return (
                <li
                  className={`${
                    data.slice(0, 5).length === index + 1
                      ? "border-b-0"
                      : index === 0
                      ? "border-t-0 border-b-[1px]"
                      : "border-b-[1px]"
                  } md:mx-0 flex justify-between flex-row-reverse py-4 border-gray-300`}
                  key={index}
                >
                  <img
                    src={element.multimedia && element.multimedia[0].url}
                    className="w-[91px] h-[91px] "
                  />

                  <div className="w-3/4 pr-3 md:pr-[15px] my-1 lg:mt-0">
                    <h2 className="font-timesNewRoman font-bold text-sm text-left mt-1 lg:mt-0 leading-5">
                      {element.title}
                    </h2>
                    <span className="text-xs text-gray-500 font-mini">
                      {months[
                        element.published_date.substring(5, 7) - 1
                      ].substring(0, 3)}
                      . {element.published_date.substring(8, 10)}
                    </span>
                  </div>
                </li>
              );
            })}
        </ul>
      </aside>
    </>
  );
};

export default Aside;
