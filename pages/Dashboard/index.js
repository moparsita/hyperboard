import {useState, useEffect} from "react";
import FixedNavbar from "../../components/Header/fixednav";
import RequestsUtils from "../../utils/RequestsUtils";
import * as IconSax from "iconsax-react";
import {getCookie} from "cookies-next";
import AdCompleteChart from "../../components/Host/AdCompleteChart";


export default function Dashboard() {
    const [user, setUser] = useState({})
    const [notifications, setNotifications] = useState({})
    const [ads, setAds] = useState({})
    const [dashboard, setDashboard] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const fetchDashboardData = async () => {
        setIsLoading(true);
        let result = await RequestsUtils.dashboard.notifications();
        if(result.isDone){
            setNotifications(result.result);
        }

        setIsLoading(false);
    }
    useEffect(() => {
        // fetchDashboardData().then(r => {});
    }, [])
    console.log(ads)
    return (
        <>
            <FixedNavbar full={true} />
            {isLoading ? (
                <>

                </>
            ):(

                <section className="bg-white left-20 right-20 mt-24">
                        <div className="p-4 grid lg:grid-cols-2 lg:gap-4 sm:grid-rows-2 sm:gap-1">
                            <div className="mt-16" >
                                <div className="rounded">
                                    <div className="flex rounded flex-row justify-between p-4 bg-breadcump-pattern bg-fontBlack/10">
                                        <div className="flex flex-col justify-between text-center">
                                            <span className="text-sm font-bold">فضاهای فعال</span>
                                            <span className="text-sm font-bold">0</span>
                                            <button className="border border-gray-100 text-center bg-gray-200 text-sm px-3 rounded">مدیریت فضا ها</button>
                                        </div>
                                        <div className="-mt-20 text-center flex flex-col">
                                            <IconSax.User size="128" className="border-2 rounded-full p-1" />
                                            <span className="text-xl font-bold">{JSON.parse(getCookie('hyperboard_user')).user.fullName}</span>
                                            <span className="text-sm">{JSON.parse(getCookie('hyperboard_user')).user.mobile}</span>
                                        </div>
                                        <div className="flex flex-col justify-between text-center">
                                            <span className="text-sm font-bold">فضاهای نیمه کاره</span>
                                            <span className="text-sm font-bold">22</span>
                                            <button className="border border-gray-100 text-center bg-gray-200 text-sm px-3 rounded">تکمیل کد 32</button>
                                        </div>
                                    </div>
                                    <div className="mt-2 grid grid-cols-3 lg:gap-12 sm:gap-4 gap-4">
                                        <a href="#">
                                            <div className="p-4 rounded shadow-lg bg-white flex flex-wrap flex-col justify-evenly text-center items-center h-48">
                                                <IconSax.Notification size="48" />
                                                <span className="">اعلانات (0)</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="p-4 rounded shadow-lg bg-white flex flex-wrap flex-col justify-evenly text-center items-center h-48">
                                                <IconSax.DiscountShape size="48" />
                                                <span className="">تخفیف ها</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="p-4 rounded shadow-lg bg-white flex flex-wrap flex-col justify-evenly text-center items-center h-48">
                                                <IconSax.Chart size="48" />
                                                <span className="">آمار</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mt-2 grid grid-cols-1 ">

                                        <a href="#">
                                            <div className="p-4 rounded shadow-lg bg-white flex flex-wrap flex-col justify-evenly text-center items-center h-48">
                                                <IconSax.HomeWifi size="48" />
                                                <span className="">مدیریت فضاهای تبلیغاتی</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="mt-2 grid grid-cols-2 gap-12">
                                        <a href="#">
                                            <div className="p-4 rounded shadow-lg bg-white flex flex-wrap flex-col justify-evenly text-center items-center h-48">
                                                <IconSax.Reserve size="48" />
                                                <span className="">رزرو ها</span>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="p-4 rounded shadow-lg bg-white flex flex-wrap flex-col justify-evenly text-center items-center h-48">
                                                <IconSax.Wallet size="48" />
                                                <span className="">کیف پول</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded p-4 mt-16">
                                <p className="bg-gray-300 text-center rounded py-2">فضاهای نیمه کاره</p>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>
                                <div className="rounded-xlarge shadow-lg border border-gray-100 p-2 mb-2">
                                    <div className="flex justify-between items-center align-middle">
                                        <AdCompleteChart percent="35" />
                                        <p className="text-sm text-fontBlack mr-4 ml-auto">کد: (3180394)</p>
                                        <p className="text-sm text-fontBlack font-bold ml-auto">بروزرسانی 20 آذر 1401</p>

                                        <button className="text-white bg-primary rounded-full px-4 py-2 text-xs"
                                        >ادامه</button>
                                    </div>

                                </div>

                            </div>
                        </div>
                </section>
                )
            }
        </>
    )
}