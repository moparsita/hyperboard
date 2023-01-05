
import React, {useState} from "react";
import * as IconSax from "iconsax-react"
import RequestsUtils from '../../../utils/RequestsUtils'
import  Image from 'next/image'
import FixedNavbar from "../../../components/Header/fixednav";
// import {
//     Accordion,
//     AccordionBody,
//     AccordionHeader,
//     AccordionItem,
// } from 'reactstrap';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
export default function adSingle({ad}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const AdPage = () => {
        const [open, setOpen] = useState(-1);
        const customAnimation = {
            mount: { scale: 1 },
            unmount: { scale: 0.6 },
        };
        return (
            <div className="z-10">
                <FixedNavbar />
                <section className="text-gray-700 mt-20">
                    <div className="container mt-4 m-auto">
                        <div className="flex flex-wrap">

                            <div className="flex flex-wrap w-1/2">

                                <div className="w-full p-1 md:p-2 block">

                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                         src="/img/bg7.jpg"/>
                                    <div className="relative right-0 z-10 bottom-20 p-2 w-fit text-white bg-black/30 text-sm rounded-l-large">هایپربرد {">"} {ad.geo.state.name} {">"} {ad.geo.city.name} {">"} {ad.geo.district.name}</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="/img/bg7.jpg"/>
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="/img/bg7.jpg"/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap">
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="/img/bg7.jpg"/>
                                    </div>
                                    <div className="w-1/2 p-1 md:p-2">
                                        <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                             src="/img/bg7.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container m-auto">
                    <div className="flex items-center flex-row justify-between mb-8 p-2 relative w-full  mt-6">
                        <div>
                            <h3 className="mb-2 text-lg font-bold">{ad.title}</h3>
                            <div className="flex">
                                <div className="flex rounded-large border text-xs p-2 ml-3 border-primary bg-primary/20 text-primary">
                                    <IconSax.Hashtag size={18} /> کد: {ad.id}
                                </div>
                                <div className="flex rounded-large border text-xs p-2 ml-3 border-greenColor bg-greenColor/20 text-greenColor">
                                    <IconSax.TickSquare size={18} /> {ad.reserves} رزور موفق
                                </div>
                                <div className="flex rounded-large border text-xs p-2 ml-3 border-orangeColor bg-orangeColor/20 text-orangeColor">
                                    <IconSax.CalendarTick size={18} /> {ad.days} روز در هایپربرد
                                </div>
                            </div>
                        </div>
                        <img src={ad.owner.avatar} className="rounded-full w-12" />
                    </div>
                </section>
                <section className="bg-gray-light border-t border-t-fontBlack shadow-lg py-3 w-full">
                    <div className="container m-auto flex z-20 items-center justify-around text-fontBlack">
                        <div className="text-center text-lg">
                            <IconSax.RulerPen size={80} />
                            <p>{ad.side}</p>
                        </div>
                        <div className="text-center text-lg">
                            <IconSax.Clock size={80} />
                            <p>{ad.dayTime.name}</p>
                        </div>
                        <div className="text-center text-lg">
                            <IconSax.Eye size={80} />
                            <p>{ad.viewCondition.name}</p>
                        </div>
                        <div className="text-center text-lg">
                            <IconSax.I3DRotate size={80} />
                            <p>{ad.hasRotation ? "دارد" : "ندارد"}</p>
                        </div>
                    </div>
                </section>
                <section className="container m-auto py-5">
                    <h3 className="text-lg font-bold">درباره تابلو</h3>
                    <h4 className="text-md">{ad.title}</h4>
                    <p className="text-xs">{ad.description}</p>
                    <hr className="my-3"/>
                    <div className="rounded-large shadow-lg my-1 inline-block p-4 relative w-full bg-white">
                        <h3 className="block text-lg font-bold flex flex-row align-middle items-center "><IconSax.I3Dcube color="#9818D6" size="36" className="ml-2 animate-wiggle hover:animate-spin"/>  اطلاعات فنی تابلو</h3>
                        <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-3 gap-2 font-bold px-5 py-2">
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">جنس بدنه: </small> {ad.material.name}</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">عرض تابلو: </small> {ad.dimensions.width} متر</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">ارتفاع تابلو: </small> {ad.dimensions.height} متر</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">مساحت: </small> {ad.side} مترمربع</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">نوع نورپردازی: </small> {ad.lightType.name}</p>
                        </div>

                    </div>
                    <hr className="my-3"/>
                    <div className="rounded-large shadow-lg my-1 inline-block p-4 relative w-full bg-white">
                        <h3 className="block text-lg font-bold flex flex-row align-middle items-center "><IconSax.People color="#9818D6" size="36" className="ml-2 animate-wiggle hover:animate-spin"/>  اطلاعات فنی تابلو</h3>
                        {/*<Accordion open={openAccordion} toggle={toggle}>*/}
                        {/*    {ad.timeTable.map(timetable =>*/}
                        {/*        // eslint-disable-next-line react/jsx-key*/}
                        {/*        <AccordionItem>*/}
                        {/*            <AccordionHeader className="w-full " targetId="1">*/}
                        {/*                <div className="flex flex-row justify-between">*/}
                        {/*                    <IconSax.CalendarCircle color="#333333" /> <span className="text-right pr-4">{timetable.day}</span>*/}
                        {/*                </div>*/}

                        {/*            </AccordionHeader>*/}
                        {/*            {timetable.times.map(times =>*/}
                        {/*                // eslint-disable-next-line react/jsx-key*/}
                        {/*                <AccordionBody accordionId="1"  className="flex">*/}
                        {/*                    <div className="text-center text-lg rounded-large shadow-xl inline-block p-4 m-5 relative bg-white">*/}
                        {/*                        {times.icon === "night" ? <IconSax.Moon /> : <IconSax.Sun1 />}*/}
                        {/*                        <p>از {times.start} تا {times.end}</p>*/}

                        {/*                    </div>*/}
                        {/*                </AccordionBody>*/}
                        {/*            )}*/}
                        {/*        </AccordionItem>*/}
                        {/*    )}*/}
                        {/*</Accordion>*/}
                        {
                            ad.timeTable.map(timetable => (

                                <Accordion open={open === ad.timeTable.indexOf(timetable)} animate={customAnimation}>
                                    <AccordionHeader onClick={() => {
                                        let i = ad.timeTable.indexOf(timetable);
                                        if (i !== open) {
                                            setOpen(i)
                                        } else {
                                            setOpen(-1);
                                        }

                                    }}>
                                        <div className="flex flex-row justify-between pr-4">
                                            <IconSax.CalendarCircle color="#333333" />  <span className="text-right text-sm pr-2 font-IranSans">{timetable.day}</span>
                                        </div>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        {timetable.times.map(times =>
                                                           <div className="m-auto font-IranSans text-sm rounded-large shadow-lg inline-block p-4 m-5 relative bg-white">
                                                               {times.icon === "night" ? <IconSax.Moon className="m-auto" /> : <IconSax.Sun1 className="m-auto" />}
                                                               <p className="mt-3">از {times.start} تا {times.end}</p>

                                                           </div>
                                                   )}
                                    </AccordionBody>
                                </Accordion>
                            ))}

                        <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-3 gap-2  font-bold px-5 py-22 mt-8">
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">شرایط بیننده: </small> <img src={ad.viewCondition.icon.thumb} className="h-4 ml-2" alt={ad.viewCondition.name}/> {ad.viewCondition.name}</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">نوع بیننده: </small> <img src={ad.viewerType.icon.thumb} className="h-4 ml-2" alt={ad.viewerType.name}/> {ad.viewerType.name}</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">جنسیت بیننده: </small> {ad.viewerGender} </p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">مدت زمان رویت: </small> {ad.viewDuration}  ثانیه</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">سرعت هنگام رویت: </small> {ad.viewSpeed}  متر بر ثانیه</p>
                            <p className="flex flex-row items-center align-middle"><IconSax.ArrowLeft3 size="16" className="text-primary/80 animate-pulse ml-1" /> <small className="text-fontBlack/70 text-[80%] ml-2">اوقات مناسب: </small> {ad.dayTime.name}</p>
                        </div>
                    </div>
                </section>

                {/* <div className={classes.container}>


                                    <div className={classes.CardFlat}>
                                        <div>
                                            <h3>{ad.title}</h3>
                                            <div style={{display:"flex"}}>
                                                <div className={classes.purpleBadge}>
                                                    <Hashtag size={18}/> کد: {ad.id}
                                                </div>
                                                <div className={classes.greenBadge}>
                                                    <TickSquare size={18}/> {ad.reserves} رزور موفق
                                                </div>
                                                <div className={classes.orangeBadge}>
                                                    <CalendarTick size={18}/> {ad.days} روز در هایپربرد
                                                </div>
                                            </div>
                                        </div>
                                        <img src={ad.owner.avatar} className={classes.avatar}/>

                                    </div>



                        </div> */}


            </div>
        );
    }
    return (
        <>
            {ad ? <AdPage /> : <></>}
        </>
    );
}
export async function getStaticProps({ params }) {
    const {result} = await RequestsUtils.ads.single(params.id);
    return {
        props: {
            ad: result,
        },
    };
}
export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true,
    };
}
