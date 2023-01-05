
import React, {useEffect, useState} from "react";
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Dropdown} from "reactstrap";
import {DatePicker, ConfigProvider} from "antd";
import {DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener} from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import RequestsUtils from '../utils/RequestsUtils'
import * as IconSax from "iconsax-react";
import FixedNavbar from "../components/Header/fixednav";
import FilterComponent from "../components/Ads/Filters/FilterComponent";
import AddPageComponent from "../components/Ads/AdPageComponent";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
} from "@material-tailwind/react";
import Map from '../components/Map';
const marker1 = [35.85, 50.96]
const marker2 = [34.85, 51.96]

export default function Ads(props) {
    const [user, setUser] = useState({})
const submitForm = () => {
  // window.location = '/ads'
}

    const {...rest} = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeDate = () => setDropdownOpen(false);
    const openDate = () => setDropdownOpen(true);
    const toggle = () => {
        setDropdownOpen((prevState) => !prevState);
        console.log(dropdownOpen)
    }
    const [filters, setFilters] = useState([]);
    const [ads, setAds] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0)
    const fetchAds = async () => {
        let result = await RequestsUtils.ads.getAds(page);
        setAds(result.result);

        // if (result.isDone) {
        //     setAds(result.result);
        // }
    }
    const fetchInitialData = async () => {
        setIsLoading(true);
        let result = await RequestsUtils.ads.filters();
        setFilters(result.result);
        // if (!result.isDone) {
        //     setFilters(result.result);
        //     console.log(result.result)
        // }
        await fetchAds();
        setIsLoading(false);
    }
    useEffect(() => {
        fetchInitialData();
    }, [])
    console.log(ads)
    // setUser(getCookie('user'));
  return (
    <>
      <FixedNavbar />
<div >

              <>

          {isLoading ? (
            <>

                </>
          ):(

              <div className="">
                  <div className="flex fixed top-20 w-full  py-3 shadow-lg  z-[45] overflow-x-auto  items-center align-middle bg-[rgb(243,243,243)]">
                      <div className="w-auto mx-2">
                          <Popover
                              open={dropdownOpen}
                              handler={toggle}
                              dismiss={{
                                  enabled: false,
                              }}
                              animate={{
                                  mount: { scale: 1, y: 5, x: -35 },
                                  unmount: { scale: 0, y: 0, x: 0 },
                              }}
                          >
                              <PopoverHandler>
                                  <Button className="sm:w-[150px] w-auto font-IranSans text-fontBlack font-medium flex shadow-lg mr-2 relative z-30 p-2 items-center text-sm rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary">
                                      <IconSax.CalendarSearch size="20" className="text-primary animate-pulse"  />
                                      <p className="mr-2">انتخاب تاریخ</p>
                                  </Button>
                              </PopoverHandler>
                              <PopoverContent className="z-[99] font-IranSans  rounded-xlarge shadow-lg  w-[600px] text-sm">
                                  <div className="block mt-2 flex flex-row align-middle items-center">
                                      <div className="w-2 h-10 rounded-l-lg bg-primary block"></div>
                                      <div className="mr-2 text-lg font-bold">انتخاب تاریخ</div>
                                  </div>
                                  <div className="p-4">
                                      <ConfigProvider locale={fa_IR} direction="rtl">
                                          <DatePickerJalali.RangePicker/>

                                      </ConfigProvider>
                                  </div>
                                  <div className="mt-8 mb-2 px-4 flex">
                                      <button
                                          onClick={() => toggle()}
                                          className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 mr-0 ml-auto"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>
                                      <button
                                          onClick={() => closeDate()}
                                          className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 ml-1"><IconSax.CloseCircle size="18" className="ml-2"/> بستن</button>
                                      <button
                                          onClick={() => closeDate()}
                                          className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 "><IconSax.SearchNormal1 size="18" className="ml-2"/> اعمال</button>

                                  </div>
                              </PopoverContent>
                          </Popover>
                      </div>







                      {filters.map(e => <FilterComponent title={e.name} icon={e.icon['path']} key={e.id} types={e.filters}/>)}


                  </div>
                  <section className="relative top-[145px] border-t left-0 right-0">
                      <div className="p-0 lg:grid lg:grid-cols-2">
                          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">

                              <AddPageComponent item={ads} key={ads.id}/>
                          </div>
                          <div>
                              <Map className="fixed top-0 w-full h-full sm:hidden md:hidden lg:block xl:block" center={marker1} zoom={12}>
                                  {({TileLayer, Marker, Popup}) => (
                                      <>
                                          <TileLayer
                                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                                          />
                                          <Marker position={marker1}>
                                              <Popup>
                                                  <div className="text-right w-[250px] rounded-xlarge">
                                                      <img src="/img/1.jpg" className="rounded-xlarge"
                                                           alt=""/>
                                                      <h3 className="mt-4 mb-1 text-lg text-primary font-IranSans">تابلوی خاص</h3>
                                                      <h4 className="text-sm mt-0 font-IranSans">پلکسی . 10 در 6 .
                                                          ثابت</h4>
                                                  </div>
                                              </Popup>
                                          </Marker>
                                          <Marker position={marker2}>
                                              <Popup>
                                                  <div className="text-right w-[250px] rounded-xlarge">
                                                      <img src="/img/2.jpg" className="rounded-xlarge"
                                                           alt=""/>
                                                      <h3 className="mt-8 mb-3 text-lg text-primary">تابلوی خاص</h3>
                                                      <h4 className="text-sm mt-0">پلکسی . 10 در 6 .
                                                          ثابت</h4>
                                                  </div>
                                              </Popup>
                                          </Marker>
                                      </>
                                  )}
                              </Map>
                          </div>
                      </div>
                  </section>

              </div>

          )}
          </>

</div>

    </>
  )
}
