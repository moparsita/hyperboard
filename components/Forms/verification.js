import Otp from './Otp'
import * as IconSax from "iconsax-react";

function Verification({
  num,
  closeFunc,
  submitHandler,
  changeCode,
  enteredCode,
}) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex">
            <h5>{'98' + num + '+'}</h5>
            <button className="bg-green mr-2 p-1 rounded-lg text-[10px] text-white" tabIndex={-1}>
              <IconSax.Edit size={15} color={'white'} />
            </button>
          </div>
          <p>کد فعالسازی به شماره موبایل شما پیامک شد</p>
        </div>
        <button className="close-button" tabIndex={0} onClick={closeFunc}>
          <i className="icon-73" />
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div id="form-input">
          <div className="otp-part">
            <p className="text-sm mt-4">کد فعالسازی را وارد کنید</p>
            <Otp func={changeCode} />
          </div>
          <div className="pt-5 flex flex-row align-items-center justify-content-between">
            <p className="m-0 text-sm">کد را دریافت نکردید؟</p>
            <button className="bg-orange-800 mr-2 px-2 rounded-lg text-[10px] text-white" tabIndex={-1}>
              ارسال دوباره کد
            </button>
          </div>
        </div>
        <div className=" px-4 py-3 text-center mt-3">
        <button
          type="submit"
          className="bg-primary rounded-full border  px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-700 enabled:bg-primary"
          tabIndex={0}
          disabled={enteredCode.length < 4}
        >
          ادامه
        </button>
        </div>
      </form>
    </>
  )
}

export default Verification
