
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

              <div className="container m-auto ">
                  <section className="flex fixed relative top-20 right-0 px-14 md:px-5 py-3 shadow-lg mb-10 z-20  items-center align-middle bg-[rgb(243,243,243)] overflow-auto">
                      <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} {...props}>
                          <DropdownToggle className="w-[150px] flex shadow-lg mr-2 relative p-2 items-center text-sm rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary"

                                          color=""
                                          id="dropdownMenuButton"
                                          type="button"
                          >
                              <IconSax.CalendarSearch size="20" className="text-primary animate-pulse"  />
                              <p className="mr-2">انتخاب تاریخ</p>
                          </DropdownToggle>

                          <DropdownMenu

                                        className="absolute hidden m-2 inline-block w-[600px] text-sm translate-y-3 transition-opacity duration-300 bg-white border border-primary rounded-xlarge shadow-lg"
                                        aria-labelledby="dropdownMenuButton">
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
                                      onClick={() => closeDate()}
                                      className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 mr-0 ml-auto"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>
                                  <button
                                      onClick={() => closeDate()}
                                      className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 ml-1"><IconSax.CloseCircle size="18" className="ml-2"/> بستن</button>
                                  <button
                                      onClick={() => closeDate()}
                                      className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 "><IconSax.SearchNormal1 size="18" className="ml-2"/> اعمال</button>

                              </div>
                          </DropdownMenu>
                      </UncontrolledDropdown>





                      {/*<button*/}
                      {/*    data-popover-target="datacal"*/}
                      {/*    data-popover-trigger="click"*/}
                      {/*    data-popover-placement="bottom"*/}
                      {/*    data-popover-offset="10"*/}
                      {/*    type="button"*/}
                      {/*    className="flex shadow-lg mr-2 relative p-2 items-center text-sm rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary">*/}
                      {/*    <IconSax.CalendarSearch size="20" className="text-primary animate-pulse"  />*/}
                      {/*    <p className="mr-2">انتخاب تاریخ</p>*/}
                      {/*</button>*/}
                      {/*<div data-popover id="datacal" role="tooltip"*/}
                      {/*     className="absolute m-20 z-10 invisible inline-block w-[700px] text-sm transition-opacity duration-300 bg-transparent opacity-0 ">*/}

                      {/*    <div className="py-2 w-[600px] m-auto bg-white border border-primary rounded-xlarge shadow-lg">*/}
                      {/*        <div className="block mt-2 flex flex-row align-middle items-center">*/}
                      {/*            <div className="w-2 h-10 rounded-l-lg bg-primary block"></div>*/}
                      {/*            <h3 className="mr-2 text-lg font-bold">عنوان</h3>*/}
                      {/*        </div>*/}
                      {/*        <div className="p-4 grid grid-cols-2">*/}
                      {/*            <div className="flex items-center mr-4 mb-5 pb-2 border-b border-primary/40">*/}
                      {/*                <input  id="checkbox1" type="checkbox" value=""*/}
                      {/*                        className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded-md " />*/}
                      {/*                <label htmlFor="checkbox1"*/}
                      {/*                       className="mr-2 text-sm font-medium text-gray-900 ">Purple</label>*/}
                      {/*            </div>*/}

                      {/*            <div className="flex items-center mr-4 mb-5 pb-2 border-b border-primary/40">*/}
                      {/*                <input  id="checkbox2" type="checkbox" value=""*/}
                      {/*                        className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded-md " />*/}
                      {/*                <label htmlFor="checkbox2"*/}
                      {/*                       className="mr-2 text-sm font-medium text-gray-900 ">Purple</label>*/}
                      {/*            </div>*/}

                      {/*            <div className="flex items-center mr-4 mb-5 pb-2 border-b border-primary/40">*/}
                      {/*                <input  id="checkbox3" type="checkbox" value=""*/}
                      {/*                        className="w-6 h-6 text-purple-600 bg-gray-100 border-gray-300 rounded-md " />*/}
                      {/*                <label htmlFor="checkbox3"*/}
                      {/*                       className="mr-2 text-sm font-medium text-gray-900 ">Purple</label>*/}
                      {/*            </div>*/}


                      {/*        </div>*/}
                      {/*        <div className="mt-8 px-4">*/}
                      {/*            <button className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>*/}

                      {/*        </div>*/}
                      {/*    </div>*/}

                      {/*</div>*/}


                      {filters.map(e => <FilterComponent title={e.name} icon={e.icon['path']}  types={e.filters}/>)}


                  </section>
                  <section className="mt-24 border-t left-0 right-0">
                      <div className="p-0 lg:grid lg:grid-cols-2">
                          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-1">
                              <AddPageComponent item={ads}/>
                          </div>
                          <div>
                              <Map className="w-full h-full sm:hidden md:hidden" center={marker1} zoom={12}>
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
