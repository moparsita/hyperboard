import React from "react";
import { Checkbox } from "@material-tailwind/react";

export default function CheckBoxComponent({title , values}) {
    return (
        <>
        <div className="flex items-center mr-4 mb-5 pb-2 border-b border-primary/40 text-primary" >
            <Checkbox color="purple" label={title} value={values} ripple={true} className="w-6 h-6 border-primary"
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