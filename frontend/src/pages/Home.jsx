import React from 'react'

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
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
