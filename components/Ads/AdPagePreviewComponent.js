import React from "react";
import Link from "next/link";
import * as IconSax from "iconsax-react";
const AdPagePreviewComponent = ({ad , color}) => {

    const AdBadge1 = ({type, title, icon}) => {

        return (
            <div className="absolute right-4 top-3 z-10 p-1 text-black bg-white/90 text-center flex flex-row-reverse items-center align-middle text-xs rounded-lg">
                {title}
                <img className="w-3 h-3 ml-2"
                     src={icon}
                     alt=""
                />
            </div>
        );
    }

    const AdBadge2 = ({type, title, icon}) => {

        return (
            <div className="absolute left-1 top-3 z-10 p-1 text-black bg-white/90 text-center flex flex-row-reverse items-center align-middle text-xs rounded-lg">
                {title}
                <img className="w-3 h-3 ml-2"
                     src={icon}
                     alt=""
                />
            </div>
        );
    }

    const AdBadge3 = ({type, title, icon}) => {

        return (
            <div className="absolute right-4 top-10 z-10 p-1 text-black bg-white/90 text-center flex flex-row-reverse items-center align-middle text-xs rounded-lg">
                {title}
                <img className="w-3 h-3 ml-2"
                     src={icon}
                     alt=""
                />
            </div>
        );
    }
    return (

        <div className="p-4">
                <Link href={`/s/${ad.id}/${ad.slug}`}>
                    <div className="relative" dir="rtl">
                        {/*<img*/}
                        {/*    src={ad.images[0]}*/}
                        {/*    alt=""*/}
                        {/*    className="w-full aspect-video m-1 float-right rounded-large inline-flex object-cover"*/}
                        {/*/>*/}
                        {/*<div className="absolute right-1 bottom-[4.1rem] z-10 p-1 text-white bg-black/40 text-center text-sm rounded-tl-large rounded-br-large">*/}
                        {/*    از {ad.fromPrice} تومان*/}

                        {/*</div>*/}
                        <div className="w-full m-1 relative">
                            <img src={ad.images[0]} alt="" className="w-full aspect-video rounded-large object-cover" />
                            <div className="absolute bottom-0 z-10 p-1 text-white bg-black/40 text-center text-sm rounded-tl-large rounded-br-large">
                                از {ad.fromPrice} تومان
                            </div>
                        </div>

                        <AdBadge1 type='1' title={ad.firstCategory.name} icon={ad.firstCategory.icon.path}/>
                        <AdBadge2 type='2' title={ad.secondCategory.name} icon={ad.secondCategory.icon.path}/>
                        <AdBadge3 type='3' title={ad.thirdCategory.name} icon={ad.thirdCategory.icon.path}/>

                        {color == "white" ? (
                            <div className="mr-3 mt-0">
                                <h4 className="text-white text-sm">{ad.title}</h4>
                                <h3 className="text-white text-xs flex mt-0">{ad.dimensions[0]} در {ad.dimensions[1]} سانتی متر . {ad.bannerType.name} . <span><IconSax.Star className="icon_star-filled"/></span> {ad.average} ({ad.totalComments} نظر)</h3>
                            </div>
                        ) : (
                            <div className="mr-3 mt-0">
                                <h4 className="text-sm">{ad.title}</h4>
                                <h3 className="text-xs flex mt-0">{ad.dimensions[0]} در {ad.dimensions[1]} سانتی متر . {ad.bannerType.name} . <span><IconSax.Star size={18} className="text-amber-400"/></span> {ad.average} ({ad.totalComments} نظر)
                                </h3>
                            </div>
                        )}


                    </div>
                </Link>
        </div>


    );
}
export default AdPagePreviewComponent;