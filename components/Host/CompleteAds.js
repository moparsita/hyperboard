import {Avatar} from "@material-tailwind/react";
import * as IconSax from "iconsax-react";
import Link from "next/link";
import React from "react";
import AdCompleteChart from "./AdCompleteChart";

export default function CompleteAds({code, date , percent}) {
    return (
        <>


        <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-4">
                <div className="flex justify-between items-center align-middle">
                    <AdCompleteChart percent={percent} />
                            <p className="text-sm text-fontBlack mr-4 ml-auto">کد: <span className="font-bold">({code})</span> </p>

                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی {date}</p>

                    <button className="text-white bg-gray-700 hover:bg-black hover:transition-all rounded-full px-4 py-2 text-xs"
                    >ادامه</button>
                </div>

        </div>
            </>
    )
}