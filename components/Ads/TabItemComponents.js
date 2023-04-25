import React from "react";


import Router from "next/router";
import * as IconSax from "iconsax-react";



export default function TabItemComponents({title, index, formStep, MyIcon = IconSax.BatteryEmpty}) {
    let isSelected = index === formStep

    return (
        <div className={isSelected ?
            "bg-gray-50/40 text-xs mb-3 p-2 rounded-xlarge flex w-full border border-gray-100 shadow-lg items-center text-fontBlack" :
            "bg-gray-50/40 text-xs mb-3 p-2 rounded-xlarge flex w-full border border-gray-100 shadow-lg items-center text-fontBlack/70"}>
            {formStep > index ? (
                <IconSax.TickSquare size="20" color={'#4caf50'}/>
            ) : (
                <MyIcon color={index === formStep ? '#9818D6' : '#b2b2b2'} />
            )}
            <span className="mr-4">{title}</span>
        </div>
    );

}