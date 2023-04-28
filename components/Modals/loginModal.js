import {Fragment, useEffect, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import RequestsUtils from '../../utils/RequestsUtils'
import * as IconSax from "iconsax-react";
import { useCookies } from "react-cookie"
import userData from '../../data/userData.json';
import {getCookie, setCookie, deleteCookie, hasCookie} from 'cookies-next';
import SignIn from "../Forms/SignIn";
import Login from "../Forms/login";
import Verification from "../Forms/verification";
import Register from "../Forms/register";
export default function LoginModal({open, setOpen}) {
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState();
  const [title, setTitle] = useState('برای ورود یا ثبت نام شماره همراه خود را وارد کنید');
  const [userMobile, setUserMobile] = useState();


    const [signed, setSigned] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [number, setNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [step, setStep] = useState('init');
    const [code, setCode] = useState("");
    const [error, setError] = useState("");

    const editNumber = () => {
        setNumber('');
        setError('');
        setStep('init');
    };

    const init = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(number)
        let result = await RequestsUtils.auth.init(number);
        if (result && result.isDone) {
            if(result.result.type === 'register'){
                setStep('validate')
            } else {
                setStep('login')
            }

            setIsLoading(false);
        }
    }

    const login = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let result = await RequestsUtils.auth.login(number, password);
        console.log(result.result)
        if (result && result.isDone) {
            setCookie("hyperboard_token", JSON.stringify(result.result.token));
            setCookie("hyperboard_user", JSON.stringify(result.result.user));
            setSigned(true);
            setError('');
            setOpen(false)
            // window.location.reload()
            setIsLoading(false);
        } else {
            setError('کلمه عبور وارد شده اشتباه است. دوباره تلاش کنید')
        }

    };

    const register = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        let result = await RequestsUtils.auth.register(firstName, lastName, password, code, number);
        if (result && result.isDone) {
            setCookie("hyperboard_token", JSON.stringify(result.result.token));
            setCookie("hyperboard_user", JSON.stringify(result.result.user));
            setSigned(true);
            setOpen()
            setIsLoading(false);
        }

    };

    const validate = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        let result = await RequestsUtils.auth.validate(number, code);
        if (result && result.isDone) {
            setStep(result.result.type)
            setIsLoading(false);
        }

    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
        if (getCookie('hyperboard_user') !== '') setSigned(true)
    });
  const cancelButtonRef = useRef(null)
    const logout = () => {
      // deleteCookie('hyperboard_user');
      setOpen(false)
    }
  return (

    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-80"
              enterTo="opacity-100 -translate-y-20 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 -translate-y-20 sm:scale-100"
              leaveTo="opacity-0 -translate-y-12 sm:translate-y-0 sm:scale-95"
            >
              <button
              className="relative text-white cursor-pointer text-xl leading-none -top-12 -left-[518px]  focus:outline-none overflow-visible"
              role="button"
              onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
            >
                <XMarkIcon className='h-6 w-6' />
                </button>
              </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-y-40 scale-20"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-40"
            >

              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-right shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                { isLoading ? (
                  <>

<div role="status" className='text-center w-full flex justify-center p-12'>
    <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

                  </>
                ) : (
                    hasCookie('hyperboard_user') ? (
                        <>
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <h3>{JSON.parse(getCookie('hyperboard_user')).fullName}</h3>
                        </div>
                            <div className=" px-4 py-3 text-center ">

                                <button
                                    role="submit"
                                    className=" rounded-full border bg-purple-700 px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-purple-900 f focus:bg-purple-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => window.location.href = '/host' }
                                >
                                    ادامه
                                </button>
                            </div></>
                        ) : (
                  <>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
{/*                <form>*/}
{/*                    {userMobile ? (*/}
{/*                        <>*/}
{/*                            <div className="mt-3">*/}
{/*                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">*/}
{/*                                    ورود / ثبت نام*/}
{/*                                </Dialog.Title>*/}
{/*                                <div className="mt-2">*/}
{/*                                    <p className="text-sm text-gray-500">*/}
{/*                                        {title}*/}
{/*                                    </p>*/}

{/*                                    <div className="relative mt-3" id="mobile">*/}

{/*                                        <input*/}
{/*                                            type="text"*/}
{/*                                            id="mobileNumber"*/}
{/*                                            disabled*/}
{/*                                            className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
{/*                                            placeholder="+98"*/}
{/*                                            dir='ltr'*/}
{/*                                            value={userMobile}*/}
{/*                                        />*/}
{/*                                        <div className="absolute top-0 right-2">*/}

{/*                                            <button*/}
{/*                                                className="h-10 w-20 text-green rounded-lg bg-red-500 hover:bg-red-600"*/}
{/*                                                onClick={() => setUserMobile('') }><IconSax.TickSquare />*/}

{/*                                            </button>*/}

{/*                                        </div>*/}
{/*                                        <input*/}
{/*                                            type="text"*/}
{/*                                            id="password"*/}
{/*                                            required*/}
{/*                                            placeholder="رمز عبور"*/}
{/*                                            className="block rounded-large mt-2 px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
{/*                                            onChange={(e) => setPassword(e.target.value)}*/}
{/*                                        />*/}


{/*                                    </div>*/}
{/*                                </div>*/}
{/*                            </div>*/}
{/*                        </>*/}
{/*                    ) : (*/}
{/*                        <>*/}
{/*                    <div className="mt-3">*/}
{/*                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">*/}
{/*                        ورود / ثبت نام*/}
{/*                      </Dialog.Title>*/}
{/*                      <div className="mt-2">*/}
{/*                        <p className="text-sm text-gray-500">*/}
{/*                            {title}*/}
{/*                        </p>*/}

{/*<div className="relative mt-3" id="mobile">*/}

{/*    <input*/}
{/*        type="text"*/}
{/*        id="mobileNumber"*/}
{/*        required*/}
{/*        className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
{/*        dir='ltr'*/}
{/*        placeholder="+98"*/}
{/*        value={mobile}*/}
{/*        onChange={(e) => setMobile(e.target.value)}*/}
{/*         />*/}
{/*    <label for="mobileNumber" className="absolute px-1 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-0 scale-85 bg-white top-2 z-10 origin-[0] right-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">شماره همراه</label>*/}

{/*    </div>*/}


{/*                      </div>*/}
{/*                    </div>*/}
{/*                        </>*/}
{/*                    )}*/}
{/*                </form>*/}
                      {step === 'init' ? (
                          <SignIn
                              submitHandler={init}
                              closeFunc={setOpen}
                              num={number}
                              changeNumber={setNumber}
                          />
                      ) : step === 'login' ? (
                          <Login
                              submitHandler={login}
                              closeFunc={setOpen}
                              editNumber={editNumber}
                              num={number}
                              password={password}
                              error={error}
                              changePassword={setPassword}
                          />
                      ) : step === 'validate' ? (
                              <Verification
                                  submitHandler={validate}
                                  closeFunc={setOpen}
                                  num={number}
                                  changeCode={setCode}
                                  enteredCode={code}
                              />
                          ) :
                          <Register
                              submitHandler={register}
                              closeFunc={setOpen}
                              editNumber={editNumber}
                              firstName={firstName}
                              lastName={lastName}
                              password={password}
                              changePassword={setPassword}
                              changeFirstName={setFirstName}
                              changeLastName={setLastName}
                          />}
                </div>

                </>
                    )
                )}

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
