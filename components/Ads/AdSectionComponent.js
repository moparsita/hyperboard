import React from "react";
import Carousel from "react-slick";

import AdPreviewComponent from "./AdPreviewComponent";


export default function AdSectionComponent({title,subTitle,ads = [], color}) {
    const settings = {
        mobileFirst:true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplay: true,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    dots: false,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            }
        ]
    };
    return (
        
            <div className="container mt-16">

                { title !== undefined ? (
                    <div className=" h-auto block mb-6">
                        <div className="text-xl font-bold text-fontBlack">
                            {title}
                        </div>
                        {subTitle !== undefined ? (
                            <div className="text-xs font-bold text-gray-500 -mb-4">
                                {subTitle}
                            </div>
                        ): <div/>}

                    </div>
                ) : <div/>}
                <Carousel {...settings}>
                    {ads.map(e => <AdPreviewComponent ad={e} color={color}/>)}
                </Carousel>


            </div>
        
    );
}
