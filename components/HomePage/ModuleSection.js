import React from "react";




export default function ModuleSection({items}) {
  return (
      <div className="container mt-16 ">

            <div className="shadow-lg overflow-hidden rounded-large bg-gradient-to-l from-purple-400 to-purple-100 md:flex lg:flex lg:max-h-[180px] xl:flex xl:max-h-[400px]">
              <div className="relative flex flex-col px-4 md:h-full md:m-auto  md:text-center">
                <h3 className="text-lg text-fontBlack font-bold text-right mb-3">{items.name}</h3>
                <p className="text-justify text-xs text-gray-700 mb-2 md:mb-6">
                {items.description}
                </p>
                <button className="px-5 py-2 w-3/5 rounded-full bg-gray-700 text-white text-xs ">{items.button}</button>
              </div>
              <div className="relative bg-transparent pb-[25%] rounded-t-[16px] w-3/4 h-full ">
                <span className="block overflow-hidden absolute top-0 bottom-0 left-0 right-0">
                  <img src={items.image.path} alt={items.image.alt} className="absolute top-0 bottom-0 left-0 right-0 object-center "/>
                </span>
              </div>
            </div>

      </div>
  );
}
