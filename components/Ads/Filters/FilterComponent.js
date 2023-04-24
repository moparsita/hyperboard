import * as IconSax from "iconsax-react";
import React  , {useState , useEffect} from "react";
import CheckBoxComponent from "../CheckBoxComponent";
import {DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Button, Popover, PopoverContent, PopoverHandler} from "@material-tailwind/react";
import {ConfigProvider} from "antd";
import fa_IR from "antd/lib/locale/fa_IR";
import {DatePicker as DatePickerJalali} from "antd-jalali";

export default function FilterComponent({id, title, icon, types=[], selectedFilter, setSelectedFilter, filter, setFilter, func}) {
    const [open, setOpen] = useState(-1);
    const [hash, setHash] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeDropdown = () => setDropdownOpen(false);
    const openDropdown = () => setDropdownOpen(true);
    const toggle = () => {
        setDropdownOpen((prevState) => !prevState);
        console.log(dropdownOpen)
    }
    const [checked, setChecked] = React.useState([24, 22]);
    const handleToggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };


    return (
        <div className="w-auto mx-2">
            <Popover
                open={dropdownOpen}
                handler={toggle}
                dismiss={{
                    enabled: true,
                }}
                animate={{
                    mount: { scale: 1, y: 5, x: -35 },
                    unmount: { scale: 0, y: 0, x: 0 },
                }}
            >
                <PopoverHandler>
                    <Button className="sm:w-[150px] font-IranSans text-fontBlack font-medium flex shadow-sm mr-2 relative z-30 p-2 items-center text-sm rounded-lg border border-fontBlack/20 hover:bg-gray-100 hover:text-primary">
                        <img src={icon} className="h-5"/> <span className="mr-2">{title}</span>
                    </Button>
                </PopoverHandler>
                <PopoverContent className="z-[99] font-IranSans  rounded-xlarge shadow-sm  w-[600px]  max-h-[700px] overflow-y-auto scrollbar-hide text-sm">
                    {types.map((filters, index) =>
                        <>

                            <div className="block mt-2 flex flex-row align-middle items-center">
                                <div className="w-2 -mr-4 h-10 rounded-l-lg bg-gray-900 block"/>
                                <h3 className="mr-2 text-lg font-bold">{filters.name}</h3>
                            </div>
                            <div className="p-1 grid grid-cols-2">

                                {/* eslint-disable-next-line react/jsx-key */}
                                {filters.items.map((e, index2) => <CheckBoxComponent
                                    title={e.name}
                                    value={e.id}
                                    // hash={filters[index]}
                                    // hash={filters[index].hash === 'string' && filters[index].hash.length > 0 ? filters[index].hash : e.hash === 'string' && e.hash.length > 0 ? e.hash : ''}
                                    selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} filter={filter} setFilter={setFilter} />)}

                            </div>


                        </>
                    )}
                    <div className="mt-8 mb-2 px-4 flex">
                        <button
                            onClick={() => closeDropdown()}
                            className="flex flex-row align-middle items-center shadow-sm text-white bg-primary rounded-lg px-4 py-1 mr-0 ml-auto"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>
                        <button
                            onClick={() => closeDropdown()}
                            className="flex flex-row align-middle items-center shadow-sm text-white bg-primary rounded-lg px-4 py-1 ml-1"><IconSax.CloseCircle size="18" className="ml-2"/> بستن</button>
                        <button
                            onClick={() => func()}
                            className="flex flex-row align-middle items-center shadow-sm text-white bg-primary rounded-lg px-4 py-1 "><IconSax.SearchNormal1 size="18" className="ml-2"/> اعمال</button>

                    </div>
                </PopoverContent>
            </Popover>
            {/*<UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} >*/}
            {/*    <DropdownToggle className="w-[150px] flex flex-row shadow-sm mr-2 relative p-2 items-center text-sm rounded-lg border border-fontBlack hover:bg-gray-100 hover:text-primary"*/}

            {/*                    id={"dropdownMenuButton" + id}*/}
            {/*                    type="button"*/}
            {/*    >*/}
            {/*        <img src={icon} className="h-5"/> <span className="mr-2">{title}</span>*/}
            {/*    </DropdownToggle>*/}
            {/*    <DropdownMenu className=" absolute z-10 inline-block  w-[600px] -translate-x-[2000px] text-sm  bg-white border border-primary rounded-xlarge shadow-sm"*/}
            {/*                  aria-labelledby={"dropdownMenuButton" + id}>*/}
            {/*        {types.map(filters => <>*/}
            {/*                <div className="block mt-2 flex flex-row align-middle items-center">*/}
            {/*                    <div className="w-2 h-10 rounded-l-lg bg-primary block"/>*/}
            {/*                    <h3 className="mr-2 text-lg font-bold">{filters.name}</h3>*/}
            {/*                </div>*/}
            {/*                <div className="p-4 grid grid-cols-2">*/}

            {/*                    /!* eslint-disable-next-line react/jsx-key *!/*/}
            {/*                    {filters.items.map(e => <CheckBoxComponent title={e.name} value={e.id} />)}*/}

            {/*                </div>*/}
            {/*            */}

            {/*            </>*/}
            {/*        )}*/}
            {/*        <div className="mt-8 mb-2 px-4 flex">*/}
            {/*            <button*/}
            {/*                onClick={() => closeDropdown()}*/}
            {/*                className="flex flex-row align-middle items-center shadow-sm text-white bg-primary rounded-lg px-4 py-1 mr-0 ml-auto"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>*/}
            {/*            <button*/}
            {/*                onClick={() => closeDropdown()}*/}
            {/*                className="flex flex-row align-middle items-center shadow-sm text-white bg-primary rounded-lg px-4 py-1 ml-1"><IconSax.CloseCircle size="18" className="ml-2"/> بستن</button>*/}
            {/*            <button*/}
            {/*                onClick={() => closeDropdown()}*/}
            {/*                className="flex flex-row align-middle items-center shadow-sm text-white bg-primary rounded-lg px-4 py-1 "><IconSax.SearchNormal1 size="18" className="ml-2"/> اعمال</button>*/}

            {/*        </div>*/}
            {/*    </DropdownMenu>*/}
            {/*</UncontrolledDropdown>*/}
        </div>
    )

}


