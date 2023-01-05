import * as IconSax from "iconsax-react";
import React  , {useState} from "react";
import CheckBoxComponent from "../CheckBoxComponent";
import {DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";

export default function FilterComponent({id, title, icon, types=[]}) {
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
        <>
            <UncontrolledDropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle className="w-[150px] flex shadow-lg mr-2 relative p-2 items-center text-sm rounded-lg border border-purple-400 hover:bg-gray-100 hover:text-primary"

                                color=""
                                id="dropdownMenuButton"
                                type="button"
                >
                    <img src={icon} className="h-5"/> <span className="mr-2">{title}</span>
                </DropdownToggle>
                <DropdownMenu className="absolute invisible m-2 z-10 inline-block hidden w-[600px] text-sm translate-y-3 transition-opacity duration-300 bg-white border border-primary rounded-xlarge shadow-lg"
                              aria-labelledby="dropdownMenuButton">
                    {types.map(filters => <>
                            <div className="block mt-2 flex flex-row align-middle items-center">
                                <div className="w-2 h-10 rounded-l-lg bg-primary block"/>
                                <h3 className="mr-2 text-lg font-bold">{filters.name}</h3>
                            </div>
                            <div className="p-4 grid grid-cols-2">

                                {/* eslint-disable-next-line react/jsx-key */}
                                {filters.items.map(e => <CheckBoxComponent title={e.name} value={e.id} />)}

                            </div>
                            <div className="my-8 px-4">
                                <button
                                    onClick={() => closeDropdown()}
                                    className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1"><IconSax.Trash size="18" className="ml-2"/> پاک کردن</button>
                                <button
                                    onClick={() => closeDropdown()}
                                    className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 ml-1"><IconSax.CloseCircle size="18" className="ml-2"/> بستن</button>
                                <button
                                    onClick={() => closeDropdown()}
                                    className="flex flex-row align-middle items-center text-white bg-primary rounded-lg px-4 py-1 "><IconSax.SearchNormal1 size="18" className="ml-2"/> اعمال</button>

                            </div>

                        </>
                    )}
                </DropdownMenu>
            </UncontrolledDropdown>
        </>
    )

}