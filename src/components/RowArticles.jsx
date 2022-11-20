import { useEffect, useState } from "react"

const RowArticles = ({content}) => {
 
    const [data , setData] = useState(null)

    useEffect(()=>{
        setData(null)
        setData(content)
    },[content])

  return (
    <section className="flex flex-col lg:flex-row lg:border-t-[1px] border-gray-300 w-full lg:max-w-[1200px] lg:mt-6">
        {data !== null && data.map((element, index) => {
            return(
            <article key={index} className={
                index === 0 ? "lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 lg:pl-0 flex flex-col border-t-[1px] lg:border-r-[1px] lg:border-y-0 border-gray-300" : index === data.length-1 ? "lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 lg:pr-0 flex flex-col" : "lg:mt-6 lg:w-[248px] lg:px-5 py-6 lg:py-0 border-y-[1px] lg:border-y-0 lg:border-r-[1px] border-gray-300 flex flex-col" }>
                <img src={element.multimedia && element.multimedia[1].url} alt="" className="lg:h-[136.78px] mb-4" />
                <h3 className="text-[1.4375rem] lg:text-[15px] font-normal pb-3 md:pb-3 leading-[1.4em] font-timesNewRoman">{element.title}</h3>
                <p className="text-base block lg:hidden lg:text-[0.9375rem] font-subtitle text-gray-500 leading-5 tracking-wide">{element.abstract}</p>
            </article>)
        })}
    </section>
  )
}
export default RowArticles