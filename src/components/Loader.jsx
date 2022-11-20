const Loader = ({ type }) => {
  if (type === "home") {
    return (
      <section className="flex flex-col w-full">
        <article className="animate-pulse w-full pt-4 md:pb-4 md:pt-0 flex flex-col-reverse md:flex-row-reverse">
          <div className="w-full py-4 md:p-0 md:pl-2 text-right">
            <div className="md:pl-2 md:w-[553px] h-72 md:h-96 bg-gray-200"></div>
          </div>

          <div className="md:w-2/4">
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mx-2 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
            <h3 className="text-xl bg-gray-200 h-7 font-semibold pb-2 md:pb-4 w-36 mx-2 mb-4 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-24 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
          </div>
        </article>
        <article className="animate-pulse w-full pt-4 md:py-4 flex flex-col-reverse md:flex-row-reverse border-t-[1px] border-t-black">
          <div className="w-full py-4 md:p-0 md:pl-2 text-right">
            <div className="md:pl-2 md:w-[553px] h-72 md:h-96 bg-gray-200"></div>
          </div>

          <div className="md:w-2/4">
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mx-2 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
            <h3 className="text-xl bg-gray-200 h-7 font-semibold pb-2 md:pb-4 w-36 mx-2 mb-4 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-24 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
          </div>
        </article>
        <article className="animate-pulse w-full pt-4 md:py-4 flex flex-col-reverse md:flex-row-reverse border-t-[1px] border-t-black">
          <div className="w-full py-4 md:p-0 md:pl-2 text-right">
            <div className="md:pl-2 md:w-[553px] h-72 md:h-96 bg-gray-200"></div>
          </div>

          <div className="md:w-2/4">
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mx-2 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
            <h3 className="text-xl bg-gray-200 h-7 font-semibold pb-2 md:pb-4 w-36 mx-2 mb-4 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 ml-2 mr-24 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
          </div>
        </article>
      </section>
    );
  }

  if (type === "tripleArticle") {
    return (
      <section className="animate-pulse md:pl-4 md:mr-4 border-t-[1px] border-black md:border-t-0 pb-6">
        <article className="flex flex-col py-4 md:p-0">
          <div className="md:pl-2 w-[393px] h-[262px] md:w-[310px] md:h-[207px] bg-gray-200"></div>
          <span className="mt-2 text-gray-500"></span>
          <div className="py-2 mb-2">
            <h3 className="bg-gray-200 h-5 leading-5 tracking-tighter rounded-md"></h3>
            <p className="h-4 mt-2 mr-4 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
          </div>
        </article>
        <div className="flex border-t-[1px] border-gray-200">
          <article className="mt-4 pr-4 border-r-[1px] border-gray-200">
            <div className="md:pl-2 w-[180px] md:w-[138px] h-[120px] md:h-[92px] bg-gray-200"></div>
            <h3 className="bg-gray-200 h-5 mt-2 leading-5 tracking-tighter rounded-md"></h3>
          </article>
          <article className="pt-4 pl-4">
            <div className="md:pl-2 w-[180px] md:w-[138px] h-[120px] md:h-[92px] bg-gray-200"></div>
            <h3 className="bg-gray-200 h-5 mt-2 leading-5 tracking-tighter rounded-md"></h3>
          </article>
        </div>
      </section>
    );
  }

  if (type === "section") {
    return (
      <>
        <section className="animate-pulse w-full flex flex-col lg:flex-row pt-4 lg:pt-4 lg:border-t-[1px] border-black mt-[2px]">
          <div className="lg:max-w-[622.5px] w-full lg:pr-4">
            <div className="pt-0 md:pt-0 md:pb-4 flex flex-col-reverse lg:flex-col">
              <div className="w-full flex flex-col pb-4 md:p-0 md:pl-0 text-right">
                <div className="lg:w-[605.5px] bg-gray-200 h-72 md:h-96 mb-1"></div>

                <span className="font-mini text-mini mb-4 text-gray-500"></span>
              </div>

              <div>
                <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
                <h3 className="text-xl bg-gray-200 h-7 font-semibold pb-2 md:pb-4 w-36 mb-4 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
                <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 lg:mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
                <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
              </div>
            </div>
          </div>

          <article className="py-8 lg:py-0 lg:px-4 border-y-[1px] lg:border-x-[1px] lg:border-y-[0px] border-gray-200 lg:max-w-[337.5px] flex flex-col">
            <div className="h-60 lg:h-[202px] lg:w-[306px] bg-gray-200" />
            <span className="font-mini text-mini mb-2 text-gray-500 mt-1 text-right"></span>

            <div className="flex flex-col">
              <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-3 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
              <h3 className="text-xl bg-gray-200 h-7 font-semibold pb-2 md:pb-3 w-36 mb-4 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
              <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 lg:mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
              <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 mr-6 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
            </div>
          </article>

          <div className="lg:pl-4 lg:w-1/5 pt-4 lg:py-0">
            <article className="pb-6 border-b-[1px] border-gray-300 ">
              <h3 className="text-xl bg-gray-200 h-7 pb-2 md:pb-3 w-full rounded-md"></h3>

              <div className="py-4">
                <div className="hidden lg:block w-[85px] h-[75px] pl-4 pb-1 float-right bg-gray-200" />

                <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 lg:w-20 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
                <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 lg:w-20 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
              </div>
            </article>

            <article className="pb-4 mt-4 lg:mt-2">
              <h3 className="text-xl bg-gray-200 h-7 pb-2 md:pb-3 w-full rounded-md"></h3>

              <div className="py-4">
                <div className="hidden lg:block w-[85px] h-[75px] pl-4 pb-1 float-right bg-gray-200" />

                <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 lg:w-20 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
                <p className="pb-0 md:pb-2 pr-2 text-sm font-subtitle h-4 lg:w-20 mb-2 bg-gray-200 text-gray-500 leading-5 tracking-wide rounded-md "></p>
              </div>
            </article>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row lg:border-t-[1px] border-gray-300 w-full lg:max-w-[1200px] lg:mt-6">
          <article className="lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 lg:pl-0 flex flex-col border-t-[1px] lg:border-r-[1px] lg:border-y-0 border-gray-300">
            <div className="h-60 lg:h-[136.78px] w-fill bg-gray-200 mb-4"></div>
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
          </article>

          <article className="lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 border-y-[1px] lg:border-y-0 lg:border-r-[1px] border-gray-300 flex flex-col">
            <div className="h-60 lg:h-[136.78px] w-fill bg-gray-200 mb-4"></div>
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
          </article>

          <article className="lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 border-y-[1px] lg:border-y-0 lg:border-r-[1px] border-gray-300 flex flex-col">
            <div className="h-60 lg:h-[136.78px] w-fill bg-gray-200 mb-4"></div>
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
          </article>

          <article className="lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 border-y-[1px] lg:border-y-0 lg:border-r-[1px] border-gray-300 flex flex-col">
            <div className="h-60 lg:h-[136.78px] w-fill bg-gray-200 mb-4"></div>
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
          </article>

          <article className="lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 lg:pr-0 flex flex-col">
            <div className="h-60 lg:h-[136.78px] w-fill bg-gray-200 mb-4"></div>
            <h3 className="text-xl bg-gray-200 font-semibold h-7 pb-2 md:pb-4 mb-2 leading-[25px] tracking-tighter font-timesNewRoman rounded-md"></h3>
          </article>
        </section>
      </>
    );
  }

  if (type === "asideWithImage") {
    return (
      <aside className="animate-pulse pb-4 md:p-0 md:pl-4 md:border-l-0 border-gray-300 md:pb-14">
        <ul className="border-t-[1px] border-t-black md:border-t-0">
          <li className="md:mx-0 border-b-0 flex flex-row-reverse py-3">
            <div className="w-[130px] h-[112px] bg-gray-200"></div>
            <div className="w-3/4 pr-3 md:pr-[15px] my-1">
              <h2 className="bg-gray-200 h-4 rounded-md mt-1 leading-5"></h2>
              <div className="mt-2 bg-gray-200 h-4 rounded-md"></div>
            </div>
          </li>

          <li className="md:mx-0 flex flex-row-reverse py-3 border-t-[1px] border-gray-300">
            <div className="w-[130px] h-[112px] bg-gray-200"></div>
            <div className="w-3/4 pr-3 md:pr-[15px] my-1">
              <h2 className="bg-gray-200 h-4 rounded-md mt-1 leading-5"></h2>
              <div className="mt-2 bg-gray-200 h-4 rounded-md"></div>
            </div>
          </li>

          <li className="md:mx-0 flex flex-row-reverse py-3 border-t-[1px] border-gray-300">
            <div className="w-[130px] h-[112px] bg-gray-200"></div>
            <div className="w-3/4 pr-3 md:pr-[15px] my-1">
              <h2 className="bg-gray-200 h-4 rounded-md mt-1 leading-5"></h2>
              <div className="mt-2 bg-gray-200 h-4 rounded-md"></div>
            </div>
          </li>

          <li className="md:mx-0 flex flex-row-reverse py-3 border-t-[1px] border-gray-300">
            <div className="w-[130px] h-[112px] bg-gray-200"></div>
            <div className="w-3/4 pr-3 md:pr-[15px] my-1">
              <h2 className="bg-gray-200 h-4 rounded-md mt-1 leading-5"></h2>
              <div className="mt-2 bg-gray-200 h-4 rounded-md"></div>
            </div>
          </li>

          <li className="md:mx-0 flex flex-row-reverse py-3 border-t-[1px] border-gray-300">
            <div className="w-[130px] h-[112px] bg-gray-200"></div>
            <div className="w-3/4 pr-3 md:pr-[15px] my-1">
              <h2 className="bg-gray-200 h-4 rounded-md mt-1 leading-5"></h2>
              <div className="mt-2 bg-gray-200 h-4 rounded-md"></div>
            </div>
          </li>
        </ul>
      </aside>
    );
  }
};
export default Loader;
