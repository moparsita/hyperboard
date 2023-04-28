
import React, {useEffect, useState} from "react";
import Head from 'next/head'
import Image from 'next/image'

import blogs from "../data/blog.json";

import Navbar from '../components/Header/nav'
import RequestsUtils from '../utils/RequestsUtils'
import PopularCarousel from "../components/Ads/PopularCarousel";
import FastSearchCarousel from "../components/Ads/FastSearchCarousel";
import SlogansSection from "../components/HomePage/SlogansSection";
import AdSectionComponent from "../components/Ads/AdSectionComponent";
import ModuleSection from "../components/HomePage/ModuleSection";
import BlogSectionComponent from "../components/Blog/BlogSectionComponent";
import * as IconSax from "iconsax-react";
import SearchSection from "../components/HomePage/SearchSection";
import {deleteCookie} from "cookies-next";

export default function Home() {
    // deleteCookie("hyperboard_token");
    // deleteCookie("hyperboard_user");
    const [user, setUser] = useState({})
    const [query, setQuery] = useState('')
const submitForm = () => {
  window.location = '/ads?query=' + query
}

  const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const fetchInitialData = async () => {
        setIsLoading(true);
        let result = await RequestsUtils.data.indexData();
        setInfo(result.result);
        // if (!result.isDone) {
        //     setFilters(result.result);
        //     console.log(result.result)
        // }
        setIsLoading(false);
    }
    useEffect(() => {
        fetchInitialData();
        console.log(info)
    }, [])

console.log(info)
    // setUser(getCookie('hyperboard_user'));
  return (
    <>
      
      <Navbar />
      <header className="h-[700px] mb-12 bg-fixed bg-center bg-cover custom-img z-10 ">
<div className="xl:w-7/12 lg:w-2/3 md:w-10/12 w-11/12 mx-auto relative  flex flex-col">
    <h2 className="mt-72 mb-6 font-bold text-xl text-white text-center shadow-lg">اجاره فضای تبلیغاتی در هر کجای ایران بزرگ</h2>
    <div className="relative">
        <input
            onChange={(event => setQuery(event.target.value))}
            type="text"
            id="mobileNumber"
            placeholder="میخوای کجا تبلیغ کنی؟"
            className="block rounded-full px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        />
        <div className="absolute top-1 left-1">

            <button
                onClick={(e) => submitForm()}
                className=" bg-primary rounded-full p-2.5 hover:bg-red-600"
                ><IconSax.SearchNormal1 size="16" className="  text-white" />

            </button>

        </div>
    </div>
    <div className="grid grid-cols-3  lg:w-3/4 md:w-10/12 xl:w-10/12 m-auto p-2">
        {!isLoading &&
            info.filters ? <SearchSection items={info.filters} key={info.id}/> : <></>}
    </div>
</div>
      
</header>
<div className="z-10">
{info && (
              <>

          {isLoading ? (
            <>
                <div className="container m-auto z-10 pb-40">

                    <div role="status"
                         className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                        <div
                            className="flex justify-center items-center w-1/3 h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" fill="currentColor" viewBox="0 0 640 512">
                                <path
                                    d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/>
                            </svg>
                        </div>
                        <div className="w-full">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"/>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"/>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"/>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"/>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"/>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"/>
                        </div>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                </>
          ):(
            
            <div className="container m-auto z-10">
              {info.cities ? <PopularCarousel items={info.cities} key={info.id}/> : <></>}
              {/*{info.quickSearchItems ? <FastSearchCarousel items={info.quickSearchItems} key={info.id}/> : <></>}*/}
              {info.features ? <SlogansSection items={info.features} key={info.id}/> : <></>}
              {info.modules && info.modules.length >= 1 ? 
            <ModuleSection items={info.modules[0]}/> : <></>}
              {info.sections && info.sections.length >= 1 ?
                <AdSectionComponent title={info.sections[0].name} subTitle={info.sections[0].details}
                                    ads={info.sections[0].ads} key={info.sections[0].id}/> : <></>}
            {info.sections && info.sections.length >= 2 ?
                <AdSectionComponent title={info.sections[1].name} subTitle={info.sections[1].details}
                                    ads={info.sections[1].ads} key={info.sections[1].id}/> : <></>}
            {info.modules && info.modules.length >= 2 ? 
            <ModuleSection items={info.modules[1]}/> : <></>}
            {info.sections && info.sections.length >= 3 ?
                <AdSectionComponent title={info.sections[2].name} subTitle={info.sections[2].details}
                                    ads={info.sections[2].ads} key={info.sections[2].id}/> : <></>}
            {info.sections && info.sections.length >= 4 ?
                <AdSectionComponent title={info.sections[3].name} subTitle={info.sections[3].details}
                                    ads={info.sections[3].ads} key={info.sections[3].id}/> : <></>}
            {blogs ?
                <BlogSectionComponent title='مجله هایپربرد' subTitle='آخرین اخبار و اطلاعیه ها' ads={blogs} key={blogs.id}/>  : <></>}
            </div>
            
          )}
          </>
)}

</div>
    </>
  )
}
