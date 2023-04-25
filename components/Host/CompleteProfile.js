import {Avatar} from "@material-tailwind/react";
import * as IconSax from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function CompleteProfile() {
    return (
        <div className="rounded-xlarge p-2 bg-black">

                <div className="flex justify-between items-center align-middle">

                        <p className="text-sm text-white">حساب کاربری خود را تکمیل کنید</p>

                    <button className="text-white bg-gray-700 hover:bg-white hover:transition-all hover:text-black rounded-full px-4 py-2 text-xs"
                    >ادامه</button>
                </div>

        </div>
    )
}