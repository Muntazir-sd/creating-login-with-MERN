import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'

import { profileValidate } from '../helper/validate'
import { convertToBase64 } from '../helper/convert'

import Style from '../styles/Username.module.css'
import extend from '../styles/profile.module.css'

export default function Profile() {

  const [Files, newFiles] = useState()

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      mobile: "",
      email: "",
      address: ""
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values, { profile: Files || '' })
      console.log(values)
    }
  })

  // *** formik doesn't support file upload so we need need to make this handler *** //
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    newFiles(base64)
  }

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={`${Style.glass} ${extend.glass}`}>
          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Profile</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              You can update the details.
            </span>
          </div>
          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
                <img src={Files || avatar} className={`${Style.profile_img} ${extend.profile_img}`} alt="avatar" />
              </label>

              <input onChange={onUpload} type="file" id='profile' name='profile' />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('firstName')} type="text" className={`${Style.textbox} ${extend.textbox}`} placeholder='First name' />
                <input {...formik.getFieldProps('lastName')} type="text" className={`${Style.textbox} ${extend.textbox}`} placeholder='Last name' />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('mobile')} type="text" className={`${Style.textbox} ${extend.textbox}`} placeholder='Mobile No.' />
                <input {...formik.getFieldProps('email')} type="text" className={`${Style.textbox} ${extend.textbox}`} placeholder='Email*' />
              </div>
              <div className="name flex w-3/4 gap-10">
                <input {...formik.getFieldProps('address')} type="text" className={`${Style.textbox} ${extend.address_box}`} placeholder='Address' />
              </div>

              <button type='submit' className={Style.btn}>Update</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Come Back Later?<Link className="text-red-500" to="/login">Logout</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
