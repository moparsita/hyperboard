import React from "react";
import Carousel from "react-slick";



export default function SearchSection({items}) {
  return (
          items.map(e =>
                  // eslint-disable-next-line react/jsx-key
          <div className="p-0 m-2 sm:m-1">
            <div className="w-full bg-white rounded-full shadow-md flex place-content-start flex-row items-center">
                <input type="checkbox" id={"react-option-" + e.id + e.type} value={e.id + "_" + e.type} className="hidden peer" required=""/>
                    <label htmlFor={"react-option-" + e.id + e.type}
                           className="inline-flex justify-between items-center p-1 w-full text-gray-500 bg-white rounded-full cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-white peer-checked:bg-primary hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="w-7 h-7 ml-1 rounded-full"
                                 src={e.icon.path}
                                 alt={e.title}
                            />
                            <div className="w-full text-[0.6rem]  xl:text-xs lg:text-xs md:text-sm sm:text-sm ml-2 ">{e.name}</div>
                    </label>
          </div>

          </div>
          )





      
    
  );
}
