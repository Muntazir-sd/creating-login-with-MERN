import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

import { registerValidate } from '../helper/validate'
import { convertToBase64 } from '../helper/convert'

import Style from '../styles/Username.module.css'

export default function Register() {

  const [Files,newFiles] = useState()

  const formik = useFormik({
    initialValues : {
      email:"",
      username:"",
      password:""
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = await Object.assign(values,{profile: Files || ''})
      console.log(values)
    }
  })

  // *** formik doesn't support file upload so we need need to make this handler *** //
  const onUpload = async e =>{
    const base64 = await convertToBase64(e.target.files[0]);
    newFiles(base64)
  }
  
  return (
    <div className="container mx-auto">

    <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={Style.glass}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Happy to join you!
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
              <img src={Files || avatar} className={Style.profile_img} alt="avatar" />
              </label>

              <input onChange={onUpload} type="file" id='profile' name='profile'/>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input {...formik.getFieldProps('email')}type="email" className={Style.textbox} placeholder='Email*' />
              <input {...formik.getFieldProps('username')}type="password" className={Style.textbox} placeholder='Username*' />
              <input {...formik.getFieldProps('password')}type="password" className={Style.textbox} placeholder='Password*' />
              <button type='submit' className={Style.btn}>Register</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Already Register?<Link className="text-red-500" to="/login">Login Now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
