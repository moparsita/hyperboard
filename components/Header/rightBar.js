import React from "react";
import { Transition } from '@headlessui/react'
import * as IconSax from "iconsax-react";
import Link from "next/link";
import {deleteCookie, getCookie, hasCookie} from "cookies-next";
export default function RightBar({rightBarOpen,setRightBarOpen, setOpen, open}) {
    if(rightBarOpen !== true) setRightBarOpen(false);
    function logout() {
        deleteCookie("hyperboard_user");
        window.location.href = '/'
    }


    return (
    <Transition show={rightBarOpen}>
    <Transition.Child
        enter="ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-linear duration-300"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
      >
       <div className="fixed top-0 right-0 w-full h-full bg-black/60 z-[90]">
       <Transition.Child
        enter="ease-linear duration-300"
        enterFrom="translate-x-80"
        enterTo="translate-x-0"
        leave="ease-linear duration-300"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-80"
      >
    <div className="fixed top-0 bottom-0 h-full py-4 right-0 w-80 rounded-l-large bg-white min-h-screen  z-[60]">
    <Transition.Child
            
              enter="ease-out duration-300 delay-300"
              enterFrom="opacity-0 translate-x-80 sm:translate-x-0 sm:scale-95"
              enterTo="opacity-100 -translate-x-4 sm:scale-100"
              leave="ease-in duration-200 delay-500"
              leaveFrom="opacity-100 -translate-x-20 sm:scale-100"
              leaveTo="opacity-0 -translate-x-12 sm:translate-x-0 sm:scale-95"
            >
              <button
              className="absolute text-white cursor-pointer text-xl leading-none left-10 top-2 transition-all ease-out -translate-x-20 delay-300  duration-1000  focus:outline-none overflow-visible"
              type="button"
              onClick={() => setRightBarOpen(!rightBarOpen)}
            >
                <IconSax.CloseCircle size="32" />
                </button>
              </Transition.Child>


        <div
            className="w-full text-gray-900 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <div className="flex justify-around border-b p-5">
                <IconSax.User size="42" className="border-2 rounded-full p-1" />
                {hasCookie('hyperboard_user') ? (

                    <button
                        onClick={() => window.location.href = '/host'}
                        className="shadow-lg rounded-full border bg-purple-700 px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-purple-900 f focus:bg-purple-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        {JSON.parse(getCookie('hyperboard_user')).fullName}
                    </button>

                ) : (
                    <button
                        onClick={() => setOpen(!open)}
                        role="submit"
                        className="shadow-lg rounded-full border bg-purple-700 px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-purple-900 f focus:bg-purple-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        ورود / ثبت نام
                    </button>
                )}
            </div>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.Home size="20" className="text-primary"  />
                <p className="mr-2">صفحه اصلی</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.Heart size="20" className="text-primary"  />
                <p className="mr-2">علاقه مندی ها</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.HomeTrendUp size="20" className="text-primary"  />
                <p className="mr-2">صاحب فضا شو</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.Headphone size="20" className="text-primary"  />
                <p className="mr-2">پشتیبانی</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.Messages1 size="20" className="text-primary"  />
                <p className="mr-2">سوالات متداول</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.MessageQuestion size="20" className="text-primary"  />
                <p className="mr-2">راهنما</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.SecuritySafe size="20" className="text-primary"  />
                <p className="mr-2">ضمانت تحویل</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.Judge size="20" className="text-primary"  />
                <p className="mr-2">قوانین وبسایت</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <hr />
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.Gift size="20" className="text-primary"  />
                <p className="mr-2">دعوت از دوستان</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <Link href="#"

                  className="flex shadow-lg relative m-5 p-3  items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.InfoCircle size="20" className="text-primary"  />
                <p className="mr-2">درباره ما</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />
            </Link>
            <button
                onClick={() => logout()}
                  className="flex shadow-lg relative m-5 p-3 w-[17.5rem] items-center text-sm font-medium rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                <IconSax.LogoutCurve size="20" className="text-primary"  />
                <p className="mr-2">خروج</p>
                <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:text-primary"   />

            </button>
        </div>

    </div>
    </Transition.Child>
    </div>
      </Transition.Child>
    
    
    </Transition>
    
    
  );
}