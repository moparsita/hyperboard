import React from "react";
import * as IconSax from "iconsax-react";
import Logo from "../../public/img/icon.png";
import {useRouter} from "next/router";
export default function AppBar() {
    const router = useRouter();
    console.log(router.pathname)
    return (
       <>
           {
               router !== '/ads' ?

           <div className="md:hidden lg:block bg-gray-100 rounded-t-xl bottom-0 mt-8 mb-0 bg-white z-50  px-4 pt-6" >
               <div className="container m-auto z-10 pb-10">
               <div className="grid grid-cols-4 gap-12">
                   <div>
                       <div>
                           <span><img src={Logo.src} className="h-10" /></span>
                           <p className="text-sm text-justify mt-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                       </div>
                   </div>
                   <div>
                       <h4 className="text-base border-slate-800 mt-0   ml-2 mb-2">دسترسی سریع</h4>
                       <ul className="mr-6">
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">صفحه اصلی</a></li>
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">قوانین و مقررات</a></li>
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">سوالات متداول</a></li>
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">راهنما</a></li>
                           <li><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">پشتیبانی</a></li>

                       </ul>
                   </div>
                   <div>
                       <h4 className="text-base border-slate-800 mt-0  ml-2 mb-2">لینکهای مفید</h4>
                       <ul className="mr-6">
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">ریاست جمهوری</a></li>
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">انجمن صنفی تبلیغات</a></li>
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">طراحان گرافیک ایران</a></li>
                           <li className="mb-1.5"><a href="#" className="text-sm font-black text-fontBlack hover:text-primary">آکادمی خلیج فارس</a></li>

                       </ul>
                   </div>
                   <div>
                       <h4 className="text-base border-slate-800 mt-0  ml-2 mb-2">تماس با ما</h4>
                       <ul className="mr-6">
                           <li className="mb-1.5 text-sm"><span className="font-bold">آدرس:</span> کرج، گوهردشت، خیابان سوم</li>
                           <li className="mb-1.5 text-sm"><span className="font-bold">تلفن:</span> 026 33 33 33 33</li>
                           <li className="mb-1.5 text-sm"><span className="font-bold">همراه:</span> 0912 222 33 44</li>
                           <li className="mb-1.5 text-sm"><span className="font-bold">ایمیل:</span> info@hyperboard.ir</li>
                       </ul>
                       <div className="flex flex-row justify-between">
                           <img src='/img/social/telegram.png' width={42}/>
                           <img src='/img/social/instagram.png' width={42}/>
                           <img src='/img/social/whatsapp.png' width={42}/>
                           <img src='/img/social/facebook.png' width={42}/>
                           <img src='/img/social/twitter.png' width={42}/>
                       </div>
                   </div>
               </div>
               </div>
           </div>
                   :
                   <></>
           }
           <div className="fixed lg:hidden xl:hidden md:fixed bottom-1 border h-13 bg-white z-50 left-1 right-1 mx-2 rounded-lg shadow-md px-4 pt-2" >
               <ul className="flex flex-row justify-evenly">
                   <li className="flex flex-col justify-end align-middle items-center text-primary border-b-2 border-b-primary relative w-1/5">
                       <IconSax.Home2 />
                       <span className="text-[0.65rem]">صفحه اصلی</span>
                   </li>
                   <li className="flex flex-col justify-center align-middle border-b-2 border-b-white items-center text-gray-500 relative w-1/5">
                       <IconSax.SearchNormal />
                       <span className="text-[0.65rem]">آگهی ها</span>
                   </li>
                   <li className="flex flex-col justify-center align-middle items-center text-primary bg-primary text-white shadow-md shadow-primary rounded-full h-11 w-11 -mt-7 p-1 relative ">
                       <IconSax.ShopAdd className=" " />
                   </li>
                   <li className="flex flex-col justify-center align-middle border-b-2 border-b-white items-center text-gray-500 relative w-1/5">
                       <IconSax.Heart />
                       <span className="text-[0.65rem]">علاقه مندی ها</span>
                   </li>
                   <li className="flex flex-col justify-center align-middle border-b-2 border-b-white items-center text-gray-500 relative w-1/5">
                       <IconSax.LogoutCurve />
                       <span className="text-[0.65rem]">ورود/ثبت نام</span>
                   </li>
               </ul>
           </div>
       </>
    )

}
