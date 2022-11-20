import { useQuery } from "react-query";
import { getSectionData } from "../api.js";
import { months } from "../config.js";

const OpinionSection = () => {
  const { isLoading, data } = useQuery("sectionData", () =>
    getSectionData("opinion"), {
      refetchOnWindowFocus: false
    }
  );

  if (isLoading) return;

  return (
      <aside className={"pb-4 md:p-0 lg:pl-4 lg:pb-4 md:border-l-0 border-gray-300"}>
        <h2 className="pt-1 text-base font-bold lg:text-sm font-mini md:p-0 md:pt-3 lg:border-t-[1px] border-t-black first-letter:uppercase">
          opinion
        </h2>

        <ul>
          {data !== null &&
            data.slice(0, 8).map((element, index) => {
              return (
                <li
                  className={`${
                    data.slice(0, 8).length === index + 1
                      ? "border-b-0"
                      : index === 0
                      ? "border-t-0 border-b-[1px]"
                      : "border-b-[1px]"
                  } md:mx-0 flex justify-between flex-row-reverse py-3 border-gray-300`}
                  key={index}
                >
                  {(index === 2 || index === 4) && (
                    <img
                      src={element.multimedia && element.multimedia[2].url}
                      className="w-[152px] h-[152px]"
                    />
                  )}
                  <div className="px-2 lg:pl-0 my-1 lg:my-0 w-full">
                    <span className="font-timesNewRoman text-gray-500">{element.kicker}</span>
                    <h2 className="font-timesNewRoman my-1 font-bold text-base text-left leading-[1.2em] tracking-[0.01em]">
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
  );
};
export default OpinionSection;
