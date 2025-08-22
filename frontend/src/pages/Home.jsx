import React from 'react'
import heroIamge01 from '../assets/images/hero-img01.png'
import heroIamge02 from '../assets/images/hero-img02.png'
import heroIamge03 from '../assets/images/hero-img03.png'
const Home = () => {
  return (
    // =======hero section========
    <>
        <section className='hero_Section pt-[60px] 2xl:h-[800px]'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
                    {/* ======hero-contant======= */}
                    <div>
                        <div className='lg:w-[570px]'>
                            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] mb-[20px]'>We help patients live a healthy, longer life.</h1>
                            <p className='text_para'>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat nulla facilis unde officia repellendus? Voluptates quis sunt blanditiis voluptate totam, quos at quibusdam itaque neque obcaecati consequuntur recusandae culpa! Officiis?
                            </p>
                            <button className='btn'>Request An Appointment</button>
                        </div>


                        {/* ========hero-counter========= */}
                        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] '>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                <p className='text-para'>Year of Experience</p>
                            </div>

                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>15+</h2>
                                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                <p className='text-para'>Clinic Location</p>
                            </div>

                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                <p className='text-para'>Patient Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* ======hero-contant======= */}
                    <div className='flex gap-[30px] justify-end'>
                        <div>
                            <img className='w-[full]' src={heroIamge01} alt="" />
                        </div>
                        <div className='mt-[30px]'>
                            <img className='w-[full] mb-[30px]' src={heroIamge02} alt="" />
                            <img className='w-[full] ' src={heroIamge03} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
