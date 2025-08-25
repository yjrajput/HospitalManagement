import React, { useState } from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) =>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <section className='px-5 lg:px-0'>
      <div className='w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10'>
        <h3 className='text-headingColor text-[22px] leading-9 font-bold md-10 '>
            Hello! <span className='text-primaryColor'>Welcome</span> Back 🎉
        </h3>

        <form className='py-4 md:py-0'>
            <div className='mb-5'>
              <input type="email"  placeholder='Enter your email' name='email' value={formData.email} onChange={handleOnChange}
              className='w-full px-4 py-3 text-[16px] border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer' required
              />
            </div>
            <div className='mb-5'>
              <input type="password"  placeholder='password' name='password' value={formData.password} onChange={handleOnChange}
              className='w-full px-4 py-3 text-[16px] border-b border-solid border-[#0066ff61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer' required
              />
            </div>

            <div className='mt-7'>
              <button className='w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3'>Login</button>
            </div>

            <p className='mt-5 text-textColor text-center '>
                Don't have any account? <Link to='/register' className='text-primaryColor font-medium'>Register</Link>
            </p>
        </form>
      </div>
    </section>
  )
}

export default Login
