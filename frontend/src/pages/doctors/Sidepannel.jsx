import React from 'react'

const Sidepannel = () => {
  return (
    <div className='shadow-panealShaow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text-para mt-0 font-semibold '>Token price</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold '>
                500 INR
            </span>
        </div>

        <div className='mt-[30px]'>
            <p className='text-para mt-0 font-semibold text-headingColor '>
                Available Time Slost: 
            </p>

            <ul className='mt-3'>
                <li className='flex items-center justify-between mb-2 '>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Sunday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 pm - 9:00 pm
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2 '>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Tuesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 pm - 9:00 pm
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2 '>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Wednesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        4:00 pm - 9:00 pm
                    </p>
                </li>
            </ul>
        </div>

        <button className='btn px-2 w-full rounded-md' >Book Appointment</button>
    </div>
  )
}

export default Sidepannel
 