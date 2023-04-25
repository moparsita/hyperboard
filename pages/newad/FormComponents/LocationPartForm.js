import React , { useState , useEffect}from "react";
import Select2 from "react-select2-wrapper";
import * as IconSax from "iconsax-react";
import CircularLoading from "../../../components/Loadings/CircularLoading";
import {Input} from "@material-tailwind/react";
import InsideCircularLoading from "../../../components/Loadings/InsideCircularLoading";
export default function LocationPartForm({state,city,states,cities,isLoading,fillCity,changeCity,nextPage = () => {}}){
    let cityPlaceHolder=''
    state === undefined ? cityPlaceHolder = "استان مورد نظر را انتخاب کنید" : cityPlaceHolder = "انتخاب شهر";
    return (


        <>
            <h4 className="mt-0">انتخاب استان</h4>
            <Select2 dir="rtl"
                     defaultValue={state}
                     onChange={(e) => fillCity(e.target.value)}
                     options={
                         {placeholder: "انتخاب استان"}
                     }
                     data={states.map(e => {
                         return {
                             key: e.id,
                             value: e.id,
                             text: e.name,
                         };
                     })}

            />

            <h4>انتخاب شهر</h4>
            <p className="flex text-gray-500 text-xs items-center m-1"><IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" />بعد از انتخاب استان شما میتوانید شهری که تابلوی شما در آن واقع شده است را به راحتی انتخاب کنید</p>
            {isLoading ? (<InsideCircularLoading />) : (
            <Select2 dir="rtl"
                     defaultValue={city}
                     options={
                         {placeholder: cityPlaceHolder}
                     }

                     onChange={(e) => changeCity(e.target.value)}
                     data={cities ? cities.map(e => {
                         return {
                             key: e.id,
                             value: e.id,
                             text: e.name,
                         };
                     }) : []}
            />
            )}

            <h4>موقعیت شمالی (اختیاری)</h4>
            <p className="flex text-gray-500 text-xs items-center m-1"><IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" /> موقعیت های تابلو ها به معنای نحوه رویت تابلو از هرجهت می باشد.</p>
            <input name="directions[0]"
                   className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary focus:animate-pulse"/>

            <h4>موقعیت شرقی (اختیاری)</h4>
            <p className="flex text-gray-500 text-xs items-center m-1"><IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" /> موقعیت های تابلو ها به معنای نحوه رویت تابلو از هرجهت می باشد.</p>
            <input name="directions[1]"
                   className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary focus:animate-pulse"/>

            <h4>موقعیت غربی (اختیاری)</h4>
            <p className="flex text-gray-500 text-xs items-center m-1"><IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" /> موقعیت های تابلو ها به معنای نحوه رویت تابلو از هرجهت می باشد.</p>
            <input name="directions[2]"
                   className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary focus:animate-pulse"/>

            <h4>موقعیت جنوبی (اختیاری)</h4>
            <p className="flex text-gray-500 text-xs items-center m-1"><IconSax.InfoCircle className="ml-1 animate-pulse text-primary/70" size="16" /> موقعیت های تابلو ها به معنای نحوه رویت تابلو از هرجهت می باشد.</p>
            <input name="directions[3]"
                   className="input px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900 focus:outline-primary focus:animate-pulse"/>
        </>
    );
}