
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
    Button, Checkbox, Radio
} from "@material-tailwind/react";
import Map from '../components/Map';
import {useRouter} from "next/router";
import CircularLoading from "../components/Loadings/CircularLoading";
const marker1 = [35.85, 50.96]
const marker2 = [34.85, 51.96]

export default function Ads(props) {
    const router = useRouter();
    const [user, setUser] = useState({})
const submitForm = () => {
  // window.location = '/ads'
}
    const [dateRange, setDateRange] = useState([]);
    const handleDateChange = (dates) => {
        setDateRange(dates);
    };
    const {...rest} = props;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [rangeOpen, setRangeOpen] = useState(false);
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [selectedEnabled, setSelectedEnabled] = React.useState("b");
    const closeDate = () => setDropdownOpen(false);
    const openDate = () => setDropdownOpen(true);
    const toggle = () => {
        setDropdownOpen((prevState) => !prevState);
    }
    const toggleFilters = () => {
        setFiltersOpen((prevState) => !prevState);
    }
    const rangeToggle = () => {
        setRangeOpen((prevState) => !prevState);
    }
    const [filters, setFilters] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [ads, setAds] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(0)
    const fetchAds = async () => {
        setIsLoading(true);

        let result = await RequestsUtils.ads.getAds(page, router.query.query ?? router.query.query, router.query.cityId ?? router.query.cityId, JSON.stringify(selectedFilters));
        setAds(result.result);
        setIsLoading(false);
        // if (result.isDone) {
        //     setAds(result.result);
        // }
    }
    const submitFilter = (value) => {
        setSelectedEnabled(value);
        setFiltersOpen(false)
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
        fetchInitialData().then(r => {});

    }, [])

    // setUser(getCookie('hyperboard_user'));
  return (
    <>
      <FixedNavbar full={true} />
<div >

              <>

          {isLoading ? (
<CircularLoading />
          ):(

              <div className="bg-[rgb(243,243,243)]">
                  <div className="flex fixed top-20 w-full  py-3 shadow-sm  z-[45] overflow-x-auto scrollbar-hide  items-center align-middle bg-[rgb(243,243,243)]">
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
                                  <Button className=" font-IranSans text-fontBlack font-medium flex shadow-sm mr-2 relative z-30 p-2 items-center text-sm rounded-lg border border-fontBlack/20 hover:bg-gray-100 hover:text-primary">
                                      <IconSax.CalendarSearch size="20" className="text-gray-700 animate-pulse"  />
                                      <p className="mr-2">انتخاب تاریخ</p>
                                  </Button>
                              </PopoverHandler>
                              <PopoverContent className="z-[99] font-IranSans  rounded-xlarge shadow-sm  w-[600px] text-sm">
                                  <div className="block mt-2 flex flex-row align-middle items-center">
                                      <div className="w-2 h-10 rounded-l-lg bg-fontBlack block"></div>
                                      <div className="mr-2 text-lg font-bold">انتخاب تاریخ</div>
                                  </div>
                                  <div className="p-4">
                                      <ConfigProvider locale={fa_IR} direction="rtl">
                                          <DatePickerJalali.RangePicker onChange={handleDateChange}/>
                                      </ConfigProvider>
                                  </div>
                                  <div className="mt-8 mb-2 px-4 flex">
                                      <button
                                          onClick={() => toggle()}
                                          className="flex flex-row align-middle items-center border border-gray text-white bg-gray-700 rounded-lg px-4 py-1 mr-0 ml-auto"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>
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
                      <div className="w-auto mx-2">
                          <Popover
                              open={rangeOpen}
                              handler={rangeToggle}
                              dismiss={{
                                  enabled: true,
                              }}
                              animate={{
                                  mount: { scale: 1, y: 5, x: -35 },
                                  unmount: { scale: 0, y: 0, x: 0 },
                              }}
                          >
                              <PopoverHandler>
                                  <Button className="sm:w-[150px] w-auto font-IranSans text-fontBlack font-medium flex shadow-sm mr-2 relative z-30 p-2 items-center text-sm rounded-lg border border-fontBlack/20 hover:bg-gray-100 hover:text-primary">
                                      <IconSax.Moneys size="20" className="text-gray-700 animate-pulse"  />
                                      <p className="mr-2">محدوده قیمت</p>
                                  </Button>
                              </PopoverHandler>
                              <PopoverContent className="z-[99] font-IranSans  rounded-xlarge shadow-sm  w-[600px] text-sm">
                                  <div className="block mt-2 flex flex-row align-middle items-center">
                                      <div className="w-2 h-10 rounded-l-lg bg-primary block"></div>
                                      <div className="mr-2 text-lg font-bold">محدوده قیمت</div>
                                  </div>
                                  <div className="p-4">
                                      <div className="relative pt-1">
                                          <input
                                              type="range"
                                              className="
                                                      form-range
                                                      appearance-none
                                                      w-full
                                                      h-6
                                                      p-0
                                                      bg-transparent
                                                      text-primary
                                                      focus:outline-none focus:ring-0 focus:shadow-none
                                                    "
                                              min="1000000"
                                              max="100000000"
                                              step="500000"
                                              id="customRange3"
                                          />
                                      </div>
                                  </div>
                                  <div className="mt-8 mb-2 px-4 flex">
                                      <button
                                          onClick={() => rangeToggle()}
                                          className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 mr-0 ml-auto"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>
                                      <button
                                          onClick={() => rangeToggle()}
                                          className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 ml-1"><IconSax.CloseCircle size="18" className="ml-2"/> بستن</button>
                                      <button
                                          onClick={() => rangeToggle()}
                                          className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 "><IconSax.SearchNormal1 size="18" className="ml-2"/> اعمال</button>

                                  </div>
                              </PopoverContent>
                          </Popover>
                      </div>
                      {filters.map(e => <FilterComponent title={e.name} icon={e.icon['path']} key={e.id} types={e.filters} filter={filters} setFilter={setFilters} selectedFilter={selectedFilters} setSelectedFilter={setSelectedFilters} func={fetchInitialData}/>)}
                  </div>
                  <section className="relative top-[145px]  rounded-t-[20px] bg-white left-0 right-0">
                      <div className="p-0 lg:grid lg:grid-cols-2">
                          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
                              <div className="flex flex-col  col-span-2 w-full shadow-sm p-8">
                                  <div className="flex flex-row justify-between items-center w-full">
                                  <h3>اجاره تابلو</h3>
                                  <Popover
                                      placement="bottom"
                                      open={filtersOpen}
                                      handler={toggleFilters}
                                      dismiss={{
                                          enabled: true,
                                      }}
                                      animate={{
                                          mount: { scale: 1, y: 5 },
                                          unmount: { scale: 0, y: 0 },
                                      }}
                                  >
                                      <PopoverHandler>
                                          <Button className="sm:w-[150px] w-auto font-IranSans text-fontBlack font-medium flex shadow-sm mr-2 relative z-30 p-2 items-center text-sm rounded-lg border border-fontBlack hover:bg-gray-100 hover:text-primary">
                                              <IconSax.Filter size="20" className="text-gray-700 animate-pulse"  />
                                              <p className="mr-2">مرتب سازی</p>
                                          </Button>
                                      </PopoverHandler>
                                      <PopoverContent className="z-[44] font-IranSans  rounded-xlarge shadow-sm pr-0 text-sm sm:w-[150px] border border-fontBlack">

                                          <div className="p-0 flex flex-col justify-between items-start">
                                              <Radio color="purple" label="ارزانترین" name="filter" value={1} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 1}
                                                     onChange={() => submitFilter(1)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>

                                              <Radio color="purple" label="گرانترین" name="filter" value={2} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 2}
                                                     onChange={() => submitFilter(2)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>

                                              <Radio color="purple" label="محبوب ترین" name="filter" value={3} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 3}
                                                     onChange={() => submitFilter(3)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>

                                              <Radio color="purple" label="پرسفارش ترین" name="filter" value={4} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 4}
                                                     onChange={() => submitFilter(4)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>

                                              <Radio color="purple" label="جدیدترین" name="filter" value={5} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 5}
                                                     onChange={() => submitFilter(5)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>

                                              <Radio color="purple" label="کوچکترین" name="filter" value={6} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 6}
                                                     onChange={() => submitFilter(6)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>

                                              <Radio color="purple" label="بزرگترین" name="filter" value={7} ripple={true} className="w-6 h-6 border-primary"
                                                     checked={selectedEnabled === 7}
                                                     onChange={() => submitFilter(7)}
                                                     icon={
                                                         <svg
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             className="h-3 w-3"
                                                             viewBox="0 0 20 20"
                                                             fill="currentColor"
                                                         >
                                                             <path
                                                                 fillRule="evenodd"
                                                                 d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                 clipRule="evenodd"
                                                             />
                                                         </svg>
                                                     }/>
                                          </div>

                                      </PopoverContent>
                                  </Popover>
                                  </div>

                              <div className="w-full">

                              </div>
                              </div>
                              <AddPageComponent item={ads} key={ads.id}/>
                          </div>
                          <div>
                              <Map className="fixed top-0 left-0 w-1/2 h-full sm:hidden md:hidden lg:block xl:block rounded-tl-[20px]" center={marker1} zoom={12}>
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
