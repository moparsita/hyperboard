import {Avatar} from "@material-tailwind/react";
import * as IconSax from "iconsax-react";
import Link from "next/link";
import React from "react";

export default function HostWalletCard() {
    return (
        <div className="rounded-xlarge shadow-lg border border-gray-100 p-0 mt-2">
            <div className="border-r-gray-700 border-r-8 rounded-tr-xlarge rounded-br-xlarge p-4">
                <div className="flex justify-between items-center align-middle">
                    <img src="/img/wallet.png" className="w-8 h-8"/>
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-500">موجودی کیف پول</p>
                        <p className="md text-fontBlack">0 ریال</p>
                    </div>
                    <button className="text-white bg-gray-700 hover:bg-black hover:transition-all rounded-full px-4 py-2 text-xs"
                    >مشاهده</button>
                </div>
            </div>
        </div>
    )
}