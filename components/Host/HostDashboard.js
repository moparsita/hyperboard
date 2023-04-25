import React, {useState} from "react";
import {Avatar} from "@material-tailwind/react";
import * as IconSax from "iconsax-react";
import Link from "next/link";
import HostMenuCard from "./HostMenuCard";
import HostWalletCard from "./HostWalletCard";
import blogs from "../../data/blog.json";
import BlogSectionComponent from "../Blog/BlogSectionComponent";
import CompleteProfile from "./CompleteProfile";
import CompleteAds from "./CompleteAds";
import CircularLoading from "../Loadings/CircularLoading";
import RequestsUtils from "../../utils/RequestsUtils";
import {styled, Tab, Tabs} from "@mui/material";
import SwipeableViews from 'react-swipeable-views';
import {TabPanel} from "../TabPanel";



export default function HostDashboard() {
    const [page, setPage] = useState('');
    const [notifications, setNotifications] = useState([]);
    const [value, setValue] = React.useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const handleChangeIndex = (index) => {
        setValue(index);
    };
    const CustomTab = styled(Tab)({
        fontFamily: "Iransans",
        fontSize: "13px",
        fontWeight: 700,
        textAlign: "left !important",
        alignItems: "baseline"

    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const remainAds = () => {
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">تابلوهای خود را کامل کنید</h3>
                <CompleteAds code="12" date="20 آذر 1401" percent={10} />
                <CompleteAds code="16" date="20 آذر 1401" percent={20} />
                <CompleteAds code="18" date="20 آذر 1401" percent={45} />
                <CompleteAds code="25" date="20 آذر 1401" percent={65} />
                <CompleteAds code="32" date="20 آذر 1401" percent={78} />
            </>
        )
    }
const getNotifications = async () => {
    let result = await RequestsUtils.dashboard.notifications();
    setNotifications(result.result);
    console.log(notifications)
}
    const NotificationsSection =  () => {
        // getNotifications().then(r => {console.log(r)});
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">اعلانات</h3>
                <p className="text-sm text-red-800">در حال حاضر اعلانی برای شما وجود ندارد</p>
            </>
        )
    }

    const DiscountsSection = () => {
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">تخفیفات</h3>
                <p className="text-sm text-red-800">در حال حاضر کد تخفیفی برای شما تعریف نشده است</p>
            </>
        )
    }

    const StatsSection = () => {
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">آمار</h3>
                <p className="text-sm text-red-800">در حال حاضر کد تخفیفی برای شما تعریف نشده است</p>
            </>
        )
    }

    const AdsManagementSection = () => {
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">مدیریت فضاهای تبلیغاتی</h3>
                <p className="text-sm text-red-800">در حال حاضر کد تخفیفی برای شما تعریف نشده است</p>
            </>
        )
    }

    const ReservesSection = () => {
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">رزروها</h3>
                <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="disabled tabs example">
                    <CustomTab label="در انتظار تایید (0)" />
                    <CustomTab label="جاری (0)" />
                    <CustomTab label="پایان یافته (0)" />
                </Tabs>
                <SwipeableViews
                    style={{
                        width: "100%"
                    }}
                    axis="x-reverse"
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0}>
                        رزروی برای نمایش وجود ندارد
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        رزروی برای نمایش وجود ندارد
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        رزروی برای نمایش وجود ندارد
                    </TabPanel>
                </SwipeableViews>
            </>
        )
    }

    const CommentsSection = () => {
        return (
            <>
                <h3 className="text-fontBlack text-md font-bold mt-12">نظرات</h3>
                <p className="text-sm text-red-800">در حال حاضر کد تخفیفی برای شما تعریف نشده است</p>
            </>
        )
    }
    console.log(page)
  return (
      <section className="rounded-t-xlarge bg-white w-full">
          <div className="container m-auto py-8">
              <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row">
                  <div className=" md:w-2/5 lg:w-1/4 ml-6 ">
                      <HostMenuCard page={page} setPage={setPage} />
                      <HostWalletCard />
                  </div>
                  <div className=" md:w-3/5 lg:w-3/4 sm:mt-4 md:mt-0 lg:mt-0">
                      <CompleteProfile />
                      {page === '' ?
                          remainAds() :
                          page === 'Notifications' ? NotificationsSection() :
                              page === 'Discounts' ? DiscountsSection() :
                                  page === 'Stats' ? StatsSection() :
                                      page === 'AdManagement' ? AdsManagementSection() :
                                          page === 'Reserves' ? ReservesSection() :
                                              page === 'Comments' ? CommentsSection() : <CircularLoading/>}


                      {/*{blogs ?*/}
                      {/*    <BlogSectionComponent title='مجله هایپربرد' subTitle='آخرین اخبار و اطلاعیه ها' ads={blogs} key={blogs.id}/>  : <></>}*/}
                  </div>
              </div>
          </div>
      </section>
  );
}
