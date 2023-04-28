import React from "react";
import Carousel from "react-slick";



export default function PopularCarousel({items}) {
  
  const settings = {
    mobileFirst:true,

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 4,
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
    
      <div className="" dir='rtl'>
        <div className="font-IranSans">
          <h3 className="mb-4 text-xl font-bold text-fontBlack">
            تابلوهای پر طرفدار
          </h3>
        </div>
        

        <Carousel {...settings}>
          {items ? items.map(e =>
          <>
            <a href={`/ads?cityId=${e.id}`} className="m-2">
            <div className="flex flex-col items-center align-middle mx-2 first:mb-12">
            <img
                src={e.image.path}
                alt={e.image.alt}
                className=" aspect-square rounded-large w-full"
            />
          <div className=" w-fit text-black flex flex-row flex-wrap justify-between">
              <h4 className="text-lg font-bold text-fontBlack">
                {e.name}
                <span className="text-sm text-fontBlack/80">{" "}({e.ads} تابلو)</span>
              </h4>

            </div>

            
          </div>
            </a>

        
          </>
        
              ) : (
                  <></>)}
        </Carousel>

      </div>
    
  );
}
