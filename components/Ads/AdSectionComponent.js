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
        
            <div className="container">

                { title !== undefined ? (
                    <div className="mt-8 h-auto block mb-6">
                        <div className="text-xl text-gray-700">
                            {title}
                        </div>
                        {subTitle !== undefined ? (
                            <div className="text-sm text-gray-700 -mb-4">
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
