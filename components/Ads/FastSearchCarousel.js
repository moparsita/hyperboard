import React from "react";
import Carousel from "react-slick";
import * as IconSax from "iconsax-react";



export default function FastSearchCarousel({items}) {
  const settings = {
    mobileFirst:true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
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
        <div className="font-IranSans">
          <h3 className="mb-4 text-xl font-bold text-fontBlack">
            مقاصد پر طرفدار
          </h3>
        </div>
        <Carousel {...settings}>
          {items.map(e =>
          <div className="flex flex-col items-center">
            <img
                src={e.img}
                alt={e.name}
                className="w-11/12 aspect-[9/12] ml-3 rounded-large inline-flex"
            />
            <div className="relative -mt-10  z-10 w-11/12 text-white text-center text-md font-bold">
              {e.name}

              <span className="text-xs font-normal flex items-center justify-center">

                {e.count} فضا <IconSax.Share className="relative -top-1 ml-6 text-sm" size={16} />
              </span>
            </div>
          </div>
          )}

        </Carousel>

      </div>
    
  );
}
