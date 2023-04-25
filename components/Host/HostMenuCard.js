import {Avatar} from "@material-tailwind/react";
import * as IconSax from "iconsax-react";
import Link from "next/link";
import React from "react";
import {getCookie} from "cookies-next";

export default function HostMenuCard({page , setPage}) {
    return (
        <div className="rounded-xlarge shadow-sm border border-gray-100 p-2">
            <div>
                <div className="bg-breadcump-pattern bg-black/20 rounded-xlarge p-2 text-center h-24 ">
                    <Avatar src="/img/1.jpg" variant="circular" size="xl" className="-mt-10"/>
                    <p className="flex place-items-center place-content-center font-bold"> مصطفی براتی<IconSax.Edit className="mr-2" /> </p>
                    <p className="text-sm">09158907872</p>
                </div>
                <div className="mt-10 text-center grid grid-cols-2 gap-2 justify-between mt-1">
                    <div className="flex flex-col justify-between text-center border rounded-lg shadow-sm p-1">
                        <span className="text-sm font-bold">فضاهای فعال</span>
                        <span className="text-sm font-bold">0</span>
                        <button className="border border-gray-100 text-center bg-gray-200 text-sm px-3 rounded">مدیریت فضا ها</button>
                    </div>
                    <div className="flex flex-col justify-between text-center border rounded-lg shadow-sm p-1">
                        <span className="text-sm font-bold">فضاهای نیمه کاره</span>
                        <span className="text-sm font-bold">22</span>
                        <button className="border border-gray-100 text-center bg-gray-200 text-sm px-3 rounded">تکمیل کد 32</button>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => setPage('Notifications')}
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white "
                style={{width: '100%'}}>
                    <IconSax.Notification size="20" className="text-gray-500"  />
                    <p className="mr-2">اعلانات (0)</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </button>
                <button onClick={() => setPage('Discounts')}
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.DiscountShape size="20" className="text-gray-500"  />
                    <p className="mr-2">تخفیف ها</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </button>
                <button onClick={() => setPage('Stats')}
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.Chart size="20" className="text-gray-500"  />
                    <p className="mr-2">آمار</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </button>
                <button onClick={() => setPage('AdManagement')}
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.HomeWifi size="20" className="text-gray-500"  />
                    <p className="mr-2">مدیریت فضاهای تبلیغاتی</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </button>
                <Link href="/newad"
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.Image size="20" className="text-gray-500"  />
                    <p className="mr-2">افزودن تابلو</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </Link>
                <button onClick={() => setPage('Reserves')}
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.Reserve size="20" className="text-gray-500"  />
                    <p className="mr-2">رزروها</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </button>
                <button onClick={() => setPage('Comments')}
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.Messages1 size="20" className="text-gray-500"  />
                    <p className="mr-2">نظرات</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </button>
                <Link href="/"
                      className="flex shadow-sm relative my-4 p-3  items-center text-sm font-medium rounded-lg border border-gray-400 hover:bg-gray-100 hover:font-bold focus:z-10 focus:ring-2  dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                        style={{width: '100%'}}>
                    <IconSax.Home size="20" className="text-gray-500"  />
                    <p className="mr-2">بازگشت به صفحه اصلی</p>
                    <IconSax.ArrowLeft2 size="20" className="mr-auto ml-0 text-gray-500 hover:font-bold"   />
                </Link>




            </div>
        </div>
    )
}