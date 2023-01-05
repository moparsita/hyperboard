import React from "react";
import Carousel from "react-slick";



export default function SlogansSection({items}) {
  const settings = {
    mobileFirst:true,
    dots: false,
    infinite: false,
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

<div className="container mt-16">
        
        <Carousel {...settings}>
          {items.map(e =>
                  // eslint-disable-next-line react/jsx-key
          <div className="p-2">
            <div className="w-full p-3 space-x-1 border rounded-large shadow-md flex place-content-start flex-row">
            <div className="w-14 h-14 p-1 ml-3 relative">
              <img className="w-full"
                  src={e.icon.path}
                  alt={e.title}
                      />
            </div>
            <div className="flex flex-col flex-wrap flex-grow place-content-start text-right">
                <h4 className="text-base border-slate-800  ml-2 mb-2">{e.title}</h4>
                <p className="text-xs text-gray-700  m-0">{e.detail}</p>
            </div>
          </div>
          </div>
          )}

        </Carousel>

      </div>



      
    
  );
}
