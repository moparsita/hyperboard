import React from "react";
import * as IconSax from "iconsax-react";
export default function AppBar() {
    return (
        <div className="fixed lg:hidden xl:hidden md:relative bottom-1 border h-13 bg-white z-50 left-1 right-1 mx-2 rounded-lg shadow-md px-4 pt-2" >
            <ul className="flex flex-row justify-evenly">
                <li className="flex flex-col justify-end align-middle items-center text-primary border-b-2 border-b-primary relative w-1/5">
                    <IconSax.Home2 />
                    <span className="text-[0.65rem]">صفحه اصلی</span>
                </li>
                <li className="flex flex-col justify-center align-middle items-center text-gray-500 relative w-1/5">
                    <IconSax.SearchNormal />
                    <span className="text-[0.65rem]">آگهی ها</span>
                </li>
                <li className="flex flex-col justify-center align-middle items-center text-primary bg-primary text-white shadow-md shadow-primary rounded-full h-11 w-11 -mt-7 p-1 relative ">
                    <IconSax.ShopAdd className=" " />
                </li>
                <li className="flex flex-col justify-center align-middle items-center text-gray-500 relative w-1/5">
                    <IconSax.Heart />
                    <span className="text-[0.65rem]">علاقه مندی ها</span>
                </li>
                <li className="flex flex-col justify-center align-middle items-center text-gray-500 relative w-1/5">
                    <IconSax.LogoutCurve />
                    <span className="text-[0.65rem]">ورود/ثبت نام</span>
                </li>
            </ul>
        </div>
    )

}
