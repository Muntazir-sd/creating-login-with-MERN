import React from 'react'
import { Toaster } from 'react-hot-toast'

import Style from '../styles/Username.module.css'

export default function Recovery() {

  return (
    <div className="container mx-auto">

    <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={Style.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recovery</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover password.
            </span>
          </div>
          <form className='pt-20'>
            <div className="textbox flex flex-col items-center gap-6">
              <div className='input text-center'>
              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 digit OTP send to your email address.
              </span>
              <input type="password" className={Style.textbox} placeholder='Password' />
              </div>
              <button type='submit' className={Style.btn}>Let's Go</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Can't get OTP?<button className="text-red-500">Resend</button></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
