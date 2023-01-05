import React from "react";
import * as IconSax from "iconsax-react";

const BlogPreviewComponent = ({ad , color}) => {

    const AdBadge = ({type, title, icon}) => {
        return (
            <div className="absolute right-8 top-8 z-10 px-2 text-black bg-white/90 text-center text-xs rounded-lg" style={{backgroundColor: "rgb(240, 200, 7)"}}>
                {title}

            </div>
        );
    }

    
    return (
        <div className="relative w-full p-2" dir="rtl">
            <img
                src={ad.images[0]}
                alt=""
                className="aspect-video w-full m-1 float-right rounded-large inline-flex"
            />
            <div className="absolute right-8 bottom-10 z-10 p-1 text-white text-xs flex">
                <IconSax.Timer1 size="16" className="ml-1" />
                3 دقیقه

            </div>
            <AdBadge type='1' title={ad.firstCategory.name} icon={ad.firstCategory.icon.path}/>


                {color == "white" ? (
                        <div className="mr-3 mt-0">
                            <h3  className="text-white text-sm">{ad.title}</h3>
                        </div>
                    ) : (
                    <div className="mr-3 mt-0">
                <h3 className="text-xs">{ad.title}</h3>
                                    </div>
                    )}


        </div>
    );
}
export default BlogPreviewComponent;