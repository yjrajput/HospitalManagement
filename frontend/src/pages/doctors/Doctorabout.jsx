import React from 'react'
import { FormatDate } from '../../utils/FormateDate'
const Doctorabout = () => {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                <span className='text-iresBlurColor font-bold text-[24px] leading-9'>
                    Yuvraj Rathore
                </span>
            </h3>
            <p className='text-para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga illo necessitatibus sint ea quaerat rem in. Numquam quos mollitia tempora quae fugiat! Aspernatur sint obcaecati inventore fugiat in modi ut laborum eveniet itaque tenetur quos molestias ratione, nisi cum quo provident animi tempora, dolorum, debitis enim amet ipsa. Provident, ut!
            </p>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Education
            </h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-iresBlurColor text-[15px] leading-6 font-semibold'>
                            {FormatDate("2022-08-24")} - {FormatDate("2022-08-24")}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                        
                    </div>
                    <p className='text-[16px] leading-5 font-medium text-textColor'>
                            New Apollo Hospital, Indore
                    </p>

                </li>

                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-iresBlurColor text-[15px] leading-6 font-semibold'>
                            {FormatDate("2025-08-24")} - {FormatDate("2025-08-24")}
                        </span>
                        <p className='text-[15px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                        
                    </div>
                    <p className='text-[16px] leading-5 font-medium text-textColor'>
                            New Apollo Hospital, Indore
                    </p>

                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] p-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {FormatDate("2025-08-24")} - {FormatDate("2025-08-24")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                           Sr. Surgeon
                    </p>

                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, Indore
                    </p>
                </li>

                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {FormatDate("2025-08-24")} - {FormatDate("2025-08-24")}
                    </span>
                    <p className='text-[15px] leading-6 font-medium text-textColor'>
                           Sr. Surgeon
                    </p>

                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                        New Apollo Hospital, Indore
                    </p>
                </li>

                
            </ul>
        </div>
    </div>
  )
}

export default Doctorabout
 