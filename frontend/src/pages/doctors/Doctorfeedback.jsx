import React, { useState } from 'react'
import avtarImg from '../../assets/images/avatar-icon.png'
import { FormatDate } from '../../utils/FormateDate'
import { AiFillStar } from "react-icons/ai";
import Feedbackform from './Feedbackform';
const Doctorfeedback = () => {

  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className='mb-[50px]'>
        <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
          All reviews (270)
        </h4>

        <div className='flex justify-between gap-10 mb-[30px]'>
          <div className='flex gap-3'>
            <figure className='w-10 h-10 rounded-full'>
              <img src={avtarImg} alt="" />
            </figure>

            <div>
              <h5 className='text-[16px] leading-6 text-primaryColor font-bold  '>
                Yuvraj rathore
              </h5>
              <p className='text-[14px] leading-6 text-textColor'>
                {FormatDate("2025-08-24")}
              </p>
              <p className='text-para mt-3 font-medium text-[15px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eaque!
              </p>
            </div>
          </div>

          <div className='flex gap-1'>
              {[...Array(5).keys()].map((_, index) =>(
                <AiFillStar key={index} color='#0067ff'/>
              ))}
          </div>
        </div>
      </div>

      {
        !showFeedbackForm && <div className='text-center'>
            <button className='btn' onClick={() => setShowFeedbackForm(true)}>Give Feedback</button>
        </div>
      }

      {showFeedbackForm && <Feedbackform/>}
    </div>
  )
}

export default Doctorfeedback
