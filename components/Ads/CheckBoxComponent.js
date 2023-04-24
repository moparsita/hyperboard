import React from "react";
import { Checkbox } from "@material-tailwind/react";

export default function CheckBoxComponent({title , value, hash ,selectedFilter, setSelectedFilter, filter , setFilter}) {

    function searchCall() {
        const filters = {};
        for (let elem of filter) {
            for (let newFilter of elem.filters) {

                if (
                    typeof newFilter.hash === 'string' &&
                    newFilter.hash.length > 0
                ) {
                    filters[newFilter.hash] = newFilter.items
                        .map((e) => e.id);
                } else if (
                    newFilter.items.some(
                        (element) =>
                            typeof element.hash === 'string' &&
                            element.hash.length > 0
                    )
                ) {
                    for (let item of newFilter.items) {
                        if (!filters[item.hash]) {
                            filters[item.hash] = [];
                        }
                        filters[item.hash].push(item.id);
                    }
                }
            }
        }
        setSelectedFilter(filters);
    }

    function changeHandle(e){
        searchCall();
        const newFilter2 = {...selectedFilter}
        if (e.target.checked) {
            if (!newFilter2[hash]){
                newFilter2[hash] = [];
            }
            newFilter2[hash].push(value);
        } else {
            delete newFilter2[hash];
        }
        setSelectedFilter(newFilter2);
    }
    return (
        <>
        <div className="flex items-center mr-4 mb-5 pb-2 border-b border-gray-900/80 text-primary" >
            <Checkbox color="gray" label={title} value={value} ripple={true} className="w-6 h-6 border-gray"
                      onChange={(e) => changeHandle(e)}
                      icon={
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                          >
                              <path
                                  fillRule="evenodd"
                                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                  clipRule="evenodd"
                              />
                          </svg>
                      }/>
            {/*<input  id={title + values} type="checkbox" value={values}*/}
            {/*        className="w-6 h-6 text-primary bg-primary border-primary rounded-md peer-checked:bg-primary peer-checked:text-primary focus:text-primary checked:text-primary focus:bg-primary  checked:bg-primary " />*/}
            {/*<label htmlFor={title + values}*/}
            {/*       className="mr-2 text-sm font-medium text-gray-900 "> </label>*/}
        </div>


            </>
    )
}