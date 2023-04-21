import React , { useEffect, useState, useCallback } from "react";
import * as IconSax from "iconsax-react";
import RightBar from "./rightBar";
import LoginModal from "../Modals/loginModal";
import Logo from "../../public/img/icon.png"
import { useCookies } from "react-cookie"
import { hasCookie , getCookie, setCookie, deleteCookie } from 'cookies-next';
export default function FixedNavbar({ fixed , full=true }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [position, setPosition] = useState("fixed");
  const [nav2, setNav2] = useState(false);

  const [y, setY] = useState();
const handleNavigation = useCallback(
  e => {
    setNavbarOpen(navbarOpen);
    const window = e.currentTarget;
    if(y>680) {
      setPosition("");
    }
    else{
      setPosition("fixed");
    }
    if (y > window.scrollY) {
      setNav2(true)
    } else if (y < window.scrollY) {
      setNav2(false)
    }
    setY(window.scrollY);
    
  }, [y]
);

useEffect(() => {
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);
  
  return (
    <>

      <nav className={navbarOpen ? "hidden" : "fixed" + " top-0  p-3 mb-3 w-full z-50 bg-white shadow-lg"}>
        <div className={full ? "mx-auto flex flex-wrap items-center justify-between" : "container m-auto flex flex-wrap items-center justify-between"}>
          <div className="w-auto relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded  block outline-none focus:outline-none text-gray-800"

            >
              <div className="flex justify-between bg-slate-400/70 p-2 rounded">
              <button
              className="cursor-pointer text-xl leading-none   focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <IconSax.HambergerMenu className="ml-2"  />
                </button>
                <IconSax.User />
                </div>
              
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto w-full">

              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-500 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">اعلانات</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-500 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">رزروها</span>
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-500 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">تابلوها</span>
                </a>
              </li>
                <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-500 hover:opacity-75"
                  href="#pablo"
                >
                    <IconSax.Headphone />
                </a>
              </li>
              <li className="nav-item w-96">
                <div className="relative">
                  <input
                      type="text"
                      id="mobileNumber"
                      placeholder="دنبال چی میگردی؟"
                      className="block rounded-full px-2.5 pb-2.5 pt-3 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <div className="absolute top-1 left-1">

                    <button
                        onClick={(e) => submitForm()}
                        className=" bg-primary rounded-full p-2.5 hover:bg-red-600"
                    ><IconSax.SearchNormal1 size="16" className="  text-white" />

                    </button>

                  </div>
                </div>
              </li>

            </ul>

          </div>
          <div className="nav-item mr-auto ml-0">
            <a
                className="px-3 py-2 flex items-center text-base font-bold leading-snug  hover:opacity-75"
                href="#pablo"
            >
              <span className="ml-2"><img src={Logo.src} className="h-10" /></span>
            </a>
          </div>
        </div>
      </nav>


        <RightBar rightBarOpen={navbarOpen} setRightBarOpen={setNavbarOpen} />
      
        <LoginModal open={modalOpen} setOpen={setModalOpen} />
        
        
    </>
  );
}