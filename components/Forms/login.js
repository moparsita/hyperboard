import Otp from './Otp'
import * as IconSax from "iconsax-react";
function Login({closeFunc, submitHandler, num, password, changePassword, editNumber, error = ''}
) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <h5>{'98' + num + '+'}</h5>
            <button className="bg-green mr-2 p-1 rounded-lg text-[10px] text-white" tabIndex={-1} onClick={editNumber}>
              <IconSax.Edit size={15} color={'white'} />
            </button>
          </div>
        </div>
        <button className="close-button" tabIndex={0} onClick={closeFunc}>
          <i className="icon-73" />
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div id="form-input">
            <p className="text-sm mt-4">کلمه عبور را وارد کنید</p>
            <span className="m-4 text-danger">{error}</span>

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
          <div className="pt-5 flex flex-row align-items-center justify-content-between">
            <p className="m-0 text-sm">کلمه عبور را فراموش کرده اید؟</p>
            <button className="bg-orange-800 mr-2 px-2 rounded-lg text-[10px] text-white" tabIndex={-1}>
              درخواست رمز عبور
            </button>
          </div>
        </div>
          <div className=" px-4 py-3 text-center mt-3">
              <button
                  type="submit"
                  className="bg-primary rounded-full border  px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-700 enabled:bg-primary"

                  tabIndex={0}
          disabled={password.length < 4}
        >
          ادامه
        </button>
          </div>
      </form>
    </>
  )
}

export default Login
