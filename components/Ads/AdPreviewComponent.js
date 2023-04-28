
import React from "react";
import * as IconSax from "iconsax-react";
const AdPreviewComponent = ({ad , color}) => {

    const AdBadge = ({type, title, icon}) => {
        var classw = '';
        type === 1 ? (classw = "absolute right-6 t-3 z-10 px-2 text-black bg-white/90 text-center text-xs rounded-lg") :
                       type ===2 ? (classw = "absolute left-8 top-3 z-10 px-2 text-black bg-white/90 text-center text-xs rounded-lg") : 
                       (classw = "absolute right-8 top-12 z-10 px-2 text-black bg-white/90 text-center text-xs rounded-lg")
               return (
                   <div className={classw
                       }>
                       {title}
                       <img className="w-6 h-6 float-right p-2"
                           src={icon}
                           alt=""
                       />
                   </div>
               );
           }

           const AdBadge1 = ({type, title, icon}) => {
           
                   return (
                       <div className="absolute right-6 top-6  z-10 px-2 text-fontBlack bg-white/90 text-center text-xs rounded-lg flex flex-row-reverse align-middle items-center">
                           {title}
                           <img className="w-6 h-6 p-2"
                               src={icon}
                               alt=""
                           />
                       </div>
                   );
               }

               const AdBadge2 = ({type, title, icon}) => {
                
                       return (
                           <div className="absolute left-4 top-6  z-10 px-2 text-fontBlack bg-white/90 text-center text-xs rounded-lg flex flex-row-reverse align-middle items-center">
                               {title}
                               <img className="w-6 h-6 p-2"
                                   src={icon}
                                   alt=""
                               />
                           </div>
                       );
                   }

                   const AdBadge3 = ({type, title, icon}) => {
                
                           return (
                               <div className="absolute right-6 top-14  z-10 px-2 text-fontBlack bg-white/90 text-center text-xs rounded-lg flex flex-row-reverse align-middle items-center">
                                   {title}
                                   <img className="w-6 h-6 p-2"
                                       src={icon}
                                       alt=""
                                   />
                               </div>
                           );
                       }
    return (
        <a href={`/s/${ad.id}/${ad.slug}`}>
        <div className="w-full p-2 flex flex-col" dir="rtl">
            <div className="relative">
                <img
                src={ad.images[0]}
                alt=""
                className="aspect-video w-full m-1 float-right rounded-large inline-flex object-cover block"
            />

            {/*<div className="absolute right-3 bottom-16 z-10 p-1 text-white bg-black/40 text-center text-sm rounded-tl-large">*/}
            {/*    از {ad.fromPrice} تومان*/}

            {/*</div>*/}
            <AdBadge1 type='1' title={ad.firstCategory.name} icon={ad.firstCategory.icon.path}/>
            <AdBadge2 type='2' title={ad.secondCategory.name} icon={ad.secondCategory.icon.path}/>
            <AdBadge3 type='3' title={ad.thirdCategory.name} icon={ad.thirdCategory.icon.path}/>
            </div>
                {color == "white" ? (
                        <div className="mr-3 mt-0">
                            <h3 className="text-white text-sm">{ad.title}</h3>
                            <h4 className="text-white text-xs flex">{ad.dimensions[0]} در {ad.dimensions[1]} سانتی متر . {ad.bannerType.name} . <span><IconSax.Star className="icon_star-filled"/></span> {ad.average} ({ad.totalComments} نظر)</h4>
                        </div>
                    ) : (
                    <div className="mt-3 mr-2 block w-full">
                    <h3 className="text-sm font-bold px-4 flex justify-between"><span>{ad.title}</span> <span className="font-light">  از {ad.fromPrice} تومان</span></h3>

                {/*<h4 className="text-xs flex">{ad.dimensions[0]} در {ad.dimensions[1]} سانتی متر . {ad.bannerType.name} . <span><IconSax.Star size={18} className="text-amber-400"/></span> {ad.average} ({ad.totalComments} نظر)*/}
                {/*</h4>*/}
                    </div>
                    )}


        </div>
        </a>
    );
}
export default AdPreviewComponent;