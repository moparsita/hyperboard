import {useState} from "react";

function Register({
                      closeFunc,
                      submitHandler,
                      firstName,
                      lastName,
                      password,
                      changeFirstName,
                      changeLastName,
                      changePassword
                  }) {
    const [confirm, setConfirm] = useState();
    return (

        <>
            <div className="flex mb-5">
                <div className="col">
                    <h5>تکمیل ثبت نام</h5>
                </div>
                <button className="close-button top-4" tabIndex={0} onClick={closeFunc}>
                    <i className="icon-73"/>
                </button>
            </div>
            <form onSubmit={submitHandler}>
                <div id="form-input" className="grid grid-cols-2 gap-2">
                    <input
                        className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type={'text'}
                        placeholder="نام"
                        autoComplete="password"
                        spellCheck="false"
                        required
                        value={firstName}
                        onChange={(e) =>
                            changeFirstName(e.target.value)
                        }
                    />
                    <input
                        className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type={'text'}
                        placeholder="نام خانوادگی"
                        autoComplete="password"
                        spellCheck="false"
                        required
                        value={lastName}
                        onChange={(e) =>
                            changeLastName(e.target.value)
                        }
                    />
                    <input
                        className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type={'password'}
                        placeholder="کلمه عبور"
                        autoComplete="password"
                        spellCheck="false"
                        required
                        value={password}
                        onChange={(e) =>
                            changePassword(e.target.value)
                        }
                    />
                    <input
                        className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type={'password'}
                        placeholder="تکرار کلمه عبور"
                        autoComplete="password"
                        spellCheck="false"
                        required
                        value={confirm}
                        onChange={(e) =>
                            setConfirm(e.target.value)
                        }
                    />


                </div>
                <div className=" px-4 py-3 text-center mt-0">
                <button
                    type="submit"
                    className="bg-primary rounded-full border  px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-700 enabled:bg-primary"
                    tabIndex={0}
                    disabled={firstName.length < 3 || lastName.length < 3 || password.length < 4 || password !== confirm }
                >
                    ادامه
                </button>
                </div>
            </form>
        </>
    )
}

export default Register
