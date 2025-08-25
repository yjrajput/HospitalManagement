import React, { useState } from 'react'
import doctorImage from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import Doctorabout from './Doctorabout'
import Doctorfeedback from './Doctorfeedback'

const Doctorsdetails = () => {

  const [tab, settab] = useState('about')
  return (
    <section>
        <div className='max-w-[1170px] px-5 mx-auto'>
          <div className='grid md:grid-cols-3 gap-[50px]'>
            <div className='md:col-span-2'>
              <div className='flex items-center gap-5'>
                  <figure className='max-[200px] mx-h-[200px]'>
                    <img src={doctorImage} alt="" />
                  </figure>

                  <div>
                    <span className='bg-[#ccf0f3] text-iresBlurColor py-1 px-6 lg:py-2 llg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                        Surgeon
                    </span>
                    <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold '>
                      Yuvraj Rathore
                    </h3>
                    <div className='flex items-center gap-[6px]'>
                        <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                            <img src={starIcon} alt="" /> 4.8
                        </span>
                        <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                            (272)
                        </span>
                    </div>
                    <p className='text-para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi natus error at commodi temporibus ullam!</p>
                  </div>
              </div>

              <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                  <button onClick={() => settab('about')} className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2  px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>
                      About
                  </button>

                  <button onClick={() => settab('feedback')}  className={ `${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2  px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold` }>
                      Feedback
                  </button>
              </div>

                <div className='mt-[50px]'>
                    {
                      tab === 'about' && <Doctorabout/>
                    }
                    {
                      tab === 'feedback' && <Doctorfeedback/>
                    }
                </div>

            </div>
          </div>
        </div> 
    </section>
  )
}

export default Doctorsdetails
