import React from "react";


export default function CheckBoxComponent({title , values}) {
    return (
        <div className="flex items-center mr-4 mb-5 pb-2 border-b border-primary/40">
            <input  id={title + values} type="checkbox" value={values}
                    className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded-md " />
            <label htmlFor={title + values}
                   className="mr-2 text-sm font-medium text-gray-900 ">{title}</label>
        </div>
    )
}