function SignIn({ closeFunc, submitHandler, num, changeNumber }) {
  return (
    <>
      <div className="d-flex">
        <div className="col">
          <h3 className='text-primary'>ورود / ثبت‌نام</h3>
          <p className='text-sm'>برای ورود یا ثبت‌نام، شماره همراه خود را وارد کنید</p>
        </div>
        <button className="close-button" onClick={closeFunc}>
          <i className="icon-73" />
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div id="form-input">
          <input
              className="block rounded-large px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900  border  border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            type={'tel'}
            placeholder="شماره همراه"
            maxLength="10"
            minLength="10"
            autoComplete="username mobile"
            spellCheck="false"
            required
            value={num}
            dir={num === '' ? 'rtl' : 'ltr'}
            onChange={(e) => {
              if(e.target.value.charAt(0) === '0') {
                  e.target.value = e.target.value.slice(1)
              }

              !isNaN(e.target.value) && changeNumber(e.target.value)
            }
            }
          />
        </div>
          <div className=" px-4 py-3 text-center mt-3">
        <button
          type="submit"
          className="bg-primary rounded-full border  px-8 py-2 text-lg font-bold text-white shadow-sm hover:bg-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm disabled:bg-gray-700 enabled:bg-primary"
          disabled={num.length < 10}
        >
          ادامه
        </button>
          </div>
      </form>
    </>
  )
}

export default SignIn
