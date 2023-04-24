import React from "react";
import Carousel from "react-slick";



export default function PopularCarousel({items}) {
  
  const settings = {
    mobileFirst:true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    rows: 2,
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
            تابلوهای پر طرفدار
          </h3>
        </div>
        

        <Carousel {...settings}>
          {items ? items.map(e =>
          <>
          <div className="slick" >
            <a href={`/ads?cityId=${e.id}`}>
            <div className="flex flex-row flex-nowrap items-center align-middle first:mb-12">
            <img
                src={e.image.path}
                alt={e.image.alt}
                className=" aspect-square ml-3 rounded-large inline-flex"
            />
          <div className="z-10 pt-8 text-black ml-8 text-right">
              <h4 className="text-lg font-bold text-fontBlack">
                {e.name}
              </h4>
              <h6 className="text-sm text-fontBlack/80">{e.ads} تابلو</h6>
            </div>

            
          </div>
            </a>
        </div>
        
        
          </>
        
              ) : (
                  <></>)}
        </Carousel>

      </div>
    
  );
}
