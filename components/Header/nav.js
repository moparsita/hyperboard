import React , { useEffect, useState, useCallback } from "react";
import * as IconSax from "iconsax-react";
import RightBar from "./rightBar";
import LoginModal from "../Modals/loginModal";
import Logo from "../../public/img/icon.png"
import { useCookies } from "react-cookie"
import { hasCookie , getCookie, setCookie, deleteCookie } from 'cookies-next';
export default function Navbar({ fixed }) {
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
    {position === "fixed" ? (
      <nav className="fixed top-0  py-3 mb-3 w-full z-0">
        <div className="container  mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
            >
              <div className="flex justify-between bg-slate-400/70 p-3 rounded">
              <button
              className="text-white cursor-pointer text-xl leading-none   focus:outline-none"
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
                  {
                      hasCookie('user') ? (
                          <button
                              className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-white hover:opacity-75"
                              onClick={() => setModalOpen(!modalOpen)}

                          >

                              <span className="ml-2">{JSON.parse(getCookie('user')).user.fullName}</span>
                          </button>
                      ) : (
                <button
                  className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-white hover:opacity-75"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  
                  <span className="ml-2">ورود / ثبت نام</span>
                </button>
                          )}
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">میزبان شوید</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">علاقه مندی ها</span>
                </a>
              </li>
              <li className="nav-item mr-auto ml-0">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2 bg-white px-2 py-1 rounded-xlarge"><img src={Logo.src} className="h-10" /></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
) : (
nav2 ? (
<>
<nav className="fixed -top-10 flex flex-wrap items-center justify-between px-2 py-3 mb-3 w-full z-50 bg-white shadow-lg transition-all ease-out  translate-y-10 duration-500">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none"
              type="button"
            >
              <div className="flex justify-between bg-slate-400/70 p-3 rounded">
              <button
              className="text-white cursor-pointer text-xl leading-none   focus:outline-none"
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
                <button
                  className="px-3 py-2 flex items-center text-base  font-bold leading-snug text-gray-700 hover:opacity-75"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  
                  <span className="ml-2">ورود / ثبت نام</span>
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-700 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">میزبان شوید</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-700 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">علاقه مندی ها</span>
                </a>
              </li>
              <li className="nav-item mr-auto ml-0">
                <a
                  className="px-3 py-2 flex items-center text-base font-bold leading-snug text-gray-700 hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2"><img src={Logo.src} className="h-10" /></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</>
) : (<>
<nav className="fixed  flex flex-wrap items-center justify-between px-2 py-3 mb-3 w-full z-50 bg-white shadow-lg transition-all ease-out  -translate-y-10 duration-500">
        
      </nav>
</>)
)}

        <RightBar rightBarOpen={navbarOpen} setRightBarOpen={setNavbarOpen} />
      
        <LoginModal open={modalOpen} setOpen={setModalOpen} />
        
        
    </>
  );
}